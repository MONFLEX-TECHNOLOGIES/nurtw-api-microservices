FROM node:alpine
WORKDIR /app
COPY package.json .
RUN ["npm", "install"]
COPY src  ./src
EXPOSE 3004
CMD [ "npm", "start" ]