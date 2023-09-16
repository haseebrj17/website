# Host the HTTP API yourself

In this guide, we will show you how to host the HTTP API yourself. This is not
necessary for most users, but it can be useful in some cases.

You can find the source code for the HTTP API on
[GitHub](https://github.com/dicebear/api). The code is written in TypeScript and
uses the [Fastify](https://www.fastify.io/) framework.

## With docker

The easiest way to host the HTTP API yourself is to use the docker image. You
can find the image on [Docker Hub](https://hub.docker.com/r/dicebear/api).

```
docker run -ti -p 3000:3000 dicebear/api:latest
```

## Without docker

If you don't want to use docker, you can also run the HTTP API directly on your
machine. You need to have [Node.js](https://nodejs.org/) installed.

```
git clone git@github.com:dicebear/api.git
cd api

npm install
npm start
```

## Environment variables

The HTTP API supports the following environment variables:

### PORT

The port on which the HTTP API should listen. Defaults to `3000`.

### ADDRESS

The address on which the HTTP API should listen. Defaults to `0.0.0.0` (all IPv4
addresses).

### ENABLE_LOGGER

Enable the logger. Defaults to `0` (false).

### ENABLE_PNG

Enable the PNG endpoint. Defaults to `1` (true).

### PNG_SIZE_MIN

The minimum size for the PNG endpoint. Defaults to `1`.

### PNG_SIZE_MAX

The maximum size for the PNG endpoint. Defaults to `256`.

### PNG_SIZE_DEFAULT

The default size for the PNG endpoint. Defaults to `256`.

### ENABLE_PNG_EXIF

Enable EXIF data for the PNG endpoint. Defaults to `1` (true).

#### Requirements

- Perl (https://www.npmjs.com/package/exiftool-vendored#installation)
- procps
  (https://www.npmjs.com/package/exiftool-vendored#this-package-requires-procps)

### ENABLE_JPEG

Enable the JPEG endpoint. Defaults to `1` (true).

### JPEG_SIZE_MIN

The minimum size for the JPEG endpoint. Defaults to `1`.

### JPEG_SIZE_MAX

The maximum size for the JPEG endpoint. Defaults to `256`.

### JPEG_SIZE_DEFAULT

The default size for the JPEG endpoint. Defaults to `256`.

### ENABLE_JPEG_EXIF

Enable EXIF data for the JPEG endpoint. Defaults to `1` (true).

#### Requirements

- Perl (https://www.npmjs.com/package/exiftool-vendored#installation)
- procps
  (https://www.npmjs.com/package/exiftool-vendored#this-package-requires-procps)

### ENABLE_VERSION_4_4

Enable the version 4.4 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_4_5

Enable the version 4.5 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_4_6

Enable the version 4.6 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_4_7

Enable the version 4.7 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_4_8

Enable the version 4.8 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_4_9

Enable the version 4.9 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_4_10

Enable the version 4.10 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_5_0

Enable the version 5.0 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_5_1

Enable the version 5.1 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_5_2

Enable the version 5.2 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_5_3

Enable the version 5.3 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_6

Enable the version 6 endpoint. Defaults to `1` (true).

### ENABLE_VERSION_7

Enable the version 7 endpoint. Defaults to `1` (true).

### CACHE_CONTROL_AVATARS

Cache duration for the avatars endpoint in seconds. Defaults to `31536000` (1
year).
