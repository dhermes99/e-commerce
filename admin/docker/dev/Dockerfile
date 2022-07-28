FROM node:16-bullseye-slim

WORKDIR /operations-frontend

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3001

CMD ["npm", "run", "dev"]
