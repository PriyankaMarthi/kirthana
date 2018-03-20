#!/bin/bash

sudo docker-compose run users-service knex migrate:latest --env development --knexfile app/knexfile.js
sudo docker-compose run users-service knex seed:run --env development --knexfile app/knexfile.js
sudo docker-compose run movies-service knex migrate:latest --env development --knexfile app/knexfile.js
sudo docker-compose run movies-service knex seed:run --env development --knexfile app/knexfile.js
