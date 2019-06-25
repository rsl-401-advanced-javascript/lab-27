'use strict';

import React from 'react';
import Counter from './counter';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';

describe('Counter', () => {
  it('should mount and exist', () => {
    let counter = mount(<Counter />);
    expect(counter.find('.up')).toBeDefined();
  });

  it('should update the state', () => {
    let counter = mount(<Counter />);
    let button = counter.find('.up');
    let initCount = counter.state('count');
    button.simulate('click');
    let newCount = counter.state('count');
    expect(newCount).not.toBe(initCount);
  });

  it('should update the DOM', () => {
    let counter = mount(<Counter />);
    let button = counter.find('.up');
    let initCount = counter.find('.counter').text();
    button.simulate('click');
    let newCount = counter.find('.counter').text();
    expect(newCount).not.toBe(initCount);
  });
});