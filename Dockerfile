FROM node:14

# skapa mapp för projektet

WORKDIR /usr/src/app

# installera paket

COPY package*.json ./

# installera dependencies (ej devDep)

RUN npm install --only=prod

# bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]

