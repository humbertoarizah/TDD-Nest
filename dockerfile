FROM node:16
LABEL maintainer "humbertoarizah@gmail.com"

WORKDIR /app
EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm i
RUN npm i -g @nestjs/cli

COPY . .
RUN npm run build

CMD [ "node", "dist/main.js" ]