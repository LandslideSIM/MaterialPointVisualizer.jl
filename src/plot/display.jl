#==========================================================================================+
|               MaterialPointVisualizer.jl: Post-processing for MPM in Julia               |
+------------------------------------------------------------------------------------------+
|  File Name  : local.jl                                                                   |
|  Description: plot particle in a local GUI window                                        |
|  Programmer : Zenan Huo                                                                  |
|  Start Date : 01/01/2025                                                                 |
|  Affiliation: Risk Group, UNIL-ISTE                                                      |
+==========================================================================================#

export vispts

include(joinpath(@__DIR__, "plotutils.jl"))

"""
    vispts(coord, colormap::Symbol=:viridis, colorby::String="-1", attr::Vector=[-1], 
        psize::Float32=1f-2, sample_n::Int=1000000)

Description:
---
Visualize the particles in a browser/VSCode using WGLMakie.

- coord: The coordinates of the particles. It should be a 2D or 3D array of shape (n, m), 
where n is the number of particles and m is the dimension (2 or 3).
- colormap [option]: The colormap to use for the visualization. Default is :viridis.
- colorby [option]: The attribute to color the particles by. Default is "-1", which means
    the z-coordinate. If attr is provided, it will be used instead.
- attr [option]: The attributes of the particles. It should be a vector of length n.
- psize [option]: The size of the particles in the visualization. Default is 1e-2.
- sample_n [option]: The number of particles to sample for visualization. Default is 1,000,000.
    If the number of particles exceeds this value, a random sample will be taken.

Examples:
---
```julia
vispts(rand(10, 3))
vispts(rand(10, 3), colorby="random vals", attr=rand(10), psize=1f0, sample_n=5, colormap=:jet)
```
"""
@views function vispts(
    coord   ::Matrix;
    colormap::Symbol=:viridis,
    colorby ::String="-1",
    attr    ::Vector=[-1],
    psize   ::Float32=1f-2,
    sample_n::Int=1000000
)
    # check input file
    n, m = size(coord)
    m in [2, 3] || error("The provided coord must have 2/3 columns (2D, 3D)")
    if n > sample_n
        vid = sort(sample(1:n, sample_n; replace=false))
        coord = Array{Float32}(coord[vid, :])
        n = sample_n
    else 
        coord = Array{Float32}(coord)
        vid = 1:n
    end
    m == 2 ? coord = hcat(coord, zeros(Float32, n)) : nothing
    if colorby == "-1" && attr == [-1]
        colorby = "z-coord"
    end
    if attr == [-1]
        attr = Array{Float32}(coord[:, 3])
    else
        attr = Array{Float32}(attr[vid])
        n == length(attr) || error("The provided attr must have the same length as coord")
    end
    
    # create a new figure
    Makie.set_theme!(WGLMakie=(resize_to=:body,), gettheme())
    fig = Figure()
    ax = LScene(fig[1, 1], show_axis=false)
    vmin = round.(vec(minimum(coord, dims=1)), digits=2)
    vmax = round.(vec(maximum(coord, dims=1)), digits=2)
    Label(fig[1, 1, Top()], "Particle Number: $n")
    Label(fig[1, 1, Bottom()], "\nvmin: $(vmin) | vmax: $(vmax)", justification=:left)
    plt = scatter!(ax, coord, color=attr, markersize=psize, colormap=colormap, 
        transparency=false, depthsorting=false, marker=:rect)
    Colorbar(fig[1, 2], plt, label=colorby, spinewidth=0)
    display(fig)

    return nothing
end