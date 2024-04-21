# Budget planning app

This app is used to plan a budget for organization integrations.

## Project structure

```
apps/
  api/              # nestjs app
  frontend/         # angular app
prisma/             # orm related content
libs/               # project libraries
  /api              # api features/modules
    /integrations   # feature
    <feature-1>
    <feature-2>
    <feature-...>
  /frontend         # frontend features/modules
    /integrations   # feature
    <feature-1>
    <feature-2>
    <feature-...>
  /shared           # shared libs
    /data-access    # types that are generated based on prisma model
```

## Tech stack:

- nx - monorepo
- nestjs - api
- angular - frontend
- prisma - orm
- sqlite - db

## Development

### How to start

```bash
# install dependencies
npm install

# run all apps at once
npm run start

# or, run apps separately
npm run start:fe # start frontend application
npm run start:api # start api application

```

### Database explorer

If you want to preview database content, you may run it with prisma studio with command

```bash
npm run studio
```

### Model change

If you change the model in `schema.prisma`, run command below to regenerate the model

```bash
npm run prisma:generate
```

### API documentation

You'll find (very basic) API documentation under localhost:4242 when you run command below 
```
npm run api:doc
```
