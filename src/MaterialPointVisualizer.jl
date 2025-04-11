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

using CondaPkg, DelimitedFiles, HDF5, NearestNeighbors, Printf, ProgressMeter, PythonCall, 
      WGLMakie, WriteVTK

import StatsBase: sample
import MaterialPointSolver: DeviceArgs2D, DeviceGrid2D, DeviceParticle2D, DeviceProperty,
                            DeviceArgs3D, DeviceGrid3D, DeviceParticle3D     

const trimesh = PythonCall.pynew()

include(joinpath(@__DIR__, "mpm2vtp.jl"       ))
include(joinpath(@__DIR__, "particle2vtp.jl"  ))
include(joinpath(@__DIR__, "particle2surf.jl" ))
include(joinpath(@__DIR__, "plot/display.jl"  ))

function __init__()
    @info "checking environment..."
    # import Python modules
    PythonCall.pycopy!(trimesh, pyimport("trimesh"))
end

end