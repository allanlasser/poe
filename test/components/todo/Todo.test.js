import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Todo from '../../../src/components/todo/Todo';

describe('<Todo /> component', function() {
  describe('when complete is false', function() {
    let wrapper;
    const todoProps = {
      'onClick': () => (null),
      'completed': false,
      'text': 'Example Todo'
    };
    beforeEach(function() {
      wrapper = shallow(<Todo {...todoProps} />);
    });
    it('renders as a <li>', function() {
      expect(wrapper.is('li')).to.be.true;
    });
    it('has a todo class', function() {
      expect(wrapper.hasClass('todo')).to.be.true;
    });
    it('does not have a completed class', function() {
      expect(wrapper.hasClass('completed')).to.be.false;
    });
    it('contains an <input> and a <label>', function() {
      expect(wrapper.find('input')).to.have.lengthOf(1);
      expect(wrapper.find('label')).to.have.lengthOf(1);
    });
    it('has an unchecked <input>', function() {
      const input = wrapper.find('input').first();
      expect(input.prop('checked')).to.be.false;
    });
  });
  describe('when complete is true', function() {
    let wrapper;
    const todoProps = {
      'onClick': function() { return null; },
      'completed': true,
      'text': 'Example Todo'
    };
    beforeEach(function() {
      wrapper = shallow(<Todo {...todoProps} />);
    });
    it('has a completed class', function() {
      expect(wrapper.hasClass('completed')).to.be.true;
    });
    it('has a checked <input>', function() {
      const input = wrapper.find('input').first();
      expect(input.prop('checked')).to.be.true;
    });
  });
});
