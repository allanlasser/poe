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
  it('presents an image', () => {
    expect(component.find('img')).to.have.lengthOf(1);
    expect(component.find('img').get(0).props.src).to.equal('/launchpad.png');
  });
});
