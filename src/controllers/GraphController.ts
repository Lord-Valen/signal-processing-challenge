import { injectable } from "inversify";
import { IGraphController } from "../interfaces";

@injectable()
export class GraphController implements IGraphController {
    run() { }
}
