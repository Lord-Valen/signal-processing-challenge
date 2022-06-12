import { Container, ContainerModule } from "inversify"

export type Constr<T> = new () => T

export function createTestContainer(...modules: Constr<ContainerModule>[]) {
    const container = new Container()

    container.load(...modules.map((m) => new m()))

    return container
}
