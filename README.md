## Prerequisites

- **_NodeJS_** version: >= 18.x (prod recommended / dev recommended)
- **_Yarn CLI (Classic)_** (optional) version: >= 1.x

## Development quickstart

1. Clone the repository
2. Install the dependencies

   ```bash
   yarn install
   ```

3. Create the required `.env` files using the `.env.example`. 

4. Run the database

   ```bash
   docker compose up -d
   ```

   or

   ```bash
   docker-compose up -d
  ```
5. Run the apps

  ```bash
  # development
  $ yarn run start

  # watch mode
  $ yarn run start:dev

  # production mode
  $ yarn run start:prod
  ```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## License

Nest is [MIT licensed](LICENSE).
