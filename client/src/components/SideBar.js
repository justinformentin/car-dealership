import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from './Slider';
import arrow from '../assets/images/arrow.svg';

const Container = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #505364;
  overflow-x: hidden;
  padding-top: 20px;
  label, span {
    color: #fff;
  }
`;

const MainTitle = styled.h3`
  text-align: center;
  color: #fff;
`;

const Title = styled.h4`
  margin-top: 1rem;
  text-align: center;
  background: #40444f;
  color: #fff;
  width: 100%;
`;

const HR = styled.hr`
margin-top: 0.5rem;
height: 2px;
background-image: -webkit-linear-gradient(left, rgba(0,0,0,0), rgba(200,200,200,.8), rgba(0,0,0,0));
background-image:    -moz-linear-gradient(left, rgba(0,0,0,0), rgba(200,200,200,.8), rgba(0,0,0,0));
background-image:     -ms-linear-gradient(left, rgba(0,0,0,0), rgba(200,200,200,.8), rgba(0,0,0,0));
background-image:      -o-linear-gradient(left, rgba(0,0,0,0), rgba(200,200,200,.8), rgba(0,0,0,0));
border: 0;
`;

const DropdownContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-contnet: center;
`;

const Dropdown = styled.select`
  margin: 0 auto;
  background-color: #d1d4da;
  background-image: url(${arrow});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: auto 50%;
  border-radius:2px;
  border: none;
  color: #000;
  padding: 10px 30px 10px 10px;
  outline: none;
  appearance: none;
  &::-ms-expand { display: none };
}
`;

const PriceContainer = styled.div`
  display: flex;
  margin-left: 0.5rem;
`;

const PriceInput = styled.input`
  width: 70%;
  margin: 1rem 0.25rem;

`;

const PriceWrap = styled.div`
  margin-top: 1rem;
`;

const SliderTags = styled.div`
  margin: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const OptionList = styled.div`
  margin: 1rem;
`;

const Option = styled.div`
  padding: 0.25rem;
  label {
    padding-left: 0.25rem;
  }
`;

const SideBar = props => {

  const {
    carList,
    min_price,
    max_price,
    changeOptions,
    year
  } = props

  /**
   * @param {string} key
   *
   * The key you want your list of values return from.
   */
  const makeList = key => {
    // Gets list of values from each key
    const list = carList.map(item => item[key])
    // Returns only unique values from previous list
    const uniqueList = [...new Set(list)]
    // Maps over each list item and returns options for the select component
    return uniqueList.map((item) => <option key={item} value={item}>{item}</option>)
  }

  return (

    <Container>

      <MainTitle>Car Options</MainTitle>
      <HR />

      <Title><span>Make</span></Title>
      <DropdownContainer>
        <Dropdown name="make" onChange={changeOptions}>
          <option value='All'>Choose Make</option>
          {makeList('make')}
        </Dropdown>
      </DropdownContainer>

      <Title>Color</Title>
      <DropdownContainer>
        <Dropdown name="color" onChange={changeOptions}>
          <option value='All'>Choose Color</option>
          {makeList('color')}
        </Dropdown>
      </DropdownContainer>

      <Title>Price Range</Title>
      <PriceContainer>
        <PriceWrap>
          <label>Min. Price</label>
          <PriceInput type="text" data-testid="min-price" name="min_price" defaultValue='0' onChange={changeOptions} value={min_price}/>
        </PriceWrap>
        <PriceWrap>
          <label>Max Price</label>
          <PriceInput type="text" data-testid="max-price" name="max_price" defaultValue='20000' onChange={changeOptions} value={max_price}/>
        </PriceWrap>
      </PriceContainer>

      <Title>Year</Title>
      <Slider>
        <input type="range" name="year" defaultValue="2012" onChange={changeOptions} value={year} min="2012" max="2016"/>
      </Slider>
      <SliderTags>
        <p>2012</p>
        <p>2016</p>
      </SliderTags>

      <Title>Options</Title>
      <OptionList>
        <Option>
          <input type="checkbox" name="hasSunroof" value="hasSunroof" onChange={changeOptions} />
          <label>Sunroof</label>
        </Option>
        <Option>
          <input type="checkbox" name="isFourWheelDrive" value="isFourWheelDrive" onChange={changeOptions} />
          <label>Four Wheel Drive</label>
        </Option>
        <Option>
          <input type="checkbox" name="hasLowMiles" value="hasLowMiles" onChange={changeOptions} />
          <label>Low Miles</label>
        </Option>
        <Option>
          <input type="checkbox" name="hasPowerWindows" value="hasPowerWindows" onChange={changeOptions} />
          <label>Power Windows</label>
        </Option>
        <Option>
          <input type="checkbox" name="hasNavigation" value="hasNavigation" onChange={changeOptions} />
          <label>Navigation</label>
        </Option>
        <Option>
          <input type="checkbox" name="hasHeatedSeats" value="hasHeatedSeats" onChange={changeOptions} />
          <label>Heated Seats</label>
        </Option>

      </OptionList>
    </Container>
  )
}

export default SideBar;

SideBar.propTypes = {
  carList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      make: PropTypes.string,
      year: PropTypes.number,
      price: PropTypes.number,
      color: PropTypes.string,
      options: PropTypes.objectOf(PropTypes.bool)
    }),
  ),
  min_price: PropTypes.number,
  max_price: PropTypes.number,
  year: PropTypes.number
};
