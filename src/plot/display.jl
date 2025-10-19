export vispts

"""
    vispts(raw_pts::Array{<:Real, 2}; markersize::Real=0.002, cval::Vector{<:Real}=Float32[], colormap::ColorScheme=ColorSchemes.jet)

Visualize 3D or 2D point cloud using MeshCat interactive viewer.

# Arguments
- `raw_pts::Array{<:Real, 2}`: Nx2 or Nx3 array where each row contains the coordinates [x, y] or [x, y, z] of a point.
- `markersize::Real=0.002`: Size of the point markers in the visualization.
- `cval::Vector{<:Real}=Float32[]`: Values for coloring each point. If empty, all points use the default color from colormap.
- `colormap::ColorScheme=ColorSchemes.jet`: ColorScheme object from ColorSchemes.jl for mapping values to colors.

# Returns
- `vis::Visualizer`: A MeshCat Visualizer object that can be displayed interactively.

# Examples
```julia
# Visualize random 3D points
pts = rand(10000, 3)
vis = vispts(pts)

# Visualize with color values
vals = rand(10000)
vis = vispts(pts, cval=vals, colormap=ColorSchemes.viridis, markersize=0.001)

# Visualize 2D points (will be converted to 3D with z=0)
pts_2d = rand(5000, 2)
vis = vispts(pts_2d)
```
"""
function vispts(raw_pts::Array{<:Real, 2};
    markersize::Real=0.002, 
    cval::Vector{<:Real}=Float32[],
    colormap::ColorScheme=ColorSchemes.jet
)
    row, col = size(raw_pts); col ∈ [2, 3] || error("Input raw_pts must be of size Nx2 or Nx3.")
    
    # Convert to 3D points efficiently
    if col == 2
        verts = [Point{3, Float32}(Float32(raw_pts[i, 1]), Float32(raw_pts[i, 2]), 0f0) for i in 1:row]
    else
        verts = Point{3, Float32}.(eachrow(raw_pts))
    end
    
    # Set up colors
    if isempty(cval)
        colors = [colormap[1.0] for _ in 1:row]  # Use default color
    else
        length(cval) == row || error("Length of cval must match number of points.")
        c_min, c_max = extrema(cval)
        colors = [get(colormap, (cval[i] - c_min) / (c_max - c_min)) for i in 1:row]
    end

    vis = Visualizer()
    open(vis, start_browser=false)
    material = PointsMaterial(vertexColors=2, size=Float32(markersize))
    setobject!(vis, PointCloud(verts, colors), material)
    return nothing
end