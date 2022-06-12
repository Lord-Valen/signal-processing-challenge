import { injectable } from "inversify";
import { IDataAccessService } from "../interfaces";

@injectable()
export class DataAnalysisService implements IDataAccessService {
    run(): void { }
}
