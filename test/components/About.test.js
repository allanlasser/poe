import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import About from '../../src/components/About';

describe('<About /> component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<About />);
  });
  it('renders as a <div>', () => {
    expect(wrapper.is('div')).to.be.true;
  });
  it('says "Hello, World"!', () => {
    expect(wrapper.find('h1').text()).to.equal('Hello, World.');
  });
  it('presents a link to /', () => {
    expect(wrapper.find('Link')).to.have.lengthOf(1);
    expect(wrapper.find('Link').get(0).props.to).to.equal('/');
  });
});
