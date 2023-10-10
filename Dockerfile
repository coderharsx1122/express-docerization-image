FROM node:16
WORKDIR /app

COPY ./package*.json ./
RUN  npm install
COPY . . 
EXPOSE 5500
CMD ["npm","run","dev"]