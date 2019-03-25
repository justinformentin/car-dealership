
import React from 'react';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CarDetails from '../CarDetails'

configure({ adapter: new Adapter() });

const car = {
  "_id": "59d2698c2eaefb1268b69ee5",
  "make": "Chevy",
  "year": 2016,
  "color": "Gray",
  "price": 16106,
  "options": {
    "hasSunroof": false,
    "isFourWheelDrive": true,
    "hasLowMiles": true,
    "hasPowerWindows": false,
    "hasNavigation": true,
    "hasHeatedSeats": false
  }
}

describe('<CarDetails />', () => {
  describe('Rendering props', () => {
    it('should render the make', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.make)).toBe(true);
    });

    it('should render the year', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.year)).toBe(true);
    });

    it('should render the color', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.color)).toBe(true);
    });

    it('should render the price', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.color)).toBe(true);
    });

    it('should render the hasSunroof', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.options.hasSunroof)).toBe(false);
    });

    it('should render the isFourWheelDrive', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.options.isFourWheelDrive)).toBe(false);
    });

    it('should render the hasLowMiles', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.options.hasLowMiles)).toBe(false);
    });

    it('should render the hasPowerWindows', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.options.hasPowerWindows)).toBe(false);
    });

    it('should render the hasNavigation', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.options.hasNavigation)).toBe(false);
    });

    it('should render the hasHeatedSeats', () => {
      const wrapper = shallow(<CarDetails car={car} />);
      expect(wrapper.text().includes(car.options.hasHeatedSeats)).toBe(false);
    });

  });
})
