<template>
  <div id="visualizer-container" style="width: 100%; height: 600px;"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js';
import GUI from 'lil-gui';

export default {
  name: 'Visualizer',
  mounted() {
    // Trigger the fetch of binary data when the component is mounted
    this.fetchBinaryData('./MaterialPointVisualizerTEMP.bin'); // Assumes the .bin file is in the public directory
  },
  methods: {
    /**
     * Fetches and processes binary data from the specified path
     * @param {string} binPath - Path to the binary file
     */
    fetchBinaryData(binPath) {
      fetch(binPath)
        .then(response => response.arrayBuffer())
        .then(buffer => {
          const dataView = new DataView(buffer);

          // Read vertex count and attribute count
          const n = dataView.getInt32(0, true); // Little-endian
          const k = dataView.getInt32(4, true);

          // Read attribute names
          let offset = 8;
          const attributeNames = [];
          for (let i = 0; i < k; i++) {
            const len = dataView.getInt32(offset, true);
            offset += 4;
            const nameBytes = new Uint8Array(buffer, offset, len);
            const name = new TextDecoder().decode(nameBytes);
            attributeNames.push(name);
            offset += len;
            const padding = (4 - (len % 4)) % 4; // Skip padding bytes
            offset += padding;
          }

          // Read vertex data
          const floatsPerVertex = 3 + k; // 3 coordinates + k attributes
          const totalVertexFloats = n * floatsPerVertex;
          const vertexData = new Float32Array(buffer, offset, totalVertexFloats);
          offset += totalVertexFloats * 4;

          // Read color data
          const colorsList = [];
          for (let j = 0; j < k; j++) {
            const colors = new Float32Array(buffer, offset, n * 3);
            colorsList.push(colors);
            offset += n * 3 * 4;
          }

          // Read min/max values for attributes
          const minMaxList = [];
          for (let j = 0; j < k; j++) {
            const minVal = dataView.getFloat32(offset, true);
            offset += 4;
            const maxVal = dataView.getFloat32(offset, true);
            offset += 4;
            minMaxList.push({ min: minVal, max: maxVal });
          }

          // Read colorbar data
          const numSamples = dataView.getInt32(offset, true);
          offset += 4;
          const colorbarColors = new Float32Array(buffer, offset, numSamples * 3);

          // Create geometry for the point cloud
          const geometry = new THREE.BufferGeometry();
          const positions = new Float32Array(n * 3);
          for (let i = 0; i < n; i++) {
            positions[i * 3] = vertexData[i * floatsPerVertex];     // x
            positions[i * 3 + 1] = vertexData[i * floatsPerVertex + 1]; // y
            positions[i * 3 + 2] = vertexData[i * floatsPerVertex + 2]; // z
          }
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

          // Create material and point cloud
          const material = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true
          });
          const points = new THREE.Points(geometry, material);

          // Store data in component for later use
          this.attributeNames = attributeNames;
          this.minMaxList = minMaxList;
          this.numSamples = numSamples;
          this.colorbarColors = colorbarColors;

          // Render the point cloud
          this.renderPoints(points, geometry, attributeNames, colorsList, minMaxList, n, k, colorbarColors, numSamples);
        })
        .catch(error => console.error('Error loading binary file:', error));
    },

    /**
     * Renders the point cloud with Three.js
     * @param {THREE.Points} points - The point cloud object
     * @param {THREE.BufferGeometry} geometry - Geometry of the point cloud
     * @param {string[]} attributeNames - List of attribute names
     * @param {Float32Array[]} colorsList - List of color arrays
     * @param {Object[]} minMaxList - List of min/max values for attributes
     * @param {number} n - Number of vertices
     * @param {number} k - Number of attributes
     * @param {Float32Array} colorbarColors - Colors for the colorbar
     * @param {number} numSamples - Number of samples in the colorbar
     */
    renderPoints(points, geometry, attributeNames, colorsList, minMaxList, n, k, colorbarColors, numSamples) {
      // Initialize scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x111111);
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Append renderer to the container div instead of body
      document.getElementById('visualizer-container').appendChild(renderer.domElement);

      scene.add(points);

      // Compute bounding box and scale
      const box = new THREE.Box3().setFromObject(points);
      const min = box.min;
      const max = box.max;
      const center = new THREE.Vector3().addVectors(min, max).multiplyScalar(0.5);
      const size = new THREE.Vector3().subVectors(max, min);
      const maxDim = Math.max(size.x, size.y, size.z);

      const scaleFactor = 10;
      points.scale.set(scaleFactor, scaleFactor, scaleFactor);
      box.setFromObject(points);
      const scaledMin = box.min;
      const scaledMax = box.max;
      const scaledCenter = new THREE.Vector3().addVectors(scaledMin, scaledMax).multiplyScalar(0.5);
      const scaledSize = new THREE.Vector3().subVectors(scaledMax, scaledMin);
      const scaledMaxDim = Math.max(scaledSize.x, scaledSize.y, scaledSize.z);

      // Set up camera
      const cameraDistance = scaledMaxDim * 1.5;
      camera.position.set(scaledCenter.x, scaledCenter.y, scaledCenter.z + cameraDistance);
      camera.lookAt(scaledCenter);

      // Create bounding box
      const boxGeometry = new THREE.BoxGeometry(scaledSize.x, scaledSize.y, scaledSize.z);
      const edges = new THREE.EdgesGeometry(boxGeometry);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
      const boundingBox = new THREE.LineSegments(edges, lineMaterial);
      boundingBox.position.copy(scaledCenter);
      scene.add(boundingBox);

      // Create ticks and labels
      const ticksGroup = new THREE.Group();
      const tickLabelsGroup = new THREE.Group();
      scene.add(ticksGroup);
      scene.add(tickLabelsGroup);

      const createTicksAndLabels = () => {
        ticksGroup.clear();
        tickLabelsGroup.clear();

        const steps = 10;
        const xStep = scaledSize.x / steps;
        const yStep = scaledSize.y / steps;
        const zStep = scaledSize.z / steps;
        const tickLength = scaledMaxDim * 0.02;

        // X-axis ticks
        for (let i = 0; i <= steps; i++) {
          const x = scaledMin.x + i * xStep;
          const pos = new THREE.Vector3(x, scaledMin.y, scaledMin.z);
          const tickGeometry = new THREE.BufferGeometry().setFromPoints([
            pos,
            pos.clone().add(new THREE.Vector3(0, -tickLength, 0))
          ]);
          const tickLine = new THREE.Line(tickGeometry, new THREE.LineBasicMaterial({ color: 0xffffff }));
          ticksGroup.add(tickLine);

          if (this.settings.showTickLabels) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = `${this.settings.tickFontSize}px Arial`;
            const text = (x / scaleFactor).toFixed(1);
            const textWidth = context.measureText(text).width;
            canvas.width = textWidth * 1.2;
            canvas.height = this.settings.tickFontSize * 1.5;
            context.fillStyle = '#000000';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.font = `${this.settings.tickFontSize}px Arial`;
            context.fillStyle = '#ffffff';
            context.fillText(text, textWidth * 0.1, this.settings.tickFontSize * 1.2);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(canvas.width / 50, canvas.height / 50, 1);
            sprite.position.set(x, scaledMin.y - tickLength * 1.5, scaledMin.z);
            tickLabelsGroup.add(sprite);
          }
        }

        // Y-axis ticks
        for (let i = 0; i <= steps; i++) {
          const y = scaledMin.y + i * yStep;
          const pos = new THREE.Vector3(scaledMin.x, y, scaledMin.z);
          const tickGeometry = new THREE.BufferGeometry().setFromPoints([
            pos,
            pos.clone().add(new THREE.Vector3(-tickLength, 0, 0))
          ]);
          const tickLine = new THREE.Line(tickGeometry, new THREE.LineBasicMaterial({ color: 0xffffff }));
          ticksGroup.add(tickLine);

          if (this.settings.showTickLabels) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = `${this.settings.tickFontSize}px Arial`;
            const text = (y / scaleFactor).toFixed(1);
            const textWidth = context.measureText(text).width;
            canvas.width = textWidth * 1.2;
            canvas.height = this.settings.tickFontSize * 1.5;
            context.fillStyle = '#000000';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.font = `${this.settings.tickFontSize}px Arial`;
            context.fillStyle = '#ffffff';
            context.fillText(text, textWidth * 0.1, this.settings.tickFontSize * 1.2);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(canvas.width / 50, canvas.height / 50, 1);
            sprite.position.set(scaledMin.x - tickLength * 1.5, y, scaledMin.z);
            tickLabelsGroup.add(sprite);
          }
        }

        // Z-axis ticks
        for (let i = 0; i <= steps; i++) {
          const z = scaledMin.z + i * zStep;
          const pos = new THREE.Vector3(scaledMax.x, scaledMin.y, z);
          const tickGeometry = new THREE.BufferGeometry().setFromPoints([
            pos,
            pos.clone().add(new THREE.Vector3(0, -tickLength, 0))
          ]);
          const tickLine = new THREE.Line(tickGeometry, new THREE.LineBasicMaterial({ color: 0xffffff }));
          ticksGroup.add(tickLine);

          if (this.settings.showTickLabels) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = `${this.settings.tickFontSize}px Arial`;
            const text = (z / scaleFactor).toFixed(1);
            const textWidth = context.measureText(text).width;
            canvas.width = textWidth * 1.2;
            canvas.height = this.settings.tickFontSize * 1.5;
            context.fillStyle = '#000000';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.font = `${this.settings.tickFontSize}px Arial`;
            context.fillStyle = '#ffffff';
            context.fillText(text, textWidth * 0.1, this.settings.tickFontSize * 1.2);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(canvas.width / 50, canvas.height / 50, 1);
            sprite.position.set(scaledMax.x + tickLength * 1.5, scaledMin.y - tickLength * 1.5, z);
            tickLabelsGroup.add(sprite);
          }
        }
      };

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = scaledMaxDim * 0.1;
      controls.maxDistance = scaledMaxDim * 10;
      controls.target.copy(scaledCenter);
      controls.update();

      // FPS stats
      const stats = new Stats();
      document.body.appendChild(stats.dom);

      // GUI setup
      const gui = new GUI();
      this.settings = {
        showAxes: true,
        showBoundingBox: false,
        showTickLabels: false,
        tickFontSize: 20,
        showColorbar: false,
        colorbarPosition: 'top',
        colorbarFontSize: 20,
        particleSize: 0.1,
        showFPS: true,
        colorBy: attributeNames.length > 0 ? attributeNames[0] : 'none'
      };

      const axesFolder = gui.addFolder('Axes System');
      const axesHelper = new THREE.AxesHelper(scaledMaxDim * 0.5);
      axesHelper.position.copy(scaledCenter);
      scene.add(axesHelper);

      axesFolder.add(this.settings, 'showAxes').name('- coordinate').onChange(value => {
        axesHelper.visible = value;
      });
      axesFolder.add(this.settings, 'showBoundingBox').name('- axes').onChange(value => {
        boundingBox.visible = value;
        ticksGroup.visible = value;
      });
      axesFolder.add(this.settings, 'showTickLabels').name('- axes ticks').onChange(value => {
        tickLabelsGroup.visible = value;
      });
      axesFolder.add(this.settings, 'tickFontSize', 10, 200, 1).name('- tick font size').onChange(() => {
        createTicksAndLabels();
        tickLabelsGroup.visible = this.settings.showTickLabels;
      });
      axesFolder.add(this.settings, 'showColorbar').name('- colorbar').onChange(this.updateColorbar.bind(this));
      axesFolder.add(this.settings, 'colorbarPosition', ['top', 'bottom', 'left', 'right']).name('- colorbar position').onChange(this.updateColorbar.bind(this));
      axesFolder.add(this.settings, 'colorbarFontSize', 10, 200, 1).name('- colorbar font size').onChange(this.updateColorbar.bind(this));

      const particleFolder = gui.addFolder('Particle System');
      if (attributeNames.length > 0) {
        particleFolder.add(this.settings, 'colorBy', ['none', ...attributeNames]).name('- color by').onChange(this.updateColors.bind(this, geometry, points, attributeNames, colorsList));
      } else {
        this.settings.colorBy = 'none';
      }
      particleFolder.add(this.settings, 'particleSize', 0.1, 10, 0.1).name('- particle Size').onChange(value => {
        points.material.size = value;
      });

      gui.add(this.settings, 'showFPS').name('FPS Tool').onChange(value => {
        stats.dom.style.display = value ? 'block' : 'none';
      });

      gui.add({
        resetView: () => {
          camera.position.copy(this.initialCameraPosition);
          controls.target.copy(this.initialControlsTarget);
          controls.update();
        }
      }, 'resetView').name('Reset View');

      gui.add({ particleNumber: n }, 'particleNumber').name('Particle Number').listen().disable();

      // Initialization
      createTicksAndLabels();
      ticksGroup.visible = this.settings.showBoundingBox;
      tickLabelsGroup.visible = this.settings.showTickLabels;

      this.initialCameraPosition = camera.position.clone();
      this.initialControlsTarget = controls.target.clone();

      this.updateColors(geometry, points, attributeNames, colorsList);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        stats.update();
        tickLabelsGroup.children.forEach(label => {
          if (label.isSprite) label.quaternion.copy(camera.quaternion);
        });
        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        this.updateColorbar();
      });
    },

    /**
     * Updates the colors of the point cloud based on the selected attribute
     * @param {THREE.BufferGeometry} geometry - Geometry of the point cloud
     * @param {THREE.Points} points - The point cloud object
     * @param {string[]} attributeNames - List of attribute names
     * @param {Float32Array[]} colorsList - List of color arrays
     */
    updateColors(geometry, points, attributeNames, colorsList) {
      if (this.settings.colorBy === 'none') {
        const color = new THREE.Color(0xff0000); // Default red
        const colors = new Float32Array(geometry.attributes.position.count * 3);
        for (let i = 0; i < geometry.attributes.position.count; i++) {
          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;
        }
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      } else {
        const index = attributeNames.indexOf(this.settings.colorBy);
        if (index >= 0) {
          const colors = colorsList[index];
          geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        }
      }
      geometry.attributes.color.needsUpdate = true;
      points.material.needsUpdate = true;
      this.updateColorbar();
    },

    /**
     * Updates the colorbar UI element
     */
    updateColorbar() {
      let colorbarContainer = document.querySelector('#colorbar-container');
      if (colorbarContainer) {
        document.body.removeChild(colorbarContainer);
        colorbarContainer = null;
      }

      if (!this.settings.showColorbar || this.settings.colorBy === 'none') return;

      const index = this.attributeNames.indexOf(this.settings.colorBy);
      if (index < 0) return;

      const { min: minVal, max: maxVal } = this.minMaxList[index];

      colorbarContainer = document.createElement('div');
      colorbarContainer.id = 'colorbar-container';
      colorbarContainer.style.position = 'absolute';
      colorbarContainer.style.background = 'rgba(0, 0, 0, 0.7)';
      colorbarContainer.style.padding = '10px';

      const margin = 20;
      const isHorizontal = this.settings.colorbarPosition === 'top' || this.settings.colorbarPosition === 'bottom';
      const canvasWidth = isHorizontal ? 200 : 20;
      const canvasHeight = isHorizontal ? 20 : 200;

      switch (this.settings.colorbarPosition) {
        case 'top':
          colorbarContainer.style.top = `${margin}px`;
          colorbarContainer.style.left = '50%';
          colorbarContainer.style.transform = 'translateX(-50%)';
          break;
        case 'bottom':
          colorbarContainer.style.bottom = `${margin}px`;
          colorbarContainer.style.left = '50%';
          colorbarContainer.style.transform = 'translateX(-50%)';
          break;
        case 'left':
          colorbarContainer.style.left = `${margin}px`;
          colorbarContainer.style.top = '50%';
          colorbarContainer.style.transform = 'translateY(-50%)';
          break;
        case 'right':
          colorbarContainer.style.right = `${margin}px`;
          colorbarContainer.style.top = '50%';
          colorbarContainer.style.transform = 'translateY(-50%)';
          break;
      }

      const canvas = document.createElement('canvas');
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext('2d');

      // Draw colorbar using data from the binary file
      const step = isHorizontal ? canvasWidth / this.numSamples : canvasHeight / this.numSamples;
      for (let i = 0; i < this.numSamples; i++) {
        const r = this.colorbarColors[i * 3] * 255;
        const g = this.colorbarColors[i * 3 + 1] * 255;
        const b = this.colorbarColors[i * 3 + 2] * 255;
        ctx.fillStyle = `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
        if (isHorizontal) {
          ctx.fillRect(i * step, 0, step + 1, canvasHeight); // +1 to avoid gaps
        } else {
          ctx.fillRect(0, (this.numSamples - 1 - i) * step, canvasWidth, step + 1); // Bottom to top
        }
      }

      colorbarContainer.appendChild(canvas);

      // Generate tick labels dynamically
      const numTicks = 5;
      const range = maxVal - minVal;
      const tickValues = [];
      for (let i = 0; i < numTicks; i++) {
        const tickValue = minVal + (i / (numTicks - 1)) * range;
        tickValues.push(tickValue.toFixed(2));
      }

      tickValues.forEach((value, i) => {
        const tick = document.createElement('div');
        tick.style.position = 'absolute';
        tick.style.background = 'white';
        const label = document.createElement('div');
        label.textContent = value;
        label.style.position = 'absolute';
        label.style.color = 'white';
        label.style.fontSize = `${this.settings.colorbarFontSize}px`;
        label.style.fontFamily = 'Arial';

        const pos = (i / (numTicks - 1)) * (isHorizontal ? canvasWidth : canvasHeight);

        if (isHorizontal) {
          tick.style.width = '1px';
          tick.style.height = '10px';
          tick.style.left = `${pos}px`;
          tick.style.top = `${canvasHeight}px`;
          label.style.left = `${pos}px`;
          label.style.top = `${canvasHeight + 15}px`;
          label.style.transform = 'translateX(-50%)';
        } else {
          tick.style.width = '10px';
          tick.style.height = '1px';
          if (this.settings.colorbarPosition === 'left') {
            tick.style.left = `${canvasWidth}px`;
            label.style.left = `${canvasWidth + 15}px`;
          } else {
            tick.style.left = '0px';
            label.style.right = '15px';
            label.style.textAlign = 'right';
          }
          tick.style.bottom = `${pos}px`;
          label.style.bottom = `${pos}px`;
          label.style.transform = 'translateY(50%)';
        }
        colorbarContainer.appendChild(tick);
        colorbarContainer.appendChild(label);
      });

      document.body.appendChild(colorbarContainer);
    }
  },
  data() {
    return {
      settings: null,
      initialCameraPosition: null,
      initialControlsTarget: null,
      attributeNames: [],
      minMaxList: [],
      numSamples: 0,
      colorbarColors: null
    };
  }
};
</script>

<style scoped>
#visualizer-container {
  margin: 0;
  overflow: hidden;
}
</style>