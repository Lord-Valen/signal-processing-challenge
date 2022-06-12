import "reflect-metadata"
import { GraphService } from "./GraphService"

describe("GraphService", () => {
    let sut: GraphService

    beforeEach(() => {
        sut = new GraphService()
    })

    test("is defined", () => {
        expect(sut).toBeDefined;
    })
})
