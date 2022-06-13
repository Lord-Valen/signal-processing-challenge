import "reflect-metadata"
import { DataAccessController } from "./DataAccessController"

describe("DataAccessController", () => {
    let sut: DataAccessController

    beforeEach(() => {
        sut = new DataAccessController()
    })

    test("isDefined", () => {
        expect(sut).toBeDefined;
    })
})
