import Hero from './hero.model.ts';

let heroes: Array<Hero> = [{
  id: 1,
  name: "Iron Man",
  identity: "Tony Stark",
  hometown: "New York",
  age: 42,
}];

function findHeroById(id: number) {
  const foundHeroes: Hero[] | undefined = heroes.filter(hero => hero.id = id);
  if (foundHeroes && foundHeroes.length > 0) {
    return foundHeroes[0];
  }
  return undefined;
}

export const getHeroes = ({ response }: { response: any }) => {
  response.body = heroes;
}

export const getHero = ({ params, response }: { params: { id: string }; response: any }) => {
  const hero = findHeroById(Number(params.id));
  if (hero) {
    response.status = 200;
    response.body = hero;
  } else {
    response.status = 404;
    response.body = { message: `Hero with id: ${params.id} not found.` };
  }
}

export const createHero = async ({ request, response }: { request: any; response: any }) => {
  const body = await request.body();
  const hero: Hero = body.value;
  heroes.push(hero);
  response.body = hero;
  response.status = 201;
}

export const updateHero = async ({ params, request, response }: { params: { id: string }; request: any; response: any }) => {
  let hero = findHeroById(Number(params.id));
  if (hero) {
    const body = await request.body();
    const updateHeroRequest: Partial<Hero> = body.value;
    hero = { ...hero, ...updateHeroRequest };
    heroes = [...heroes.filter(h => h.id !== hero!.id), hero];
    response.status = 200;
    response.body = hero;
  } else {
    response.status = 404;
    response.body = { message: `Hero with id: ${params.id} not found.` };
  }
}

export const deleteHero = ({ params, response }: { params: { id: string }; response: any }) => {
  let hero = findHeroById(Number(params.id));
  if (hero) {
    heroes = heroes.filter(hero => hero.id !== hero.id);
    response.body = hero;
    response.status = 200;
  } else {
    response.status = 404;
    response.body = { message: `Hero with id: ${params.id} not found.` };
  }
}
