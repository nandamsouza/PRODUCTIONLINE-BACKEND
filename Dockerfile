FROM node:20.12.1

ARG NODE_ENV
ARG PORT

WORKDIR /usr/app

ENV TZ=America/Manaus
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package.json ./

RUN yarn cache clean --mirror

RUN yarn global add @nestjs/cli

COPY . ./

RUN yarn --prod --silent
RUN yarn build

EXPOSE ${PORT}

CMD ["yarn", "prod"]
