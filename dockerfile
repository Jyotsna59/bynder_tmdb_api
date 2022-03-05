FROM cypress/base:16.14.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install cypress --save-dev
RUN $(npm bin)/cypress verify

ENTRYPOINT ["npm","test"]