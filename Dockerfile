FROM oven/bun

RUN apt update && apt install -y curl

WORKDIR /app

COPY /app/package.json ./package.json

RUN bun install

COPY /app .


HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "bun health-check.ts" ]

CMD ["bun", "start"]