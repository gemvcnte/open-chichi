# using node-alpine as base image for security reasons and not bloated
FROM node:18-alpine

WORKDIR /app

# copy the package.json file in the root folder of the backend
COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["node", "dist/index.js"]

