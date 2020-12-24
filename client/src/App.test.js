import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './components/App.jsx';
import Modal from './modals/Modal.jsx';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import ImageCarouselHeader from './components/ImageCarouselHeader.jsx';
import ImageCarouselFooter from './components/ImageCarouselFooter.jsx';
import LeftArrow, {ArrowDiv} from './components/LeftArrow.jsx';
import { styleSheetSerializer } from "jest-styled-components/serializer"
import { addSerializer } from "jest-specific-snapshot"

addSerializer(styleSheetSerializer)

const Button = styled.button`
  color: red;
  border: 0.05em solid ${props => props.transparent ? 'transparent' : 'black'};
  cursor: ${props => !props.disabled && 'pointer'};
  opacity: ${props => props.disabled && '.65'};
`


test('it works', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSpecificSnapshot("./Button.snap")
})

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

describe('ImageCarouselHeader', () => {
  const reviews = '50000';

  it('ImageCarouselHeader properly renders reviews', () => {
    const component = <ImageCarouselHeader reviewCount = {reviews}/>

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

describe('ImageCarouselFooter', () => {
  const component = shallow(<ImageCarouselFooter/>);

  expect(component).toMatchSnapshot();
});

it('should render List with the correct styles', () => {
  const component = mount(<ArrowDiv/>);

  expect(component).toHaveStyleRule('background-color', 'red');
})
