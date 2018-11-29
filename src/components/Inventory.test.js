import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Inventory tests', () => { //zbiera wiele metod it
    //testy w jest
    it('Inventory renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Inventory />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Inventory renders', () => {
        const wrapper = shallow(<Inventory />);
        expect(wrapper.find('div').text()).toBe('Inventory');
    })
})