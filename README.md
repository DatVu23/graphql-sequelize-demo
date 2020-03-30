# GraphQL sequelize Demo

## Set up database

MySQL

``sh
  docker run \
  -p 0.0.0.0:7998:3306 \
  --name users-posts-likes__db \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_USER=upl-dev \
  -e MYSQL_PASSWORD=password \
  -e MYSQL_DATABASE=upl \
  -d mysql:latest
``

Postgres

``sh
  docker run \
  -p 0.0.0.0:6999:5432 \
  --name users-posts-likes_postgres-db \
  -e POSTGRES_USER=dev \
  -e POSTGRES_PASSWORD=pg \
  -e POSTGRES_DB=upl \
  -d postgres
``

To execute psql inside docker container type:

``
  docker exec -it `docker_container_name` psql -U `POSTGRES_USER` -W `POSTGRES_DB`
``

  This will create a Docker instance called `users-posts-likes__db`, running MySQL `latest` version, with the root password being password.
  It also creates a database called `upl`, creates a user called `upl-dev` (with password `password`), and assigns that user full
  permissions onto the upl database.

## Sequelize

  To seed specific file
``sh
  npx sequelize-cli db:seed --seed 20200219144256- 
  users.js
``

## Installation packages

  yarn add -D typescript ts-node-dev
  yarn add sequelize sequelize-cli sequelize-typescript mysql2 \
  dotenv \
  apollo-server apollo-server-express express body-parser cors
  reflect-metadata

  

