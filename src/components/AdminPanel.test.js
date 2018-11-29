import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './AdminPanel';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AdminPanel tests', () => { //zbiera wiele metod it
    //testy w jest
    it('AdminPanel renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Admin Panel renders', () => {
        const wrapper = shallow(<AdminPanel />);
        expect(wrapper.find('div').text()).toBe('Admin Panel');
    })
})