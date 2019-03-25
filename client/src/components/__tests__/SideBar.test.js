import React from 'react';
import { configure } from "enzyme";

import { render, fireEvent } from 'react-testing-library';
import carList from '../../carList.json'
import Adapter from 'enzyme-adapter-react-16'
import SideBar from '../SideBar';

configure({ adapter: new Adapter() })

const price = "5000";

describe('<SideBar />', () => {


  test('Able to type input', () => {
    const { getByTestId } = render(<SideBar carList={carList}/>);

    const minPriceInput = getByTestId(/min-price/i);
    const maxPriceInput = getByTestId(/max-price/i);

    fireEvent.change(minPriceInput, { target: { value: price } });
    fireEvent.change(maxPriceInput, { target: { value: price } });

    expect(minPriceInput.value).toEqual(price);
    expect(maxPriceInput.value).toEqual(price);
  });
});