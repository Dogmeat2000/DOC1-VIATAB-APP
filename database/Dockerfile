FROM postgres:15

COPY viatabloid.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_DB=viatab
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin
