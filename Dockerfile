FROM node:17

RUN mkdir /var/www
RUN mkdir /var/www/html
RUN mkdir /var/www/html/app
RUN mkdir /var/www/html/app/src

ENV CHOKIDAR_USEPOLLING=true

VOLUME [ "/var/www/html/app/src" ]

WORKDIR /var/www/html/app

COPY ./package.json ./package.json
COPY ./index.html ./index.html
COPY ./tsconfig.json ./tsconfig.json
COPY ./vite.config.ts ./vite.config.ts

RUN npm install

EXPOSE 8000
