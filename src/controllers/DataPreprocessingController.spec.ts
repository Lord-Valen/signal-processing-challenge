import "reflect-metadata"
import { DataPreprocessingController } from "./DataPreprocessingController"

describe("DataPreprocessingController", () => {
    let sut: DataPreprocessingController;

    beforeEach(() => {
        sut = new DataPreprocessingController;
    })

    test("is defined", () => {
        expect(sut).toBeDefined;
    })
})
