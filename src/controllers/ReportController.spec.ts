import "reflect-metadata"
import { ReportController } from "./ReportController"

describe("ReportController", () => {
    let sut: ReportController

    beforeEach(() => {
        sut = new ReportController;
    })

    test("is defined", () => {
        expect(sut).toBeDefined;
    })
})
