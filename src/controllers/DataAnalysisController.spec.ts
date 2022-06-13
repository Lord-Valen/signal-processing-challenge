import "reflect-metadata"
import { DataAnalysisController } from "./DataAnalysisController"

describe("DataAnalysisController", () => {
    let sut: DataAnalysisController

    beforeEach(() => {
        sut = new DataAnalysisController;
    })

    test("is defined", () => {
        expect(sut).toBeDefined
    })
})
