FROM node:16-alpine as base

RUN mkdir /var/www
RUN mkdir /var/www/html
RUN mkdir /var/www/html/app
RUN mkdir /var/www/html/app/node_modules

VOLUME [ "/var/www/html/app" ]
VOLUME [ "/var/www/html/app/node_modules" ]

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /var/www/html/app

COPY ./package.json ./package.json

RUN npm install

COPY ./.mocharc.js ./.mocharc.js
COPY ./tsconfig.json ./tsconfig.json

###################################
FROM base as test

RUN mkdir /var/www/html/.git

VOLUME [ "/var/www/html/.git" ]

RUN apk update -q
RUN apk add -q git

ENV GIT_DIR=/var/www/html/.git
ENV GIT_WORK_TREE=/var/www/html/app/
