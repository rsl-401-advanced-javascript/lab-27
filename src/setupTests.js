import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter });

global.mount = mount;
global.shallow = shallow;
global.render = render;

global.rootDirectory = __dirname;