FROM node:alpine

WORKDIR /home/omena/dev/react-projects/barber-appointment/back

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
