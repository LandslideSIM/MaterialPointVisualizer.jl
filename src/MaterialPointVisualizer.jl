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

using CondaPkg, DelimitedFiles, NearestNeighbors, Printf, PythonCall, WriteVTK
import MaterialPointSolver: DeviceArgs2D, DeviceGrid2D, DeviceParticle2D, DeviceProperty,
                            DeviceArgs3D, DeviceGrid3D, DeviceParticle3D     

include("mpm2vtp.jl")
include("particle2vtp.jl")

end