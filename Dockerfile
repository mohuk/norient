FROM node:8.0-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm i
COPY . /usr/app
EXPOSE 4000
EXPOSE 5858
CMD ["npm", "run", "start"]
