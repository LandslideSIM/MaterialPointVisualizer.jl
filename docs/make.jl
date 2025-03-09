using Documenter, DocumenterVitepress, MaterialPointVisualizer, MaterialPointSolver

makedocs(
    modules = [MaterialPointVisualizer, MaterialPointSolver],
    format = DocumenterVitepress.MarkdownVitepress(
        repo = "github.com/LandslideSIM/MaterialPointVisualizer.jl",
        devbranch = "main",
        devurl = "dev"
    ),
    sitename = "MaterialPointVisualizer.jl",
    authors = "Zenan Huo",
    pages = [
        "Home" => "index.md",
        "getstarted.md",
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
    repo = "github.com/LandslideSIM/MaterialPointVisualizer.jl",
    target = "build",
    devbranch = "main",
    branch = "gh-pages",
    push_preview = true,
)
