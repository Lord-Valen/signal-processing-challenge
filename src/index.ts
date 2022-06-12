import { Container } from "inversify";
import "reflect-metadata"
import { App } from "./App";
import { AppModule } from "./AppModule";

async function bootstrap() {
    const container = new Container();

    // Register
    container.load(new AppModule)

    // Resolve
    const app = container.get(App);

    // Run
    app.run();
}

bootstrap()
