using Documenter, DocumenterVitepress, MaterialPointVisualizer

makedocs(
    modules = [MaterialPointVisualizer],
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
            "usage/pts2vtp.md",
            "usage/hdf2pvd.md",
            "usage/pts2surf.md",
            "usage/display.md"
        ],
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
