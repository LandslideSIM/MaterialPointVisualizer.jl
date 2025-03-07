using MaterialPointGenerator
using MaterialPointVisualizer

n = 2000  # 顶点数
xy = meshbuilder(range(1, 10, length=n), range(1, 10, length=n))
z = sin.(xy[:, 1]) .+ cos.(xy[:, 2]) 

coord = hcat(xy, z)  # n×3 矩阵
attrs = (attr1=xy[:, 1], attr2=z)
colormap = "rainbow"

vispts(coord, colormap=colormap, attrs=attrs, gui=true)