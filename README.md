## Installation

```bash
$ yarn install
$ npx prisma generate

# for init the clear database
$ npx prisma migrate dev
```

## Running the app
Set the `DATABASE_URL` variable in the `.env` file
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
$ yarn run test
```
## Running with Docker
Set the `DATABASE_URL`, `DATABASE_USER`, `DATABASE_PASSWORD` and `DATABASE_DB` variables in the `.env` file
```bash
# up containers
$ docker compose up -d

# for init the clear database
$ docker compose exec app npx prisma migrate dev
```

## API Reference
```bash
http://127.0.0.1:3000/docs/api
```