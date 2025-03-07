#==========================================================================================+
|               MaterialPointVisualizer.jl: Post-processing for MPM in Julia               |
+------------------------------------------------------------------------------------------+
|  File Name  : local.jl                                                                   |
|  Description: plot particle in a local GUI window                                        |
|  Programmer : Zenan Huo                                                                  |
|  Start Date : 01/01/2025                                                                 |
|  Affiliation: Risk Group, UNIL-ISTE                                                      |
+==========================================================================================#

export vispts

"""
    vispts(coord::Matrix; colormap="viridis", attrs=NamedTuple(), gui=false, sample_n=3600000)

Description:
---
Visualize the particles in a local GUI window or website. 

- `coord` is a matrix of the particle coordniates, it can be 2/3 colomns for 2/3D 
visualization. 
- `colormap` is the color theme will be used in the visualization. By default, it is
set to "viridis". [optional]
- `attrs` is a NamedTuple of the attributes of the particles, the keys are the attribute 
names and the values are the attribute values. [optional]
- `gui` is a boolean value to determine whether to open a local GUI window or a website. By
default, it is set to false, i.e., website mode. [optional]
- `sample_n` is the number of particles to be sampled for visualization. By default, it
is set to 3,600,000. [optional]
"""
@views function vispts(
    coord   ::Matrix;
    colormap::String    ="viridis", 
    attrs   ::NamedTuple=NamedTuple(), 
    gui     ::Bool      =false,
    sample_n::Int       =3600000
)
    # check input file
    if gui
        tmp_dir = tempdir()
    else
        cp(joinpath(@__DIR__, "../../libs"), joinpath(tempdir(), "libs"), force=true)
        tmp_dir = joinpath(tempdir(), "libs")
        mv(joinpath(tmp_dir, "remote.html"), 
           joinpath(tmp_dir, "index.html"), force=true)
        rm(joinpath(tmp_dir, "local.html"))
    end
    bin_file = joinpath(tmp_dir, "MaterialPointVisualizerTEMP.bin")
    n, m = size(coord)
    m in [2, 3] || error("The provided coord must have 2/3 columns (2D, 3D)")
    if n > sample_n
        vid = sort(sample(1:n, sample_n; replace=false))
        coord = coord[vid, :]
        n = sample_n
    else
        vid = 1:n
    end
    m == 2 ? coord = hcat(coord, zeros(Float32, n)) : nothing
    attrs_num = length(attrs)
    if attrs_num > 0
        attr_name = [String(name) for name in keys(attrs)]
        data      = Array{Float32, 2}(hcat(coord, zeros(Float32, n, attrs_num)))
        for i in 1:attrs_num
            data[:, 3+i] .= values(attrs[Symbol(attr_name[i])])[vid, :]
        end
    else
        attr_name = ["Z-coord"]
        data = Array{Float32, 2}(hcat(coord, coord[:, 3]))
    end
    write_bin_file(data, attr_name, colormap, bin_file)
    isfile(bin_file) || error("File not found: $bin_file")

    if gui
        # 初始化 Electron 窗口，启用 nodeIntegration
        win = Window(URI("file://$(normpath(joinpath(@__DIR__, "../../libs/local.html")))"),
            options=Dict("webPreferences" => Dict("nodeIntegration" => true, 
                "contextIsolation" => false)))

        # 调用 JavaScript 函数读取二进制文件
        run(win, "fetchBinaryData('$((bin_file))')")

        # 窗口关闭逻辑
        ch = msgchannel(win)
        while true
            sleep(1)
            if ch.state == :closed
                close(win.app)
                break
            end
        end
    else
        serve(host="127.0.0.1", dir=tmp_dir, launch_browser=false)
    end
end