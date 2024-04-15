FROM node:18

# set working directory
WORKDIR /usr/app/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install --legacy-peer-deps --silent

# add app
COPY . .

# start app
CMD ["npm", "run", "client"]