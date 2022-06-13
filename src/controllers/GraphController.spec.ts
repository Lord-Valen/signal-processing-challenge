import "reflect-metadata"
import { GraphController } from "./GraphController"

describe("GraphController", () => {
    let sut: GraphController

    beforeEach(() => {
        sut = new GraphController()
    })

    test("is defined", () => {
        expect(sut).toBeDefined;
    })
})
