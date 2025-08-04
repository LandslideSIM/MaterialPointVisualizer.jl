"""
function torus_points(n)
    R = 1.0
    r = 0.3
    θ = 2π * rand(n)
    ϕ = 2π * rand(n)
    x = (R .+ r .* cos.(θ)) .* cos.(ϕ)
    y = (R .+ r .* cos.(θ)) .* sin.(ϕ)
    z = r .* sin.(θ)
    return Array(hcat(x, y, z)')
end

points = torus_points(1_000_000)
points[3, :] .+= 100
values = points[3, :]  # z as the value to color by

chunk, x, y, z, colors, vmin, vmax = voxelize_with_colormap(points, values;
    voxelsize = 0.01,
    colormap  = :plasma,
    ncolors   = 64
)

let
    Makie.set_theme!(WGLMakie=(resize_to=:body,), gettheme())
    set_theme!(theme_dark())
    fig = Figure()
    ax = LScene(fig[1, 1])
    voxels!(ax, x, y, z, chunk; color=colors, gap=0)
    Colorbar(fig[1, 2], colormap=colors, colorrange=(vmin, vmax), label="z value", 
        spinewidth=0)
    display(fig)
end
"""
function _voxelize_with_colormap(
    points    ::AbstractMatrix{<:Real},
    values    ::AbstractVector{<:Real},
    voxelsize ::Real,
    colormap  ::Symbol,
    ncolors   ::Int
)
    @assert size(points, 2) == length(values)

    # keep the original extrema function for colormap
    vmin, vmax = extrema(values)
    norm_values = (values .- vmin) ./ (vmax - vmin + eps())

    x_min, y_min, z_min = minimum(points, dims=2)
    x_max, y_max, z_max = maximum(points, dims=2)
    nx = Int(cld(x_max - x_min, voxelsize))
    ny = Int(cld(y_max - y_min, voxelsize))
    nz = Int(cld(z_max - z_min, voxelsize))

    count = zeros(Int, nx, ny, nz)
    accum = zeros(Float64, nx, ny, nz)

    @inbounds for i in axes(points, 2)
        x, y, z = points[1, i], points[2, i], points[3, i]
        ix = floor(Int, (x - x_min) / voxelsize)
        iy = floor(Int, (y - y_min) / voxelsize)
        iz = floor(Int, (z - z_min) / voxelsize)
        if 0 <= ix < nx && 0 <= iy < ny && 0 <= iz < nz
            i1, j1, k1 = ix+1, iy+1, iz+1
            count[i1, j1, k1] += 1
            accum[i1, j1, k1] += norm_values[i]
        end
    end

    chunk = zeros(UInt8, nx, ny, nz)
    @inbounds for i in eachindex(chunk)
        if count[i] > 0
            val = accum[i] / count[i]
            idx = clamp(round(Int, val * ncolors), 1, ncolors)
            chunk[i] = UInt8(idx)
        end
    end

    cs = getfield(ColorSchemes, colormap)
    colors = [get(cs, (i - 1)/(ncolors - 1)) for i in 1:ncolors]

    xrange = x_min .. (x_min + (nx - 1) * voxelsize)
    yrange = y_min .. (y_min + (ny - 1) * voxelsize)
    zrange = z_min .. (z_min + (nz - 1) * voxelsize)

    return chunk, xrange, yrange, zrange, colors, vmin, vmax
end

