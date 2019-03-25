import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Home';

configure({ adapter: new Adapter() });

describe('<Home />', () => {

  const wrapper = shallow(<Home />);

  it('should have a state property "carList" initiated to empty array', () => {
    expect(wrapper.state().carList).to.deep.equal([]);
  });

  it('should have a state property "filteredData" initiated to empty array', () => {
    expect(wrapper.state().filteredData).to.deep.equal([]);
  });

  it('should have a state property "make" initiated to "All"', () => {
    expect(wrapper.state().make).to.deep.equal('All');
  });

  it('should have a state property "color" initiated to "All"', () => {
    expect(wrapper.state().color).to.deep.equal('All');
  });

  it('should have a state property "year" initiated to "All"', () => {
    expect(wrapper.state().year).to.deep.equal('All');
  });

  it('should have a state property "min_price" initiated to "0"', () => {
    expect(wrapper.state().min_price).to.deep.equal(0);
  });

  it('should have a state property "max_price" initiated to "20000"', () => {
    expect(wrapper.state().max_price).to.deep.equal(20000);
  });

  it('should have a state property "hasSunroof" initiated to "false"', () => {
    expect(wrapper.state().hasSunroof).to.deep.equal(false);
  });

  it('should have a state property "isFourWheelDrive" initiated to "false"', () => {
    expect(wrapper.state().isFourWheelDrive).to.deep.equal(false);
  });

  it('should have a state property "hasLowMiles" initiated to "false"', () => {
    expect(wrapper.state().hasLowMiles).to.deep.equal(false);
  });

  it('should have a state property "hasNavigation" initiated to "false"', () => {
    expect(wrapper.state().hasNavigation).to.deep.equal(false);
  });

  it('should have a state property "hasPowerWindows" initiated to "false"', () => {
    expect(wrapper.state().hasPowerWindows).to.deep.equal(false);
  });

  it('should have a state property "hasHeatedSeats" initiated to "false"', () => {
    expect(wrapper.state().hasHeatedSeats).to.deep.equal(false);
  });

  it('should have a state property "isReady" initiated to "false"', () => {
    expect(wrapper.state().isReady).to.deep.equal(false);
  });

})
