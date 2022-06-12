import "reflect-metadata";
import { Container } from "inversify";
import { createTestContainer } from "./util/createTestContainer";
import { App } from "./App";
import { AppModule } from "./AppModule";

describe("App", () => {
    let sut: App;
    let container: Container

    beforeEach(() => {
        container = createTestContainer(AppModule)
        sut = container.get(App)
    })

    test("is defined", () => {
        expect(sut).toBeDefined()
    })
})
