FROM oven/bun

RUN apt update && apt install -y curl

WORKDIR /app

COPY /app/package.json ./package.json

RUN bun install

COPY /app .

# Update HEALTHCHECK to check the application's health, assuming bun health-check.ts does that
HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 CMD curl --fail http://localhost:3000/error || exit 1
