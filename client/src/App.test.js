import React from 'react';
import { shallow } from 'enzyme';
import App from './components/App.jsx';
import LeftArrow from './components/LeftArrow.jsx';
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
})

it('should render correctly with no props', () => {
  const component = shallow(<App/>);

  expect(component).toMatchSnapshot();
});


const clickFn = jest.fn();
describe('App', () => {
  it('button click should go to next slide', () => {
    const component = shallow(<LeftArrow onClick={clickFn} />);
    component
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});