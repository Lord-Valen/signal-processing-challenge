import { injectable } from "inversify";
import { IDataAccessController } from "../interfaces";

@injectable()
export class DataAnalysisController implements IDataAccessController {
    run(): void { }
}
