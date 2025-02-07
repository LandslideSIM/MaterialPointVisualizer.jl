using Documenter, DocumenterTools, MaterialPointVisualizer

makedocs(
    modules = [MaterialPointVisualizer],
    format = Documenter.HTML(
        assets = ["assets/favicon.ico"],
        prettyurls = get(ENV, "CI", nothing) == "true"
    ),
    clean = false,
    sitename = "MaterialPointVisualizer.jl",
    authors = "Zenan Huo",
    pages = [
        "Home" => "index.md",
        # "Workflow" => Any[
        #     "workflow/simple_mesh.md",
        #     "workflow/polygon.md",
        #     "workflow/polyhedron.md",
        #     "workflow/DEM.md"
        # ],
        # "Example" => Any[
        #     "example/polygon.md",
        #     "example/polyhedron.md",
        #     "example/DEM.md"
        # ],
        # "utils.md"

    ],
    warnonly = [:missing_docs, :cross_references],
)

deploydocs(
    repo = "github.com/LandslideSIM/MaterialPointVisualizer.jl.git",
    target = "build",
    branch = "gh-pages",
    versions=["stable" => "v^", "dev" => "dev"]
)
