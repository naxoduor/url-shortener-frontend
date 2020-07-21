#Build Stage
FROM node:10-alpine as develop-stage

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ .

FROM develop-stage as build-stage
RUN npm run-script build

#production-stage
FROM nginx:1.14.1-alpine as production-stage

COPY --from=build-stage /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf
