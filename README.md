# 🚀  Launchpad

Launchpad is a starting point for amazing applications.

It provides some simple setting up and configuration, so that you can just start building something!
Launchpad uses [Docker](http://www.docker.com) to set up and run a webserver using [NodeJS](https://nodejs.org/en/), the [Feathers](http://feathersjs.com) framework, a [Postgres](http://postgresql.org) database, and [Redis](http://redis.io) caching.

## Setup

1. Install Docker by visiting [docs.docker.com](docs.docker.com) and installing the Docker application for your operating system.
2. Run `docker-compose up` inside this directory.
3. Visit `localhost:3030` from your favorite browser.

## Testing

Before running tests, ensure all services are running with `docker-compose start`. If they are not running, the application will time out when testing request responses.

Then, simply run `npm test` and all your tests in the `test/` directory will be run.

- To run tests without linting, run `npm run mocha`.
- To run linting without tests, run `npm run lint`.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

Licensed under the [MIT license](LICENSE).
