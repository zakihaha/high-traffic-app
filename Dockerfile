FROM node:20.10.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
