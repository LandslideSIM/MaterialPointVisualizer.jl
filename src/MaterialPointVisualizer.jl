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
      WriteVTK
      
import MaterialPointSolver: DeviceArgs2D, DeviceGrid2D, DeviceParticle2D, DeviceProperty,
                            DeviceArgs3D, DeviceGrid3D, DeviceParticle3D     

const trimesh = Ref{Py}()

include("mpm2vtp.jl")
include("particle2vtp.jl")
include("particle2surf.jl")

function __init__()
    @info "checking environment..."
    try
        run(pipeline(`splashsurf -V`, stdout=devnull, stderr=devnull))
    catch e
        if isa(e, Base.IOError)  # splashsurf 未安装
            @warn """splashsurf
            Cannot find splashsurf on this system. If you need surface reconstruction, please 
            install it first, see: https://github.com/InteractiveComputerGraphics/splashsurf 
            and make sure Julia can find it.
            """
        end
    end
    trimesh[] = pyimport("trimesh")
end

end