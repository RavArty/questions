FROM node:10.16.0

RUN mkdir -p /
WORKDIR /app

COPY package.json /app


RUN yarn

COPY . /app



CMD ["yarn", "start"]