FROM node:16-alpine as base

RUN mkdir /var/www
RUN mkdir /var/www/html
RUN mkdir /var/www/html/app
RUN mkdir /var/www/html/app/node_modules

VOLUME [ "/var/www/html/app" ]
VOLUME [ "/var/www/html/app/node_modules" ]

WORKDIR /var/www/html/app

COPY ./package.json ./package.json

RUN npm install
