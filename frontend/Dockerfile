# not final docker image for frontend

FROM node:20-alpine

WORKDIR /open-chichi

COPY package*.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
