@views function write_bin_file(
    data     ::Matrix{Float32},
    attr_name::Vector{String},
    colormap ::String,
    bin_file ::String
)
    # input check and preperation
    n, m = size(data)                    # n: 顶点数, m: 总列数
    m ≥ 3 || error(                      # data check
        "The provided data must have at least two columns (x, y coordinates)")
    k = m - 3                            # 属性数 = 总列数 - 3（xyz坐标）
    if k > 0 
        k == length(attr_name) || error( # attr_name check
            "The number of attribute names must match the number of attributes")
    end

    # 预分配内存
    colors_list = Vector{Matrix{Float32}}(undef, k)
    min_max_list = Vector{Tuple{Float32, Float32}}(undef, k)
    nval = Vector{Float32}(undef, n)  # 假设 n 是 data 的行数，已知
    if k > 0
        @inbounds for j in 1:k
            attr_values = view(data, :, 3 + j)  # 使用视图，避免复制
            min_val, max_val = minimum(attr_values), maximum(attr_values)
            range_val = max_val - min_val > 0 ? max_val - min_val : 1.0
    
            # 原地计算 nval
            @. nval = (attr_values - min_val) / range_val
    
            # 获取颜色
            cs = ColorSchemes.get(ColorSchemes.colorschemes[Symbol(colormap)], nval)
    
            # 创建 colors 矩阵并填充
            colors = Matrix{Float32}(undef, n, 3)  # 未初始化，比 zeros 快
            for i in 1:n
                colors[i, 1] = cs[i].r
                colors[i, 2] = cs[i].g
                colors[i, 3] = cs[i].b
            end
    
            # 直接赋值，避免 push!
            colors_list[j] = colors
            min_max_list[j] = (min_val, max_val)
        end
    end

    # 生成颜色条的颜色数据
    num_samples = 256  # 颜色条采样点数量
    colorbar_colors = Vector{Float32}(undef, num_samples * 3)
    colormap = ColorSchemes.colorschemes[Symbol(colormap)]
    @inbounds for i in 1:num_samples
        t = (i - 1) / (num_samples - 1)  # 归一化到 [0, 1]
        color = ColorSchemes.get(colormap, t)
        colorbar_colors[(i-1)*3 + 1] = Float32(color.r)
        colorbar_colors[(i-1)*3 + 2] = Float32(color.g)
        colorbar_colors[(i-1)*3 + 3] = Float32(color.b)
    end

    # 以二进制模式写入文件
    open(bin_file, "w") do io
        # 写入顶点数 (Int32)
        write(io, Int32(n))
        # 写入属性数 (Int32)
        write(io, Int32(k))

        # 写入属性名称（如果有）
        for name in attr_name
            len = length(name)  # 字符串长度
            write(io, Int32(len))  # 写入长度
            write(io, name)       # 写入字符串（UTF-8 编码）
            # 添加填充字节，确保对齐到 4 字节边界
            padding = (4 - (len % 4)) % 4
            write(io, zeros(UInt8, padding))
        end

        # 写入顶点数据（转换为 Float32）
        data_f32 = Float32.(data)
        vertex_data = vec(data_f32')  # 转换为行优先顺序
        write(io, vertex_data)

        # 写入每个属性的颜色数据（如果有）
        for colors in colors_list
            color_data = vec(colors')  # 转换为行优先顺序
            write(io, color_data)
        end

        # 写入每个属性的最小值和最大值（如果有）
        for (min_val, max_val) in min_max_list
            write(io, min_val)
            write(io, max_val)
        end

        # 写入颜色条采样点数量 (Int32)
        write(io, Int32(num_samples))

        # 写入颜色条颜色数据 (num_samples * 3 * Float32)
        write(io, colorbar_colors)
    end
end