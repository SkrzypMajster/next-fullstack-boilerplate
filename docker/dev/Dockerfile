FROM node:20-alpine AS base

# STAGE 1 - Install npm packages
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies only when package.json file changes
COPY package.json package-lock.json* ./
RUN npm i

# STAGE 2 - Build Next.js application
FROM base AS builder

WORKDIR /app

# Copy dependecies files
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .
