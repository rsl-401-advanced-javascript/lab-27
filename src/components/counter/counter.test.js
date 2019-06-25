'use strict';

import React from 'react';
import Counter from './counter';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';

describe('Counter', () => {
  it('should update the state', () => {
    let counter = mount(<Counter />);
    let button = counter.find('.up');
    let initCount = counter.state('count');
    button.simulate('click');
    let newCount = counter.state('count');
    expect(newCount).not.toBe(initCount);
  });
});