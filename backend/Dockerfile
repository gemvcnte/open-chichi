# not final docker image for backend

# using node-alpine as base image for security reasons and not bloated
FROM node:20-alpine

WORKDIR /open-chichi

# copy the package.json file in the root folder of the backend
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["node", "dist/index.js"]

