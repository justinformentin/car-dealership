import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CarItem from '../CarItem';

configure({ adapter: new Adapter() });

const car = {
  _id: '59d2698c2eaefb1268b69ee5',
  make: 'Chevy',
  year: 2016,
  color: 'Gray',
  price: 16106,
  options: {
    hasSunroof: false,
    isFourWheelDrive: true,
    hasLowMiles: true,
    hasPowerWindows: false,
    hasNavigation: true,
    hasHeatedSeats: false,
  },
};

describe('<CarItem />', () => {
  describe('Rendering props', () => {
    it('should render the id', () => {
      const wrapper = shallow(<CarItem car={car} />);
      expect(wrapper.text().includes(car._id)).toBe(false);
    });
  });
});
