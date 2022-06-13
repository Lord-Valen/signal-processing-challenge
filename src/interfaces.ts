// Application
export interface IApp {
    run(): void
}

// Controllers
export interface IReportController {
    run(): void
}

export interface IGraphController {
    run(): void
}

export interface IDataAnalysisController {
    run(): void
}

export interface IDataPreprocessingController {
    run(): void
}

export interface IDataAccessController {
    run(): void
}

// Services
export interface IDataSmoothingService {
    run(): void
}

export interface IDataSpikeService {
    run(): void
}
