## Agile Software Practice - Assignment 1.

## Docker Assignment - Agile Software Practice.

__Name:__ MingHao Meng

__Demo:__ https://youtu.be/CET2nFzcZwo


### Database Seeding.

To automate the database seeding process, I created a seed.js file that connects to MongoDB using the Mongoose library. This file reads data from a seeding.json file, which contains the initial dataset for the application. In seed.js, I defined a Mongoose schema and model, cleared existing data in the database, and inserted new records from seeding.json. Then, I added a seed service in the docker-compose.yml file with a custom Dockerfile (Dockerfile.seed). This Dockerfile copies seed.js and seeding.json into the container, installs dependencies, and executes seed.js. Running docker-compose up seed will automate the seeding process by initializing the database with data in a containerized environment.