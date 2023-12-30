FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . .


RUN yarn run build

EXPOSE 5000
CMD ["yarn", "start-prod"]