FROM node:12-alpine

WORKDIR /app

COPY package.json /app
COPY server.js /app

RUN npm install


EXPOSE 8000
CMD [ "node", "server.js" ]