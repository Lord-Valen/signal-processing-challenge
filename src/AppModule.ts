import { ContainerModule } from "inversify";
import { App } from "./App";
import { DataPreprocessingController } from "./controllers/DataPreprocessingController";
import { DataAccessController } from "./controllers/DataAccessController";
import { DataAnalysisController } from "./controllers/DataAnalysisController";
import { GraphController } from "./controllers/GraphController";
import { ReportController } from "./controllers/ReportController";
import { TYPES } from "./types";

export class AppModule extends ContainerModule {
    public constructor() {
        super((bind) => {
            bind(App).toSelf();
            bind(TYPES.IReportController).to(ReportController);
            bind(TYPES.IGraphController).to(GraphController);
            bind(TYPES.IDataAnalysisController).to(DataAnalysisController);
            bind(TYPES.IDataPreprocessingController).to(DataPreprocessingController);
            bind(TYPES.IDataAccessController).to(DataAccessController);
        })
    }
}
