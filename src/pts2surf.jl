#==========================================================================================+
|               MaterialPointVisualizer.jl: Post-processing for MPM in Julia               |
+------------------------------------------------------------------------------------------+
|  File Name  : pts2surf.jl                                                                |
|  Description: surface reconstruction for the particles                                   |
|  Programmer : Zenan Huo                                                                  |
|  Start Date : 01/01/2025                                                                 |
|  Affiliation: Risk Group, UNIL-ISTE                                                      |
|  Functions  : 1. pts2surf                                                                |
|               2. hdf2surf                                                                |
+==========================================================================================#

export pts2surf, hdf2surf

"""
    pts2surf(
        coords::AbstractArray, 
        output_file::String;
        radius::Real,
        density::Real,
        smoothing_length::Real=1.2,
        cube_size::Real=0.6,
        iso_surface_threshold::Real=0.6,
        mesh_smoothing_weights::Bool=true,
        mesh_smoothing_weights_normalization::Real=13.0,
        mesh_smoothing_iters::Int=25,
        normals_smoothing_iters::Int=10,
        mesh_cleanup::Bool=true,
        compute_normals::Bool=true,
        subdomain_grid::Bool=true,
        subdomain_num_cubes_per_dim::Int=64,
        output_mesh_smoothing_weights::Bool=true
    )

Description:
---
- radius: particle (primitive) radius should be half of the particle's diameter. 
- smoothing-length: It should be set around 1.2. The larger the value, the smoother the isosurface, but it will also artificially increase the fluid volume. 
- iso_surface-threshold: It can be used to offset the increase in fluid volume caused by factors such as larger particle radius, and a threshold of 0.6 seems to work quite well. 
- cube_size: Typically, it should not exceed 1. If the results are rough or the runtime is long, start increasing or decreasing from between 0.5 to 0.75. 

---

- 半径：粒子(原始)半径，应该是粒子直径的一半
- 光滑长度：应围绕1.2设置。值越大，等值面越平滑，但也会人为地增加流体体积
- 表面阈值：可以用来抵消由于较大粒子半径等因素导致的流体体积增加,0.6的阈值似乎效果不错
- 立方体尺寸：通常不能大于1,如果结果粗糙或者运行时间长,从0.5~0.75之间开始增大或减小
"""
function pts2surf(coords::AbstractArray, output_file::String;
    radius::Real,
    density::Real,
    smoothing_length::Real=1.2,
    cube_size::Real=0.6,
    iso_surface_threshold::Real=0.6,
    mesh_smoothing_weights::Bool=true,
    mesh_smoothing_weights_normalization::Real=13.0,
    mesh_smoothing_iters::Int=25,
    normals_smoothing_iters::Int=10,
    mesh_cleanup::Bool=true,
    compute_normals::Bool=true,
    subdomain_grid::Bool=true,
    subdomain_num_cubes_per_dim::Int=64,
    output_mesh_smoothing_weights::Bool=true
)
    @assert size(coords, 1) ∈ (2, 3) "coords should be a 2D or 3D array"
    particles = np.array(coords', dtype=np.float64)
    @assert isfile(output_file) "output_file should be a valid file path"
    file_name = endswith(lowercase(output_file), ".obj") ? output_file : output_file * ".obj"
    mesh_with_data, reconstruction = splashsurf.reconstruction_pipeline(particles,
        particle_radius=radius,
        rest_density=density,
        smoothing_length=smoothing_length,
        cube_size=cube_size,
        iso_surface_threshold=iso_surface_threshold,
        mesh_smoothing_weights=mesh_smoothing_weights,
        mesh_smoothing_weights_normalization=mesh_smoothing_weights_normalization,
        mesh_smoothing_iters=mesh_smoothing_iters,
        normals_smoothing_iters=normals_smoothing_iters,
        mesh_cleanup=mesh_cleanup,
        compute_normals=compute_normals,
        subdomain_grid=subdomain_grid,
        subdomain_num_cubes_per_dim=subdomain_num_cubes_per_dim,
        output_mesh_smoothing_weights=output_mesh_smoothing_weights
    )
    splashsurf.write_to_file(mesh_with_data, file_name)
end

"""
    hdf2surf(
        conf::NamedTuple;
        radius::Real,
        density::Real,
        smoothing_length::Real=1.2,
        cube_size::Real=0.6,
        iso_surface_threshold::Real=0.6,
        mesh_smoothing_weights::Bool=true,
        mesh_smoothing_weights_normalization::Real=13.0,
        mesh_smoothing_iters::Int=25,
        normals_smoothing_iters::Int=10,
        mesh_cleanup::Bool=true,
        compute_normals::Bool=true,
        subdomain_grid::Bool=true,
        subdomain_num_cubes_per_dim::Int=64,
        output_mesh_smoothing_weights::Bool=true
    )

Description:
---
Generates surface reconstruction from the particle data stored in HDF5 file.
`conf` is defined through [MaterialPointSolver.jl](https://github.com/LandslideSIM/MaterialPointSolver.jl) and
by default includes the fields `prjdst` (project directory path) and `prjname` (project name). If the original `conf`
is lost, please construct it yourself, for example: 

```julia
conf = (prjdst="path/to/your/project", prjname="project_name").
``` 

Note:
---
- Inside the function, use `prjdst/prjname.h5` as the path to the HDF5 file.
- This feature primarily provides surface reconstruction support for HDF5 files generated by `MaterialPointSolver.jl`.
If your HDF5 file is generated by other means, please refer to [WriteVTK.jl](https://github.com/JuliaVTK/WriteVTK.jl).

Examples:
---
```julia
conf = (prjdst="path/to/your/project", prjname="project_name")
hdf2surf(conf;
    radius=0.025,
    density=1000.0,
    smoothing_length=2.0,
    cube_size=0.5,
    iso_surface_threshold=0.6,
    mesh_smoothing_weights=true,
    mesh_smoothing_weights_normalization=13.0,
    mesh_smoothing_iters=25,
    normals_smoothing_iters=10,
    mesh_cleanup=true,
    compute_normals=true,
    subdomain_grid=true,
    subdomain_num_cubes_per_dim=64,
    output_mesh_smoothing_weights=true
)
```
"""
function hdf2surf(conf::NamedTuple;
    radius::Real,
    density::Real,
    smoothing_length::Real=1.2,
    cube_size::Real=0.6,
    iso_surface_threshold::Real=0.6,
    mesh_smoothing_weights::Bool=true,
    mesh_smoothing_weights_normalization::Real=13.0,
    mesh_smoothing_iters::Int=25,
    normals_smoothing_iters::Int=10,
    mesh_cleanup::Bool=true,
    compute_normals::Bool=true,
    subdomain_grid::Bool=true,
    subdomain_num_cubes_per_dim::Int=64,
    output_mesh_smoothing_weights::Bool=true
)
    @assert haskey(conf, :prjdst) "Missing `:prjdst` in conf"
    @assert isdir(getproperty(conf, :prjdst)) "`conf.prjdst` is not a valid directory"
    @assert haskey(conf, :prjname) "Missing `:prjname` in conf"
    h5_str = joinpath(conf.prjdst, "$(conf.prjname).h5")
    h5_file = isfile(h5_str) ? h5_str : throw(ArgumentError("Expected a h5 file path at $h5_str"))
    obj_path = joinpath(conf.prjdst, "objs"); mkdir(obj_path)
    fid = h5open(h5_file, "r")
    groups = Tuple{String, Float64}[]; @inbounds for gname in keys(fid)
        occursin("group", gname) || continue # 跳过 grid group
        grp = fid[gname]
        haskey(grp, "ξ") && haskey(grp, "time") || continue  # 只处理包含必要字段的 group
        push!(groups, (gname, read(grp["time"])))
    end; sort!(groups, by = last)

    p_total, p_iters = length(groups), 0
    t1, t_start = time(), time()
    @inbounds for (step, (gname, t)) in enumerate(groups)
        grp = fid[gname]
        coords = read(grp["ξ"])'  # 读取粒子坐标
        obj_filename = joinpath(obj_path, "$(@sprintf("%08d", step)).obj")
        pts2surf(coords, obj_filename;
            radius=radius,
            density=density,
            smoothing_length=smoothing_length,
            cube_size=cube_size,
            iso_surface_threshold=iso_surface_threshold,
            mesh_smoothing_weights=mesh_smoothing_weights,
            mesh_smoothing_weights_normalization=mesh_smoothing_weights_normalization,
            mesh_smoothing_iters=mesh_smoothing_iters,
            normals_smoothing_iters=normals_smoothing_iters,
            mesh_cleanup=mesh_cleanup,
            compute_normals=compute_normals,
            subdomain_grid=subdomain_grid,
            subdomain_num_cubes_per_dim=subdomain_num_cubes_per_dim,
            output_mesh_smoothing_weights=output_mesh_smoothing_weights
        )

        t2 = time(); if t2 - t1 > 3.0
            percen = "obj reconstruction: " * @sprintf("%6.2f%%", (p_iters / p_total) * 100)
            eta = "eta: " * format_seconds((p_total - p_iters) / (p_iters / (t2 - t_start)))
            invo_str = "   \e[1;32m⇌\e[0m   "
            info_con = "\e[1;32m[ Info: \e[0m"
            print(stdout, "\r\e[2K"); print(stdout, info_con * percen * invo_str * eta)
            t1 = t2
        end
        p_iters += 1; p_iters + 1 ≥ p_total && println()
    end
    close(fid)
end