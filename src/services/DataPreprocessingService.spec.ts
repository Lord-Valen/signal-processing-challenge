import "reflect-metadata"
import { DataPreprocessingService } from "./DataPreprocessingService"

describe("DataPreprocessingService", () => {
    let sut: DataPreprocessingService;

    beforeEach(() => {
        sut = new DataPreprocessingService;
    })

    test("is defined", () => {
        expect(sut).toBeDefined;
    })
})
