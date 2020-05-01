# 

## Requirements

* Docker
* Docker desktop dashboard or VS Code Docker plugin (recommended)

## Getting started

`git clone ...`

Add a .env file on project root folder with the following variables:

```shell
# Environment type
NODE_ENV='development'

# HTTP service
MESSAGES_APP_HTTP_PORT=8080

# Database link
MESSAGES_APP_DB_HOST
MESSAGES_APP_DB_PORT
MESSAGES_APP_DB_USER
MESSAGES_APP_DB_PASS
MESSAGES_APP_DB_SCHEMA

# SMS service
MESSAGES_APP_SMS_

# Messages API
MESSAGES_APP_MSG_
```

Then:

```shell
$ make setup
$ make install
$ make dev
```


This commands will download the images listed on the [docker-compose.yml](./docker-compose.yml) configuration and will install the containers requirements. The service will be available on localhost with the port defined on `MESSAGES_APP_HTTP_PORT` or the 8080 default setting.