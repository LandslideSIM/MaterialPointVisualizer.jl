@setup_workload begin
    @compile_workload begin
        quiet() do
            scatter(rand(10, 3))
            pts2vtp(rand(2, 10); vtp_file=joinpath(tempdir(), "output.vtp"), data=(x=rand(10), y=rand(10)))
        end
    end
end