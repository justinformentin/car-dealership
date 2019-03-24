import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: #d1d4da;
  margin-bottom: 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`

  margin: 0 auto;
  @media only screen and (max-width: 1020px) {
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 1rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 0.5rem 0 1rem 0;
`;

const StyledLink = styled(Link)`
  color: #000;
  padding: 0 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
  justify-content: center;
  transition: all ease 0.3s;
  &:hover {
    transform: translateY(-2px);
    color: #666;
  }
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Car Dealership</Title>
        <LinkWrapper>
          <StyledLink to='/'>Go Home</StyledLink>
        </LinkWrapper>
      </Wrapper>
    </Container>
  );
}

export default Header


Header.propTypes = {
  type: PropTypes.oneOf(['full']),
};

Header.defaultProps = {
  type: 'default',
};
