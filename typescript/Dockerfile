FROM node:20-bullseye

WORKDIR /workspace

RUN apt-get update && apt-get install -y \
    git curl unzip zip procps \
    && rm -rf /var/lib/apt/lists/*

EXPOSE 5173

CMD [ "bash" ]
