# Next.js Full-stack Boilerplate
Boilerplate of the full-stack Next.js application created to start my side projects faster.

## Tech-stack

- **Framework**: `Next.js` 16, working on `React` 19
- **Database connection**: `Prisma ORM`
- **Authentication**: `Next Auth 5`, `bcryptjs` for passwords encryption
- **Styling**: `Tailwind 4`, 
- **Design System**: `shadcn/ui` design system, `lucide-react` icons library
- **Forms Management**: `react-hook-form` with `Zod` validation library
- **Client-side Notifications**: `sooner`
- **Code formatting**: `ESLint` & `Prettier`
- **Deployment environment** - `Docker`

## Local environment setup

Local environment is fully-dockerized. To start working locally on this project, please follow these steps:

### Preconditions

The instructions below need to be executed once during project initialization.
If you have already executed them, you can skip this section.

1. Create your local environment variables file from the dist file:
```bash
cp .env.dist .env
```

2. Run following command to generate `AUTH_SECRET` and paste it into `.env` file:
```bash
npx auth secret --raw
```

3. Fill in the rest of the missing environment variables from the `env.dist` file.

4. Create an override Docker Compose file with some special local environment configuration from the dist file:
```bash
cp docker-compose.override.yml.dist docker-compose.override.yml
```

### Project setup

1. Build a development version of the application's Docker image:
```bash
npm run docker:build
```

2. Enter application's shell to perform actions inside the Docker container:
```bash
npm run shell
```

3. Install dependencies inside shell:
```bash
npm i
```

4. Exit application's shell:
```bash
exit
```

5. Run local docker environment:
```bash
npm run docker:start
```

6. Open application's shell again in another terminal window:
```bash
npm run shell
```

7. Run the following command to create the database client, run all migrations, and seed the database with initial data.
```bash
npm run db:init
```

8. Exit application's shell:
```bash
exit
```

9. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations! Now your project is bootstrapped successfully!

## Deployment

The application has been adapted for deployment in the Docker environment.

To build application the locally, run:
```bash
npm run docker:build
```

### Building for production environment

To build a production version of the application's Docker image, run:
```bash
npm run docker:build-prod
```

**Important**: Remember to remove the `docker-compose.override.yml` file, because it was used only for local environment configuration.

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
- `db:seed`: - Seed database with initial data
- `db:generate-client` - Generate a Prisma client for the database
- `db:run-migrations` - Run database migrations
- `db:add-migration` - Create new database migration based on changes in Schema document
- `db:init` - Single command for database initialization (generating Prisma client, running migrations and seeding database with initial data)

## Resources
- [Next.js documentation](https://nextjs.org/docs/app/getting-started)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Shadcn/ui documentation](https://ui.shadcn.com/docs)
- [Lucide Icons](https://lucide.dev/icons)