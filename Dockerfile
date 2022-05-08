FROM node:17-alpine as base

RUN mkdir /var/www
RUN mkdir /var/www/html
RUN mkdir /var/www/html/app
RUN mkdir /var/www/html/app/src

VOLUME [ "/var/www/html/app/src" ]

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /var/www/html/app

COPY ./package.json ./package.json
COPY ./index.html ./index.html
COPY ./tsconfig.json ./tsconfig.json
COPY ./vite.config.ts ./vite.config.ts

RUN npm install

###################################
FROM base as dev

EXPOSE 8000

###################################
FROM dev as test

RUN mkdir /var/www/html/.git
RUN mkdir /var/www/html/app/t

VOLUME [ "/var/www/html/.git" ]
VOLUME [ "/var/www/html/app/t" ]

RUN apk update -q
RUN apk add -q git

ENV GIT_DIR=/var/www/html/.git
ENV GIT_WORK_TREE=/var/www/html/app
ENV NODE_OPTIONS=--experimental-vm-modules

COPY ./.babelrc ./.babelrc
COPY ./jest.config.json ./jest.config.json
