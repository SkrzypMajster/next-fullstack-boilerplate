# Next.js Full-stack Boilerplate
Boilerplate of the full-stack Next.js application created to start my side projects faster.

## Tech-stack

- **Framework**: `Next.js` 16, working on `React` 19
- **Database connection**: `Prisma ORM`
- **Styling & Design System**: `Tailwind`
- **Forms Management**: `react-hook-form` with `Zod` validation library
- **Code formatting**: `ESLint` & `Prettier`

## Local environment setup (for npm)

### Preconditions
To run this project locally, you need to have the Node.js environment with the version specified in the `.nvmrc` file.

You can easily configure the required Node.js version using the nvm tool using the command below:

```shell
nvm use
```

### Project setup

1. Install all necessary dependencies:
```bash
npm i
```

2. Create your local environment variables file from the dist file:
```bash
cp .env.dist .env
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations! Now your project is bootstrapped successfully, and you can work with the application locally in an npm environment.

## Local environment setup (Docker)

If you want to work locally inside a Docker environment, please follow these steps:

1. Create your local environment variables file from the dist file:
```bash
cp .env.dist .env
```

2. Build an override Docker Compose file with some special local environment configuration:
```bash
cp docker-compose.override.yml.dist docker-compose.override.yml
```

3. Build a development version of the application's Docker image:
```bash
npm run docker:build
```

4. Install packages inside the application's Docker container:
```bash
npm run shell
npm i
exit
```

5. Run your dockerized local environment:
```bash
npm run docker:start
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations! Now your project is bootstrapped successfully, and you can work with the application locally in a Docker environment.

## Deployment

### Building for production environment

To build application the locally, run:
```bash
npm run build
```

If you are working on a local Docker environment, run:
```bash
npm run docker:build
```

To build a production version of the application's Docker image, run:
```bash
npm run docker:build-prod
```

***Important: Remember to remove the `docker-compose.override.yml` file, because it was used only for local environment configuration.***

---

### Running application on production environment

To run your production application, use the following command:
```bash
npm run docker:start-prod
```

If your application has an external database, you can also run only the Next.js application container by using the following command:
```bash
docker run -p 3000:3000 --name next_fullstack_boilerplate --network=next_fullstack_boilerplate next-fullstack-boilerplate
```

It is always possible to write your own docker-compose file, which runs the production version of the application's Docker image. 

## Scripts
```shell
npm run [command_name]
```

- `dev` - Launches the app in development mode on [http://localhost:3000](http://localhost:3000)
- `build` - Compiles and bundles the app
- `start` - Runs the application built using the build command
- `lint` - Validate the code using ESLint and Prettier
- `lint:fix` - Validate and fix the code using ESLint and Prettier
- `shell` - Runs npm CLI inside Docker container for running commands
- `docker:build` - Builds application Docker image for local environment
- `docker:build-prod` - Builds application Docker image for production environment
- `docker:start` - Run the application locally in a Docker environment
- `docker:start-prod` - Run production version of the application in Docker environment
- `db:push`: - Applies all the changes specified in schema document into the database
- `db:run-migrations`: Run database migrations
- `db:generate-migration`: Create new database migration based on changes in Schema document

## Resources
- [Next.js documentation](https://nextjs.org/docs/app/getting-started)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)