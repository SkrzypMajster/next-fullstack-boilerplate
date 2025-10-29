FROM node:24.10.0-alpine AS base

# STAGE 1 - Install npm packages
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app 

# Install dependencies only when package.json file changes
COPY package.json package-lock.json* ./
RUN npm ci

# STAGE 2 - Build Next.js application
FROM base AS builder

WORKDIR /app

# Copy dependecies files
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Generate Prisma client based on schema
RUN npx prisma generate

# Build Next.js application
RUN npm run build

# STAGE 3 - Build production image and run Next.js standalone app
FROM base AS runner

ENV NODE_ENV=production
WORKDIR /app

# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown node:node .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=node:node --from=builder /app/.next/standalone ./
COPY --chown=node:node --from=builder /app/.next/static ./.next/static

USER node

EXPOSE 3000

ENV PORT=3000

# Set hostname to localhost
ENV HOSTNAME=0.0.0.0

# https://nextjs.org/docs/messages/sharp-missing-in-production
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
