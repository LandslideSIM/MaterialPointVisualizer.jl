#==========================================================================================+
|               MaterialPointVisualizer.jl: Post-processing for MPM in Julia               |
+------------------------------------------------------------------------------------------+
|  File Name  : particle2vtp.jl                                                            |
|  Description: convert mpm results to vtp file                                            |
|  Programmer : Zenan Huo                                                                  |
|  Start Date : 01/01/2025                                                                 |
|  Affiliation: Risk Group, UNIL-ISTE                                                      |
|  Functions  : 1. fastvtp()                                                               |
+==========================================================================================#

export fastvtp

"""
    fastvtp(coords; vtp_file="output.vtp", data::T=NamedTuple())

Description:
---
Generates a `.vtp` file by passing custom fields.
"""
function fastvtp(coords; vtp_file="output.vtp", data::T=NamedTuple()) where T <: NamedTuple
    pts_num = size(coords, 1)
    vtp_cls = [MeshCell(PolyData.Verts(), [i]) for i in 1:pts_num]
    vtk_grid(vtp_file, coords', vtp_cls, ascii=false) do vtk
        keys(data) ≠ () && for vtp_key in keys(data)
            vtk[string(vtp_key)] = getfield(data, vtp_key)
        end
    end
    return nothing
end