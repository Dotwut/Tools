FROM node:16-alpine@sha256:710a2c192ca426e03e4f3ec1869e5c29db855eb6969b74e6c50fd270ffccd3f1 AS pdfviewer-dev
WORKDIR /app/packages/pdfviewer/
COPY packages/pdfviewer/package.json packages/pdfviewer/package-lock.json /app/packages/pdfviewer//
RUN npm install

FROM pdfviewer-dev AS pdfviewer
COPY packages/pdfviewer /app/packages/pdfviewer//
RUN npm run build







FROM node:16-alpine@sha256:710a2c192ca426e03e4f3ec1869e5c29db855eb6969b74e6c50fd270ffccd3f1 AS frontend-dev

WORKDIR /app/packages/markdown/
COPY packages/markdown/package.json packages/markdown/package-lock.json /app/packages/markdown/
RUN npm install

WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json /app/frontend/
RUN npm install


FROM frontend-dev AS frontend-test
COPY packages/markdown/ /app/packages/markdown/
COPY frontend /app/frontend/
COPY --from=pdfviewer /app/packages/pdfviewer/dist/ /app/frontend/static/static/pdfviewer/
CMD npm run test


FROM frontend-test AS frontend
RUN npm run build







FROM node:16-alpine@sha256:710a2c192ca426e03e4f3ec1869e5c29db855eb6969b74e6c50fd270ffccd3f1 AS rendering-dev

WORKDIR /app/packages/markdown/
COPY packages/markdown/package.json packages/markdown/package-lock.json /app/packages/markdown/
RUN npm install

WORKDIR /app/rendering/
COPY rendering/package.json rendering/package-lock.json /app/rendering/
RUN npm install


FROM rendering-dev AS rendering
COPY rendering /app/rendering/
COPY packages/markdown/ /app/packages/markdown/
RUN npm run build




FROM python:3.10-slim-bullseye@sha256:89648909125f37eeff6dee35491e6295c77b76c42aa1aff2523478990e73d3fe AS api-dev

# Install system dependencies required by weasyprint and chromium
RUN apt-get update && apt-get install -y --no-install-recommends \
        chromium \
        curl \
        fontconfig \
        fonts-noto \
        fonts-noto-mono \
        fonts-noto-ui-core \
        fonts-noto-color-emoji \
        gpg \
        gpg-agent \
        libpango-1.0-0 \
        libpangoft2-1.0-0 \
        unzip \
        wget \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install fonts
WORKDIR /app/api/
COPY api/download_fonts.sh api/generate_notice.sh api/NOTICE /app/api/
RUN chmod +x /app/api/download_fonts.sh && /app/api/download_fonts.sh

# Install python packages
ENV PYTHONUNBUFFERED=on \
    PYTHONDONTWRITEBYTECODE=on \
    CHROMIUM_EXECUTABLE=/usr/lib/chromium/chromium
WORKDIR /app/api/
COPY api/requirements.txt /app/api/requirements.txt
RUN pip install -r /app/api/requirements.txt

# Configure application
ARG VERSION=dev
ENV VERSION=${VERSION} \
    DEBUG=off \
    MEDIA_ROOT=/data/ \
    SERVER_WORKERS=4 \
    PDF_RENDER_SCRIPT_PATH=/app/rendering/dist/bundle.js

# Copy license and changelog
COPY LICENSE CHANGELOG.md /app/

# Start server
EXPOSE 8000
CMD python3 manage.py migrate && \
    gunicorn \
        --bind=:8000 --worker-class=uvicorn.workers.UvicornWorker --workers=${SERVER_WORKERS} \
        --max-requests=500 --max-requests-jitter=100 \
        reportcreator_api.conf.asgi:application



FROM api-dev as api-prebuilt

# Copy source code (including pre-build static files)
COPY api/src /app/api
COPY rendering/dist /app/rendering/dist/

# Create data directory
RUN mkdir /data && chown 1000:1000 /data && chmod 777 /data
VOLUME [ "/data" ]
USER 1000



FROM api-dev AS api-test
# Copy source code
COPY api/src /app/api

# Copy generated template rendering script
COPY --from=rendering /app/rendering/dist /app/rendering/dist/
CMD pytest


FROM api-test as api
# Generate static frontend files
# Post-process django files (for admin, API browser) and post-process them (e.g. add unique file hash)
# Do not post-process nuxt files, because they already have hash names (and django failes to post-process them)
USER root
RUN python3 manage.py collectstatic --no-input --clear
COPY --from=frontend /app/frontend/dist/ /app/api/frontend/
RUN python3 manage.py collectstatic --no-input --no-post-process \
    && python3 -m whitenoise.compress /app/api/static/
USER 1000
