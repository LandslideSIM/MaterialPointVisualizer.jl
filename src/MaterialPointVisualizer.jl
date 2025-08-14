#==========================================================================================+
|               MaterialPointVisualizer.jl: Post-processing for MPM in Julia               |
+------------------------------------------------------------------------------------------+
|  File Name  : MaterialPointVisualizer.jl                                                 |
|  Description: Module file of MaterialPointVisualizer.jl                                  |
|  Programmer : Zenan Huo                                                                  |
|  Start Date : 01/01/2025                                                                 |
|  Affiliation: Risk Group, UNIL-ISTE                                                      |
|  License    : MIT License                                                                |
+==========================================================================================#

module MaterialPointVisualizer

using ColorSchemes, Dates, DelimitedFiles, HDF5, Logging, PrecompileTools, Printf,
    ProgressMeter, #=WGLMakie,=# WriteVTK

import StatsBase: sample
import FastPointQuery: trimesh, splashsurf, np, meshio

@inline function format_seconds(s_time)
    s = s_time < 1 ? 1.0 : ceil(Int, s_time)
    dt = Dates.Second(s)
    days = Dates.value(dt) ÷ (60 * 60 * 24)
    time = Dates.Time(Dates.unix2datetime(Dates.value(dt) % (60 * 60 * 24)))
    return days == 0 ?
        Dates.format(time, "HH:MM:SS") :
        @sprintf("%02d days: %s", days, Dates.format(time, "HH:MM:SS"))
end

include(joinpath(@__DIR__, "hdf2pvd.jl"))
include(joinpath(@__DIR__, "pts2vtp.jl"))
include(joinpath(@__DIR__, "pts2surf.jl"))
# include(joinpath(@__DIR__, "plot/display.jl"))

quiet(f) = redirect_stdout(devnull) do
    redirect_stderr(devnull) do
        with_logger(NullLogger()) do
            f()
        end
    end
end

# include(joinpath(@__DIR__, "precompile.jl"))

end