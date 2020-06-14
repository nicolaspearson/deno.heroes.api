# deno.heroes.api

A simple REST API that provides CRUD operations on a `hero` object, it was built using Deno.

## Getting Started

**1. Clone the application**

```bash
git clone https://github.com/nicolaspearson/deno.heroes.api.git
```

**2. Build and run the app**

#### Run the app in development mode:

```bash
deno run --allow-env --allow-net src/index.ts
```

The app will start listening on <http://localhost:8080>

#### Bundle the app:

```bash
deno bundle src/index.ts dist/bundle.js
```

## Endpoints

The following endpoints are available:

```
GET /heroes/:id
```

```
GET /heroes
```

```
POST /heroes
```

```
PUT /heroes/:id
```

```
DELETE /heroes/:id
```
