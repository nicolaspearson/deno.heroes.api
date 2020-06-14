import { Router } from "https://deno.land/x/oak/mod.ts";

import { getHeroes, getHero, createHero, updateHero, deleteHero } from './hero.controller.ts';

export default (router: Router) => {
  router
    .get("/heroes", getHeroes)
    .get("/heroes/:id", getHero)
    .post("/heroes", createHero)
    .put("/heroes/:id", updateHero)
    .delete("/heroes/:id", deleteHero);
};
