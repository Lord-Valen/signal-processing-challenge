import { inject, injectable } from "inversify";
import { IDataAccessController, IDataAnalysisController, IDataPreprocessingController, IGraphController, IReportController } from "./interfaces";
import { TYPES } from "./types";

@injectable()
export class App {
    private reportController: IReportController
    private graphController: IGraphController
    private dataAnalysisController: IDataAnalysisController
    private dataPreprocessingController: IDataPreprocessingController
    private dataAccessController: IDataAccessController

    public constructor(
        @inject(TYPES.IReportController) reportController: IReportController,
        @inject(TYPES.IGraphController) graphController: IGraphController,
        @inject(TYPES.IDataAnalysisController) dataAnalysisController: IDataAnalysisController,
        @inject(TYPES.IDataPreprocessingController) dataPreprocessingController: IDataPreprocessingController,
        @inject(TYPES.IDataAccessController) dataAccessController: IDataAccessController,
    ) {
        this.reportController = reportController;
        this.graphController = graphController;
        this.dataAnalysisController = dataAnalysisController;
        this.dataPreprocessingController = dataPreprocessingController;
        this.dataAccessController = dataAccessController;
    }

    run() {
        // Get data
        // Preprocess data
        // Analyze data
        // Graph data
        // Report data
    }
}
