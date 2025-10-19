#==========================================================================================+
|               MaterialPointVisualizer.jl: Post-processing for MPM in Julia               |
+------------------------------------------------------------------------------------------+
|  File Name  : local.jl                                                                   |
|  Description: plot particle in a local GUI window                                        |
|  Programmer : Zenan Huo                                                                  |
|  Start Date : 01/01/2025                                                                 |
|  Affiliation: Risk Group, UNIL-ISTE                                                      |
+==========================================================================================#

export vispts, visvol

include(joinpath(@__DIR__, "plotutils.jl"))
include(joinpath(@__DIR__, "voxel.jl"))

"""
    vispts(coord::Matrix; colorby::String, attr::Vector, psize::Real, colormap::Symbol=:turbo, sample_n::Int=1000000)

Description:
---
Visualize the particles in a browser/VSCode using WGLMakie.

- coord: The coordinates of the particles. It should be a 2D or 3D array of shape (n, m), 
    where m is the number of particles and n is the dimension (2 or 3).
- colorby: The attribute name to plot with the particles.
- attr: The attributes of the particles. It should be a vector of length m.
- psize: The size of the particles in the visualization.
- colormap [optional]: The colormap to use for the visualization. Default is :turbo.
- sample_n [optional]: The number of particles to sample for visualization. Default is 1,000,000.
    If the number of particles exceeds this value, a random sample will be taken.

Examples:
---
```julia
vispts(rand(3, 10), colorby="attr's name", attr=rand(10), psize=3f0)
vispts(rand(2, 10), colorby="random vals", attr=rand(10), psize=1f0, sample_n=5, colormap=:jet)
```
"""
@views function vispts(
    coord   ::Matrix;
    colorby ::String,
    attr    ::Vector,
    psize   ::Real,
    colormap::Symbol=:turbo,
    sample_n::Int=1000000
)
    # Check input shape
    n, m = size(coord)
    n in (2, 3) || error("The provided coord must have 2 or 3 rows (2D or 3D)")
    vid = m > sample_n ? sort(sample(1:m, sample_n; replace=false)) : 1:m
    coord32 = Array{Float32, 2}(coord[:, vid])
    n == 2 && (coord32 = vcat(coord32, zeros(Float32, 1, size(coord32, 2))))
    attr32 = Array{Float32, 1}(attr[vid])
    size(coord32, 2) == length(attr32) || error("Length of attr must match number of points in coord")

    # create a new figure
    Makie.set_theme!(WGLMakie=(resize_to=:body,), gettheme())
    fig = Figure()
    ax = LScene(fig[1, 1], show_axis=true)
    canvas = ax.scene.plots[1]
    canvas.ticks[:textcolor] = :white
    #canvas.ticks[:fontsize ] = debug.plot.axfontsize
    canvas.frame[:axiscolor] = "#818181"
    canvas.names[:textcolor] = :white
    #canvas.names[:fontsize ] = debug.plot.axfontsize
    Label(fig[1, 1, Top()], "Particle Number: $(size(coord32, 2))")
    plt = scatter!(ax, coord32, color=attr32, markersize=psize, colormap=colormap, 
        transparency=false, depthsorting=false, marker=:rect)
    Colorbar(fig[1, 2], plt, label=colorby, spinewidth=0)
    display(fig)
end

"""
    visvol(coord::Matrix; colorby::String, attr::Vector, vsize::Real, colormap::Symbol=:turbo, sample_n::Int=1000000, ncolors::Int=64)

Description:
---
Visualize the particles in a 3D voxel grid using WGLMakie.

- coord: The coordinates of the particles. It should be a 2D or 3D array of shape (n, m), 
    where m is the number of particles and n is the dimension (2 or 3).
- colorby: The attribute name to plot with the particles.
- attr: The attributes of the particles. It should be a vector of length m.
- vsize: The size of the voxels in the visualization.
- colormap [optional]: The colormap to use for the visualization. Default is :turbo.
- sample_n [optional]: The number of particles to sample for visualization. Default is 1,000,000.
    If the number of particles exceeds this value, a random sample will be taken.
- ncolors [optional]: The number of colors in the colormap. Default is 64.

Examples:
---
```julia
function torus_points(n)
    R, r, θ, ϕ = 1.0, 0.3, 2π * rand(n), 2π * rand(n)
    x = (R .+ r .* cos.(θ)) .* cos.(ϕ)
    y = (R .+ r .* cos.(θ)) .* sin.(ϕ)
    z = r .* sin.(θ)
    return Array(hcat(x, y, z)')
end
points = torus_points(1_000_000)
points[3, :] .+= 100
values = points[3, :]  # z as the value to color by

visvol(points, colorby="torus", attr=values, vsize=0.01)
```
"""
@views function visvol(
    coord   ::Matrix;
    colorby ::String,
    attr    ::Vector,
    vsize   ::Real,
    colormap::Symbol=:turbo,
    sample_n::Int=1000000,
    ncolors ::Int=64
)
    # Check input shape
    n, m = size(coord)
    n in (2, 3) || error("The provided coord must have 2 or 3 rows (2D or 3D)")
    vid = m > sample_n ? sort(sample(1:m, sample_n; replace=false)) : 1:m
    coord32 = Array{Float32, 2}(coord[:, vid])
    n == 2 && (coord32 = vcat(coord32, zeros(Float32, 1, size(coord32, 2))))
    attr32 = Array{Float32, 1}(attr[vid])
    size(coord32, 2) == length(attr32) || error("Length of attr must match number of points in coord")
    chunk, x, y, z, colors, vmin, vmax = _voxelize_with_colormap(coord32, attr32, vsize, colormap, ncolors)

    # create a new figure
    Makie.set_theme!(WGLMakie=(resize_to=:body,), gettheme())
    fig = Figure()
    ax = LScene(fig[1, 1], show_axis=true)
    canvas = ax.scene.plots[1]
    canvas.ticks[:textcolor] = :white
    #canvas.ticks[:fontsize ] = debug.plot.axfontsize
    canvas.frame[:axiscolor] = "#818181"
    canvas.names[:textcolor] = :white
    #canvas.names[:fontsize ] = debug.plot.axfontsize
    Label(fig[1, 1, Top()], "Particle Number: $(size(coord32, 2))")
    plt = voxels!(ax, x, y, z, chunk; color=colors, gap=0)
    Colorbar(fig[1, 2], plt, label=colorby, spinewidth=0)
    display(fig)
end