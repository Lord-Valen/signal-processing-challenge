import "reflect-metadata"
import { DataAnalysisService } from "./DataAnalysisService"

describe("DataAnalysisService", () => {
    let sut: DataAnalysisService

    beforeEach(() => {
        sut = new DataAnalysisService;
    })

    test("is defined", () => {
        expect(sut).toBeDefined
    })
})
