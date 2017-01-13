# 🚀  Launchpad

Launchpad is a starting point for amazing applications.

It provides some simple setting up and configuration, so that you can just start building something!

## Summary

Launchpad uses [Docker](http://www.docker.com) to set up and run a webserver using [NodeJS](https://nodejs.org/en/), the [Feathers](http://feathersjs.com) framework, a [Postgres](http://postgresql.org) database, and [Redis](http://redis.io) caching.

It renders a user interface using [React](https://facebook.github.io/react/) and manages the UI state with [Redux](http://redux.js.org).
Navigation between pages is managed by [react-redux-router](https://github.com/reactjs/react-router-redux).

Browser assets are compiled using [Webpack](https://webpack.js.org).
A [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) is provided, with additional support for [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) and [React Hot Loader](http://gaearon.github.io/react-hot-loader/).

Launchpad's testing framework is [Mocha](http://mochajs.org), flavored with [Chai](http://chaijs.com) for assertions and expectations.
[Enzyme](http://airbnb.io/enzyme/) is included to make testing React components simple and straightforward.
Basic style and syntax patterns are enforced by [eslint](http://eslint.org), but it's also helpful for catching syntax errors as well.

## Run

1. Install [Docker](docs.docker.com).
2. Run `docker-compose up` inside this directory. (Optional: include the `-d` flag to suppress output.)
3. Visit `localhost:3030` from your favorite browser.

### Start in background

1. After installing docker, run `docker-compose start` in this directory. This will turn all the services on and then cancel. Since the services are running in their containers, it will be like they are all running in the background. (Use `docker-compose stop` when you don't need them running anymore.)

### Start and stop individual services

Each service can be run independently by using its name as an argument to a command.
The available services are:
* `feathers`
* `webpack`
* `postgres`
* `redis`

e.g. `docker-compose start postgres`

## Develop

The Docker setup provides very helpful shortcuts and configuration when running the server.
When developing an application, it is usually faster and more helpful to install software to your host machine.
Usually, you won't need to have Postgres or Redis installed on your host machine.
Just the Node software should be enough to get up and running.

One of Launchpad's basic assumptions is that it's faster and easier to delete code and utilities that you don't need, rather than install and configure code and utilities that you do.
For example, if you don't need a database, then go ahead and remove the Postgres service from the `docker-compose.yml` file and remove `sequelize` from your Feathers services.
It all comes down to entropy, really, and Launchpad wants to reduce it as much as possible.

### Install

We suggest using [Yarn](https://yarnpkg.com) to install packages.
It's fast and simple.

1. `npm install -g yarn`
2. `yarn`

This should install the relevant packages to your machine.

**A note on adding dependencies**

When a new dependency is added to the project, the docker containers for Feathers and Packages will need to be rebuilt, in order to install the new packages. For this reason, you may find it easier to run the Feathers and Webpack services from your own host machine, after their packages have been installed. Remember that the addresses Feathers uses for Postgres and Redis will have to be adjusted to use `localhost`, instead of their Docker-provided hosts.

### Test

Before running tests on your host machine, make sure you've installed all the Node modules (see above). WHile tests can run in Docker containers, it's faster and easier to run them on your own. Also, ensure that the Postgres and Redis services are running with `docker-compose start postgres redis`. If they are not running, the Feathers application will time out when testing request responses.

Then, simply run `npm test` and all your tests in the `test/` directory will be run.

- To run tests without linting, run `npm run mocha`.
- To run linting without tests, run `npm run lint`.

### Scaffold

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

---

Launchpad was developed by Allan Lasser for Massive.

Licensed under the [MIT license](LICENSE).
