import "reflect-metadata"
import { DataAccessService } from "./DataAccessService"

describe("DataAccessService", () => {
    let sut: DataAccessService

    beforeEach(() => {
        sut = new DataAccessService()
    })

    test("isDefined", () => {
        expect(sut).toBeDefined;
    })
})
