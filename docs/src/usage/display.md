# GUI

!!! info

    Sometimes we already have data in Julia and just want to see the results without exporting it to other software for visualization, which is too troublesome...😢

This implementation is achieved through [MeshCat.jl](https://github.com/rdeits/MeshCat.jl), which provides an interactive 3D visualization viewer accessible through a standard web browser.

```@docs
vispts(
    raw_pts ::Array{<:Real, 2};
    markersize ::Real=0.002,
    cval ::Vector{<:Real}=Float32[],
    colormap ::ColorScheme=ColorSchemes.jet
)
```

## Quick Start

### Visualize Point Cloud

```julia
using MaterialPointVisualizer

# Create random points
pts = rand(10000, 3)

# Visualize with default settings
vis = vispts(pts)
```

### Add Color by Values

```julia
# Create points and corresponding values
pts = rand(10000, 3)
vals = rand(10000)

# Visualize with color mapping
vis = vispts(pts, cval=vals, colormap=ColorSchemes.viridis, markersize=0.001)
```

### Visualize 2D Points

```julia
# 2D points are automatically converted to 3D (z=0)
pts_2d = rand(5000, 2)
vis = vispts(pts_2d, markersize=0.005)
```

## Browser Display

The visualization opens in your default web browser. You can interact with the viewer using:
- **Mouse drag**: Rotate the view
- **Mouse scroll**: Zoom in/out
- **Right-click drag**: Pan the view