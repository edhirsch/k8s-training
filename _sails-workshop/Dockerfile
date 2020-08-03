FROM  node:8.17.0 AS base

RUN apt-get update && apt-get install -y netcat
RUN npm install -g \
    sails \
    gulp \
    bower

WORKDIR /var/sails_workshop

# build backend
FROM base AS backend-base
EXPOSE 1337

COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend/ .
CMD ["sails", "lift"]

# build frontend
FROM base AS frontend-base
EXPOSE 8000

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

COPY frontend/bower.json ./
RUN bower install --allow-root

COPY frontend/ .
CMD ["gulp"]