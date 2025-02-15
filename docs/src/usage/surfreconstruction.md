# Surface Reconstruction

Here we will detect the surface points of the particle model and construct a closed surface through them. This functionality heavily relies on [splashsurf](https://github.com/InteractiveComputerGraphics/splashsurf). We need to first convert the particle information to a `.ply` file(s), which will be used as input for `splashsurf`.

!!! note

    1. Please make sure `splashsurf` is on your env and julia is able to find it.
    2. All the HDF5 files are generated by MaterialPointSolver.jl, custom HDF5 does not work.

## Convert data into `.ply` file(s)

```@docs
particle2ply(coords::Matrix; output_file::String="coord.ply")
particle2ply(
    args::    DeviceArgs2D{T1, T2}, 
    mp  ::DeviceParticle2D{T1, T2}
) where {T1, T2}
particle2ply(
    args::    DeviceArgs3D{T1, T2}, 
    mp  ::DeviceParticle3D{T1, T2}
) where {T1, T2}
particle2ply(hdf5_file::String, ply_dir::String)
```

The `particle2ply` function has four types of input parameters, as described above. The last one is used to generate a series of `.ply` files.

## Surface reconstruction

Here we will call `splashsurf` to execute. There are several parameters that need to be determined, whether it is a single `.ply` file or a series of `.ply` files (animation):

```@docs
ply2surface(
    ply_dir, 
    splash_dir,
    radius,
    num_threads;
    cube_size        =0.6,
    surface_threshold=0.6, 
    smoothing_length =1.2
)
```