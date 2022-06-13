import { injectable } from "inversify";
import { IDataPreprocessingController } from "../interfaces";

@injectable()
export class DataPreprocessingController implements IDataPreprocessingController {
    run(): void { }
}
