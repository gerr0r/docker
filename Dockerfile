FROM node:15 as base
WORKDIR /app
COPY ./app/package.json .

FROM base AS development
RUN npm install
COPY ./app .
EXPOSE 3000

FROM base AS production
RUN npm install --production
COPY ./app .
EXPOSE 3000
