FROM cypress/base:16.14.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install cypress --save-dev
RUN ./node_modules/.bin/cypress install
RUN $(npm bin)/cypress verify
RUN npm i --D mocha mochawesome mochawesome-merge mochawesome-report-generator

ENTRYPOINT ["npm","run","test:cli"]