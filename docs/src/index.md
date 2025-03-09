```@raw html
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: MaterialPointVisualizer.jl
  text: MPM model postprocessor
  tagline: A High-performance Backend-agnostic Material Point Method Solver in Julia
  actions:
    - theme: brand
      text: View on GitHub 👀
      link: https://github.com/LandslideSIM/MaterialPointVisualizer.jl
  image:
    src: /logo.png
    alt: MaterialPointVisualizerr.jl

features:
  - icon: 🧰
    title: Compatibility
    details: Integrated with <a href="https://github.com/LandslideSIM/MaterialPointSolver.jl" target="_blank" class="highlight-link">MaterialPointSolver.jl</a>, it can be used directly to visualize calculation results; there is also a convenient API for general particle data.

  - icon: 🔍
    title: Surface Reconstruction
    details: To better carry out post-processing, we use <a href="https://github.com/InteractiveComputerGraphics/splashsurf" target="_blank" class="highlight-link">splashsurf</a> to reconstruct the surface from the MPM particle model, including multiple file sequences.

  - icon: 👷
    title: VTK
    details: Support exporting to <a class="highlight-link">.vtp</a> files or animations for easy viewing or rendering in <a href="https://www.paraview.org" target="_blank" class="highlight-link">ParaView</a>.

  - icon: 🖥️
    title: GUI
    details: We built a interactive GUI that supports millions of particles using <a href="https://threejs.org" target="_blank" class="highlight-link">Three.js</a>, which can automatically return to the local browser for immediate viewing even on a remote headless server.
---
```