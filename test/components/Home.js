import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import configureStore from '../../src/store';
import Home from '../../src/components/Home';

describe('<Home /> component', () => {
  describe('rendering', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Home />);
    });
    it('renders as a <div>', () => {
      expect(wrapper.is('div')).to.be.true;
    });
    it('presents an image', () => {
      expect(wrapper.find('img')).to.have.lengthOf(1);
      expect(wrapper.find('img').get(0).props.src).to.equal('/launchpad.png');
    });
    it('presents a link to /about', () => {
      expect(wrapper.find('Link')).to.have.lengthOf(1);
      expect(wrapper.find('Link').get(0).props.to).to.equal('/about');
    });
  });
  describe('behavior', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Home />);
    });
    it('works!', () => {
      expect(wrapper).to.be.an('object');
    });
  });
  describe('state', () => {
    let store;
    beforeEach(() => {
      store = configureStore({});
    });
    it('works!', () => {
      expect(store).to.be.an('object');
    });
  });
});
