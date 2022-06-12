import { inject, injectable } from "inversify";
import { IDataAccessService, IDataAnalysisService, IDataPreprocessingService, IGraphService, IReportService } from "./interfaces";
import { TYPES } from "./types";

@injectable()
export class App {
    private reportService: IReportService
    private graphService: IGraphService
    private dataAnalysisService: IDataAnalysisService
    private dataPreprocessingService: IDataPreprocessingService
    private dataAccessService: IDataAccessService

    public constructor(
        @inject(TYPES.IReportService) reportService: IReportService,
        @inject(TYPES.IGraphService) graphService: IGraphService,
        @inject(TYPES.IDataAnalysisService) dataAnalysisService: IDataAnalysisService,
        @inject(TYPES.IDataPreprocessingService) dataPreprocessingService: IDataPreprocessingService,
        @inject(TYPES.IDataAccessService) dataAccessService: IDataAccessService,
    ) {
        this.reportService = reportService;
        this.graphService = graphService;
        this.dataAnalysisService = dataAnalysisService;
        this.dataPreprocessingService = dataPreprocessingService;
        this.dataAccessService = dataAccessService;
    }

    run() {
        // Get data
        // Preprocess data
        // Analyze data
        // Graph data
        // Report data
     }
}
