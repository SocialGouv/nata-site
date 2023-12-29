FROM node:16-alpine as builder

RUN apk add --no-cache gcc autoconf automake build-base libpng-dev nasm

WORKDIR /app

RUN chown node:node /app

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable && yarn cache clean

COPY . .

ENV NEXT_PUBLIC_MATOMO_SITE_ID="89"
ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr"
ENV NODE_ENV=production

RUN yarn --ignore-engines build-static

RUN yarn workspaces focus --production && yarn cache clean

FROM ghcr.io/socialgouv/docker/nginx:8.0.2

COPY --from=builder /app/out /usr/share/nginx/html
