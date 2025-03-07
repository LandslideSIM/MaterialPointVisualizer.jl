using GLMakie
using StatsBase
using MaterialPointGenerator

n = 100
xy = meshbuilder(range(1, 10, length=n), range(1, 20, length=n))
z = sin.(xy[:, 1]) .+ cos.(xy[:, 2])
points = hcat(xy, z)
attr = z

@views function GUIdisplay(points::Matrix; 
    attr     ::Vector,
    colorby  ::String="values",
    axis     ::Bool  =false, 
    pointsize::Real  =2, 
    colormap ::Symbol=:viridis,
    colorbar ::Bool  =false
)
    # input check and preparation
    points .= Float32.(points) 
    pdims = size(points, 2)
    pdims in [2, 3] || throw(ArgumentError("points must be 2D or 3D"))

    # if too many points, sample
    pnums = size(points, 1)
    if pnums > 1_000_000
        vid = sort(sample(1:pnums, 1_000_000; replace=false))
        vpoints = points[vid, :]
        vattr = attr[vid]
    else
        vpoints = points
        vattr = attr
    end

    # add z=0 if 2D
    if pdims == 2 
        vpoints = hcat(vpoints, zeros(Float32, size(vpoints, 1)))
    end

    # create a scene
    with_theme(theme_dark()) do
        fig = Figure()
        ax = LScene(fig[1, 1], show_axis=axis)
        plt = scatter!(ax, vpoints, color=attr, markersize=pointsize, colormap=colormap,
            transparency=false, depthsorting=true)
        if colorbar
            Colorbar(fig[1, 2], plt, label=colorby, spinewidth=0)
        end
        display(fig)
    end

    return @info "GUI showed $(size(vpoints, 1)) particles"
end

GUIdisplay(points, attr=attr, colorbar=true)