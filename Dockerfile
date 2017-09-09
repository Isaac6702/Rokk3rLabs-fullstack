FROM node:8.1.3
MAINTAINER Isaac Arismendi <arismendi6702@gmail.com>
EXPOSE 3000

WORKDIR /app
ADD . /app/
RUN npm install && npm run build

CMD NODE_ENV=$ENV node ./dist/dump/index.js && NODE_ENV=$ENV node ./dist/index.js