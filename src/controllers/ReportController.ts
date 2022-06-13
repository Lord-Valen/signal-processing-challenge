import { injectable } from "inversify";
import { IReportController } from "../interfaces";

@injectable()
export class ReportController implements IReportController {
    run() { }
}
