# Postgres

''Install Postgres''

### npm install pg
### psql -U postgres -h localhost
### postgres=# CREATE DATABASE authdb;

## Inside Code
Install npm install -g sequelize-cli
Install npm install sequelize --save

## Create Model
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

## Create Migration''
npx sequelize migration:generate --name books

## Run Migration
npx sequelize-cli db:migrate
