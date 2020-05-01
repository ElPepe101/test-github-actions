FROM alpine:3.11

RUN apk add --no-cache nodejs npm
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8001

CMD ["npm", "run", "start:prod"]

