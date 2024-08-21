# Next.js full-stack application boilerplate
Boilerplate of the full-stack Next.js application prepared to start my side projects faster

## Getting started

Before you start working with this project, make sure you have Node.js 20 installed. If you are using `nvm` tool, just run:
```bash
nvm use
```

First, install all necessary dependencies:
```bash
npm i
```

then, create your local environment variables file from dist file:
```bash
cp .env.dist .env
```

after that, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker environment

This project also has a fully dockerized dev environment. It allows you to work with a local database.

To start your local docker environment, you need first to build override docker-compose file with some special local environment configuration:
```bash
cp docker-compose.override.dist.yml docker-compose.override.yml
```

then, you need to build development version of the application's docker image:
```bash
npm run docker:build
```

after that, the last step is to run your dockerized local environment:
```bash
npm run docker:start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for production environment

To build production version of the application, run:
```bash
npm run docker:build-prod
```

Also you need to remember about removing the `docker-compose.override.yml` file, because it was used only for local environment configuration.

To run your production application, use following command:
```bash
npm run docker:start-prod
```

If your application has some external database, you can also run only Next.js application container by using following command:
```bash
docker run --rm -p 3000:3000 --name next --network=next_fullstack_boilerplate next-fullstack-boilerplate
```

It is always possible to write your own docker-compose, which runs the production version of the application's Docker image. 