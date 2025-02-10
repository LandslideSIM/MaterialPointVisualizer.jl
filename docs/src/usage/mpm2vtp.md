# MPM to vtp file

Here we export the data from [MaterialPointSolver.jl](https://github.com/LandslideSIM/MaterialPointSolver.jl) to a `.vtp` file. In `MaterialPointSolver.jl`, we should have already instantiated four structures: `DeviceArgs2D` (`DeviceArgs3D`), `DeviceGrid2D` (`DeviceGrid3D`), `DeviceParticle2D` (`DeviceParticle3D`), `DeviceProperty`.

## Save to `.vtp` (single time step)

```@docs
savevtp(
    args::    DeviceArgs2D{T1, T2}, 
    grid::    DeviceGrid2D{T1, T2}, 
    mp  ::DeviceParticle2D{T1, T2}, 
    attr::  DeviceProperty{T1, T2}
) where {T1, T2}

savevtp(
    args::    DeviceArgs3D{T1, T2}, 
    grid::    DeviceGrid3D{T1, T2}, 
    mp  ::DeviceParticle3D{T1, T2}, 
    attr::  DeviceProperty{T1, T2}
) where {T1, T2}
```

## Save to animation

To do this, we need to turn on HDF5 option in `MaterialPointSolver.jl`, then we just pass `DeviceArgs2D` (`DeviceArgs3D`) into this function:

```@docs
animation(args::DeviceArgs2D{T1, T2}) where {T1, T2}
animation(args::DeviceArgs3D{T1, T2}) where {T1, T2}
```