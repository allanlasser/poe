import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import Home from '../../src/components/Home';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('<Home />', () => {
  let component;
  beforeEach(() => {
    component = shallowRenderer.render(<Home />);
  });
  it('renders as a <div>', () => {
    expect(component.type).to.equal('div');
  });
});
