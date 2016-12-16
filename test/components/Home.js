import assert from 'assert';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Home from '../../src/components/Home';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('<Home />', () => {
  let component;
  beforeEach(() => {
    component = shallowRenderer.render(<Home />);
  });
  it('should shallow render the component', () => {
    assert.equal(component.type, 'div');
  });
});
