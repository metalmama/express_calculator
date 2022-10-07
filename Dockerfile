FROM node: 14.15.4-alpine3.12

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

# Install app dependencies (not devDependencies)

RUN npm install --only=production

# Bundle app source

COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]