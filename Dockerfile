FROM node:12.14.0
WORKDIR /code
RUN npm install -g @angular/cli@12.1.2
COPY package*.json ./
RUN npm install