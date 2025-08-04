# Particle Surface Reconstruction

Here we will detect the surface points of the particle model and construct a closed surface through them. This functionality heavily relies on [splashsurf](https://github.com/InteractiveComputerGraphics/splashsurf). We need to first convert the particle information to a `.ply` file(s), which will be used as input for `splashsurf`.

There are several parameters that need to be determined, whether it is a single `.ply` file or a series of `.ply` files (animation):

```@docs
pts2surf(coords::AbstractArray, output_file::String;
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

hdf2surf(conf::NamedTuple;
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
```