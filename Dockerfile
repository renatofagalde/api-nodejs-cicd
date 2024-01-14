FROM node:latest
RUN #addgroup app && adduser -S -G app app
#USER app
WORKDIR /usr/src/app
COPY package*.json ./
#COPY --chown=app:node package*.json .
RUN npm install
COPY . .
EXPOSE 3000

CMD [ "npm", "start" ]
