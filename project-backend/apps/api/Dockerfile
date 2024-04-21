FROM common-builder as builder

WORKDIR /app

RUN npm run prisma:generate
RUN npm run build -- api --production

FROM node:16.15.0-alpine3.15

WORKDIR /app

COPY --chown=node:node --from=builder /app/dist /app/dist
COPY --chown=node:node --from=builder /app/prisma /app/prisma

RUN mv /app/dist/apps/api/package.json /app/package.json

RUN npm i
RUN npx prisma generate --schema ./prisma/schema.prisma

ENV NODE_ENV=production

ENTRYPOINT ["node", "./dist/apps/api/main.js"]
CMD [""]

USER node
