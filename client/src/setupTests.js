import {configure} from 'enzyme';
import Adapter from 'enzym-adapter-react-16';
import 'jest-styled-components'
import 'jest-enzyme'

configure({ adapter: new Adapter() });