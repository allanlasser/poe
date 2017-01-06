import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import configureStore from '../../src/store';
import About from '../../src/components/About';

describe('<About /> component', () => {
  describe('rendering', () => {
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
  describe('behavior', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<About />);
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
