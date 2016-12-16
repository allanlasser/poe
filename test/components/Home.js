import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../../src/components/Home';

describe('<Home />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Home />);
  });
  it('renders as a <div>', () => {
    expect(component.is('div')).to.be.true;
  });
});
