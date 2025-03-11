FROM node:20.18.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=${REACT_APP_API_URL}

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]