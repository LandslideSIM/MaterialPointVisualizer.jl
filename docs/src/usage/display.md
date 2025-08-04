# GUI

!!! info

    Sometimes we already have data in Julia and just want to see the results without exporting it to other software for visualization, which is too troublesome...😢
    1) We assume that your device has at least one modern browser that supports WebGL 2.0
    2) Or you are using the official Julia extension in VSCode

This implementation is achieved through [WGLMakie.jl](https://github.com/MakieOrg/Makie.jl/tree/master/WGLMakie), where users only need to provide the coordinates of the particles, and all other aspects are optional.

```@docs
vispts(
    coord   ::Matrix;
    colorby ::String,
    attr    ::Vector,
    psize   ::Real,
    colormap::Symbol=:turbo,
    sample_n::Int=1000000
)

visvol(
    coord   ::Matrix;
    colorby ::String,
    attr    ::Vector,
    vsize   ::Real,
    colormap::Symbol=:turbo,
    sample_n::Int=1000000,
    ncolors ::Int=64
)
```

!!! warning

    If you are connecting to a remote headless server via SSH, you may encounter issues.