using MaterialPointVisualizer
using PythonCall
using Test

@test !pyconvert(Bool, PythonCall.pyisnull(MaterialPointVisualizer.trimesh))