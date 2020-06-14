import { Application } from "https://deno.land/x/oak/mod.ts";

import { APP_HOST, APP_PORT } from "./config.ts";
import errorMiddleware from "./middleware/error.middleware.ts";
import notFoundMiddleware from "./middleware/not-found.middleware.ts";
import router from "./router.ts";

const app = new Application();

app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFoundMiddleware);

console.log(`Listening on ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
