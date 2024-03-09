FROM node:latest

WORKDIR /app

COPY . . 

RUN npm i

EXPOSE 7780

CMD [ "node", "src/index.js" ]