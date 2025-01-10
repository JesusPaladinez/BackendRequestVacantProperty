FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 9000

ENV PORT=9000

CMD ["npm", "start"]
