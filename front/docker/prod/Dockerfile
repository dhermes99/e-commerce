# Install dependencies only when needed
FROM node:16-bullseye-slim as deps
WORKDIR /ops-frontend
COPY package*.json ./
RUN npm ci


# Rebuild the source code only when needed
FROM node:16-bullseye-slim as builder
WORKDIR /ops-frontend
COPY . .
COPY --from=deps /ops-frontend/node_modules ./node_modules
RUN npm run build && npm install --production --ignore-scripts --prefer-offline


# Production image, copy all the files and run next
FROM node:16-bullseye-slim as runner

WORKDIR /ops-frontend

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /ops-frontend/next.config.js ./
COPY --from=builder /ops-frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /ops-frontend/.next ./.next
COPY --from=builder /ops-frontend/node_modules ./node_modules
COPY --from=builder /ops-frontend/package.json ./package.json

USER nextjs

EXPOSE 3001

ENV PORT 3001

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]