import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Loader } from '../utils/loader';
import Layout from '../layout';
import CarDetails from '../components/CarDetails';


const Container = styled.div`
  background: #d1d4da;
  margin: 0 auto;
  width: 60%;
  border-radius: 7px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
  width: 75%
  }
  @media only screen and (max-width: 960px) {
  width: 80%
  }
  @media only screen and (max-width: 768px) {
  width: 85%
  }
  @media only screen and (max-width: 640px) {
  width: 95%
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 2rem 5rem;
  text-align: center;
  flex: 1;
  justify-content: center;
  h3,
  p {
    margin-bottom: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export default class Info extends Component {
  state = {
    car: [],
    isReady: false,
  };

  fetchData = () => {
    axios
      .get(`/api/data/car/${this.props.match.params.id}`)
      .then(res =>
        this.setState({
          car: res.data.car,
          isReady: !this.state.isReady,
        }, () => console.log(this.state.car))
      )
      .catch(err => console.log(err));
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {

    const { car } = this.state;

    return (
      <Layout type="full">
        {this.state.isReady ? (
          <Container>
            <Wrapper>
              <CarDetails car={car} />
            </Wrapper>
          </Container>
        ) : (
          <Loader />
        )}
      </Layout>
    );
  }
}
