import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests', () => { //zbiera wiele metod it
    //testy w jest
    it('App renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Child components renders', () => {
        const wrapper = shallow(<App />);
        // console.log(wrapper.debug());
        // expect(wrapper.find('i').text()).toBe('Hello World'); //find - znajduje, text - tekst we wrapper który ma być równy hello world
        expect(wrapper.find('Header').exists()).toBe(true); //czy we wrapperze (App) istnieje taki tag jak Header 
        expect(wrapper.find('Order').exists()).toBe(true);
        expect(wrapper.find('AdminPanel').exists()).toBe(true);
        expect(wrapper.find('Inventory').exists()).toBe(true);
    })
})