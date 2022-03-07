[![Tests](https://github.com/Jyotsna59/bynder_tmdb_api/actions/workflows/main.yml/badge.svg?event=push)](https://github.com/Jyotsna59/bynder_tmdb_api/actions/workflows/main.yml)

# TMDB REST API Automation

This repository has Automation code for TMDB top-rated-movies and rate-movies APIs.

Tests are is contained within the `rateMovie.spec.js` and `topRatedMovies.spec.js` files.


## Run the tests locally
    npm run test:cli

## Run test on Docker

### Build docker image
    docker build -t <image_name> .

### Run docker container
    docker run -it <docker_image>

After running docker container you will see tests passed in the console.

## CI
I have used Github Actions.

## Reports
I have used Cypress's builtin Mocha reports with following packages:
* mochawesome
* mochawesome-merge
* mochawesome-report-generator

## To View Reports:
Generated test reports can be viewed in `<project_root>\TestReport\cypress-combined-report.html`

## Sample report screenshot

![Report Image](https://github.com/Jyotsna59/bynder_tmdb_api/blob/main/report_image.JPG?raw=true "Test Report")