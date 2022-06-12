import { ContainerModule } from "inversify";
import { App } from "./App";
import { DataAccessService } from "./services/DataAccessService";
import { DataAnalysisService } from "./services/DataAnalysisService";
import { DataPreprocessingService } from "./services/DataPreprocessingService";
import { GraphService } from "./services/GraphService";
import { ReportService } from "./services/ReportService";
import { TYPES } from "./types";

export class AppModule extends ContainerModule {
    public constructor() {
        super((bind) => {
            bind(App).toSelf();
            bind(TYPES.IReportService).to(ReportService);
            bind(TYPES.IGraphService).to(GraphService);
            bind(TYPES.IDataAnalysisService).to(DataAnalysisService);
            bind(TYPES.IDataPreprocessingService).to(DataPreprocessingService);
            bind(TYPES.IDataAccessService).to(DataAccessService);
        })
    }
}
