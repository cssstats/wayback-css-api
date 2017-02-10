FROM node:7-onbuild

COPY index.js .
COPY package.json .

RUN npm i

EXPOSE 3000
CMD npm start
