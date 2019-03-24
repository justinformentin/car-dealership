import React from 'react';
import { Link } from 'react-router-dom';
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
background: #d1d4da;
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

const CarItem = (props) => {

  const { car } = props

  return (
    <Card>
      <Details>
        <CarDetails car={car} />
      </Details>
      <ButtonContainer>
        <Button>
          <ButtonLink to={`/car/${car._id}`}>
            More Info
          </ButtonLink>
        </Button>
      </ButtonContainer>
    </Card>
  )
}

export default CarItem;
