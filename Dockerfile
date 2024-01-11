FROM node:20-alpine as development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node tsconfig*.json ./
RUN yarn
COPY --chown=node:node . .
USER node


FROM node:20-alpine as build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node tsconfig*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npx prisma generate
RUN yarn run build
ENV NODE_ENV production
RUN yarn install --production
USER node
CMD [ "node", "dist/src/main.js" ]