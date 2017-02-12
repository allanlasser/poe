'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('poetry service', function() {
  it('registered the poetries service', () => {
    assert.ok(app.service('poetries'));
  });
});
