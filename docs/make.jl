using Documenter, DocumenterTools, MaterialPointVisualizer, MaterialPointSolver

makedocs(
    modules = [MaterialPointVisualizer, MaterialPointSolver],
    format = Documenter.HTML(
        assets = ["assets/favicon.ico"],
        prettyurls = get(ENV, "CI", nothing) == "true"
    ),
    clean = false,
    sitename = "MaterialPointVisualizer.jl",
    authors = "Zenan Huo",
    pages = [
        "Home" => "index.md",
        "Usage" => Any[
            "usage/particle2vtp.md",
            "usage/mpm2vtp.md",
            "usage/surfreconstruction.md",
            "usage/display.md"
        ],
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
