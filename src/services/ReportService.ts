import { injectable } from "inversify";
import { IReportService } from "../interfaces";

@injectable()
export class ReportService implements IReportService {
    run() { }
}
