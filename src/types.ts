export const TYPES = {
    // Application
    IApp: Symbol.for("IApp"),

    // Controllers
    IReportController: Symbol.for("IReportController"),
    IGraphController: Symbol.for("IGraphController"),
    IDataAnalysisController: Symbol.for("IDataAnalysisController"),
    IDataPreprocessingController: Symbol.for("IDataPreprocessingController"),
    IDataAccessController: Symbol.for("IDataAccessController"),

    // Services
    IDataSmoothingService: Symbol.for("IDataSmoothingService"),
    IDataSpikeService: Symbol.for("IDataSmoothingService")
}
