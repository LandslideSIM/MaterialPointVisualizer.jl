#==========================================================================================+
|               MaterialPointVisualizer.jl: Post-processing for MPM in Julia               |
+------------------------------------------------------------------------------------------+
|  File Name  : pts2vtp.jl                                                                 |
|  Description: convert particles into vtp file                                            |
|  Programmer : Zenan Huo                                                                  |
|  Start Date : 01/01/2025                                                                 |
|  Affiliation: Risk Group, UNIL-ISTE                                                      |
|  Functions  : 1. pts2vtp()                                                               |
+==========================================================================================#

export pts2vtp

"""
    pts2vtp(coords; vtp_file="output.vtp", data::T=NamedTuple())

Description:
---
Generates a `.vtp` file by passing custom fields.
"""
function pts2vtp(coords; vtp_file="output.vtp", data::NamedTuple=NamedTuple())
    pts_num = size(coords, 2)
    size(coords, 1) in [2, 3] || throw(ArgumentError("The input coordinates should be 2D or 3D"))
    vtp_cls = [MeshCell(PolyData.Verts(), [i]) for i in 1:pts_num]
    vtk_grid(vtp_file, coords, vtp_cls; compress=true, append=false, ascii=false) do vtk
        keys(data) ≠ () && for vtp_key in keys(data)
            vtk[string(vtp_key)] = getfield(data, vtp_key)
        end
    end
end