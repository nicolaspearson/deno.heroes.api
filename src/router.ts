import { Router } from "https://deno.land/x/oak/mod.ts";

import heroRoutes from './hero/hero.routes.ts';

const router = new Router();
heroRoutes(router);
export default router;
