import "reflect-metadata"
import { ReportService } from "./ReportService"

describe("ReportService", () => {
    let sut: ReportService

    beforeEach(() => {
        sut = new ReportService;
    })

    test("is defined", () => {
        expect(sut).toBeDefined;
    })
})
