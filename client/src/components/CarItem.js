import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../layout/Button';
import CarDetails from './CarDetails';

const Card = styled.div`
  width: 95%;
  min-height: 450px;
  margin: 5% auto;
  text-align: center;
  border-radius: 7px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.3);
  /* background: #d1d4da; */
  padding: 0 0.5rem 1rem 0.5rem;
  margin: 0.5rem;
  flex-grow: 1;
  flex-basis: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  @media only screen and (min-width: 1200px) {
    max-width: 30%;
  }
`;

const Details = styled.div`
  padding: 0 0 2rem 0;
  margin-bottom: 2.5rem;
  top: 0;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%
  margin: 2.5rem 0;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const carColor = color =>
({
  White: '#f9f9f9',
  Silver: '#c0c0c0',
  Gray: '#7b7b7b',
  Black: '#202020',
  Red: '#850f0f'
}[color]);

const cardText = bg => ({
  White: '#222',
  Silver: '#222',
  Gray: '#fff',
  Black: '#fff',
  Red: '#fff'
}[bg]);

const CarItem = props => {
  const { car } = props;
  const { color } = car;

  const currentColor = carColor(color);
  const textColor = cardText(color);
  return (
    // <Card style={{'background':`${color}`}}>
    <Card
      style={{
        'background':`${currentColor}`,
        'color': `${textColor}`
      }}
    >
      <Details>
        <CarDetails car={car} />
      </Details>
      <ButtonContainer>
        <Button>
          <ButtonLink to={`/car/${car._id}`}>More Info</ButtonLink>
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default CarItem;

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
};
