import React from 'react';
import styled from 'styled-components';
import chevy from '../assets/images/chevy.png';
import ford from '../assets/images/ford.png';
import mercedes from '../assets/images/mercedes.png';
import toyota from '../assets/images/toyota.png';

const Img = styled.img`
  width: 200px;
`;

const CarDetails = props => {
  const { car } = props;
  const {
    make,
    year,
    price,
    color,
    options
  } = car;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

  const carLogo = (make) => ({
    'Chevy': chevy,
    'Ford': ford,
    'Mercedes': mercedes,
    'Toyota': toyota
  })[make]

  return (
    <>
      <Img alt="Car Logo" src={carLogo(make)} />
      <h3>{formatter.format(price)}</h3>
      <p>Make: {make}</p>
      <p>Year: {year}</p>
      <p>Color: {color}</p>
      {options.hasLowMiles && <p>Low Miles</p>}
      <p>Options:</p>
      <ul>
        {options.hasSunroof && <li>Sunroof</li>}
        {options.isFourWheelDrive && <li>4WD</li>}
        {options.hasPowerWindows && <li>Power Windows</li>}
        {options.hasNavigation && <li>Navigation</li>}
        {options.hasHeatedSeats && <li>Heated Seats</li>}
      </ul>
    </>
  )
}

export default CarDetails
