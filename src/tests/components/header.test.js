import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render hesder correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Spendee');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});