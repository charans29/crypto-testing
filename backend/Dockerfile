FROM node:18.20.1
WORKDIR /usr/app/backend
COPY package.json .
RUN npm install --legacy-peer-deps --quiet
COPY . .