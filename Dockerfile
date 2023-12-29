FROM node:16-alpine as builder

RUN apk add --no-cache gcc autoconf automake build-base libpng-dev nasm

WORKDIR /app

RUN chown node:node /app

# ignore node engine constraint for yarn berry
ENV YARN_IGNORE_NODE=1

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable && yarn cache clean

COPY . .

ENV NEXT_PUBLIC_MATOMO_SITE_ID="89"
ENV NEXT_PUBLIC_MATOMO_URL="https://matomo.fabrique.social.gouv.fr"
ENV NODE_ENV=production

RUN yarn build-static

RUN yarn workspaces focus --production && yarn cache clean

FROM ghcr.io/socialgouv/docker/nginx:8.0.2

COPY --from=builder /app/out /usr/share/nginx/html
