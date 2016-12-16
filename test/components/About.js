import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import About from '../../src/components/About';

describe('<About />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<About />);
  });
  it('renders as a <div>', () => {
    expect(component.is('div')).to.be.true;
  });
  it('says "Hello, World"!', () => {
    expect(component.find('h1').text()).to.equal('Hello, World.');
  });
});
