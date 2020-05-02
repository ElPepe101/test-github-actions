FROM node:12-alpine3.11

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80

CMD ["npm", "run", "start:prod"]

