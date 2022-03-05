# TMBP REST API Automation

This repository has Automation code for TMBD top-rated-movies and rate-movies APIs.

Tests are is contained within the `rateMovie.spec.js` and `topRatedMovies.spec.js` files.

`npm test` runs the above specs if you want to run locally on terminal.

## Run the tests locally
    npm test

## Run test on Docker

### Build docker image
    docker build -t <image_name>

### Run docker container
    docker run -it <docker_image>

After running docker container you will see tests passed in the console.

## CI
I have used Github Actions.

## Reports
I have used Cypress's builtin MochaAwesome reports.