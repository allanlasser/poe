# Testing with Launchpad

We include the [Chai](http://chaijs.com/api/) testing library for asserts and expects/shoulds methods.

## Testing the Feathers application

Testing Feathers requires creating and importing the `app` object, which expects the presence of the database and caching services specified in its configuration. In order to provide these services, use the command `docker-compose start postgres redis` or, more simply, `docker-compose start`. This will initialize the services in the background, allowing tests to be run smoothly. Without these services, the `app` will raise errors about its connections and the test will fail before it even runs!

Note: When scaffolding a new Feathers service, a basic test file will be created for that service. For an example, see `test/services/user/index.test.js`.

## Testing React components

When testing a React component, it must be rendered before any assertions can be made against it.
We use the [Enzyme](http://airbnb.io/enzyme/index.html) library to make _shallow renderings_ of our components and then access the contents of the result.
A shallow rendering outputs **just** the component and its contents, without rendering any child components.
The benefit of a shallow render is that we do not need a DOM for rendering components into, reducing test complexity and improving test execution time.
But even more important, this allows us to unit test a single component's functionality in isolation.

