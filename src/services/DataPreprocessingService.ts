import { injectable } from "inversify";
import { IDataPreprocessingService } from "../interfaces";

@injectable()
export class DataPreprocessingService implements IDataPreprocessingService {
    run(): void { }
}
