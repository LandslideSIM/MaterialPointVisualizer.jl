# ***MaterialPointVisualizer*** <img src="docs/src/assets/logo.png" align="right" height="126" />

[![CI](https://github.com/LandslideSIM/MaterialPointVisualizer.jl/actions/workflows/ci.yml/badge.svg)](https://github.com/LandslideSIM/MaterialPointVisualizer.jl/actions/workflows/ci.yml) 
[![Stable](https://img.shields.io/badge/docs-stable-blue.svg?logo=quicklook)](https://LandslideSIM.github.io/MaterialPointVisualizer.jl/stable)
[![Version](https://img.shields.io/badge/version-v0.0.1-pink)]()

With this package, we can convert the MPM simulation results (HDF5 files from ***[MaterialPointSolver.jl](https://github.com/LandslideSIM/MaterialPointSolver.jl)*** ) into `.vtp` files or create ParaView-compatible animations. Additionally, it includes some post-processing functionalities.

## Installation ⚙️

Just type <kbd>]</kbd> in Julia's  `REPL`:

```julia
julia> ]
(@1.11) Pkg> add MaterialPointVisualizer
```

## Features ✨

- [x] HDF5 to `.vtp` files
- [x] surface reconstruction (based on [splashsurf](https://github.com/LandslideSIM/MaterialPointSolver.jl))
- [x] fast `vtp` for general particle-based results
- [x] surface detection

## Showcases 🎲

| ParaView |  Surface reconstruction |
|:--------:|:--------:|
| <img src="docs/src/assets/particle2vtp.png" width="300"> | <img src="docs/src/assets/1.gif" width="260"> |

## Acknowledgement 👍

This project is sponserd by [Risk Group | Université de Lausanne](https://wp.unil.ch/risk/) and [China Scholarship Council [中国国家留学基金管理委员会]](https://www.csc.edu.cn/).