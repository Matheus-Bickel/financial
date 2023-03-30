FROM node:14-alpine

WORKDIR /src

COPY package.json yarn.lock ./

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["node", "src/router.ts"]