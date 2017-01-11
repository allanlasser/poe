import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../../src/components/Home';
import LaunchChecklist from '../../src/containers/LaunchChecklist';

describe('<Home /> component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it('renders as a <div>', () => {
    expect(wrapper.is('div')).to.be.true;
  });
  it('presents an image', () => {
    expect(wrapper.find('img')).to.have.lengthOf(1);
    expect(wrapper.find('img').get(0).props.src).to.equal('/buttons.png');
  });
  it('presents a link to /about', () => {
    expect(wrapper.find('Link')).to.have.lengthOf(1);
    expect(wrapper.find('Link').get(0).props.to).to.equal('/about');
  });
  it('renders a <LaunchChecklist />', () => {
    expect(wrapper.find(LaunchChecklist)).to.have.lengthOf(1);
  });
});
