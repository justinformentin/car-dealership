import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Loader } from '../utils/loader';
import Layout from '../layout';
import CarItem from '../components/CarItem';
// import NewNewSidebar from '../components/NewNewSidebar';
import SideBar from '../components/SideBar';
// import Sidebar from '../layout/Sidebar';

const Container = styled.div`
  margin: 0 auto;
  margin-left: 250px;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 1200px) {
  }
`;

export default class App extends Component {

  state = {
    carList: [],
    filteredData: [],
    make: 'All',
    year: 'All',
    color: 'All',
    min_price: 0,
    max_price: 20000,
    hasSunroof: false,
    isFourWheelDrive: false,
    hasLowMiles: false,
    hasPowerWindows: false,
    hasNavigation: false,
    hasHeatedSeats: false,
    isReady: false
  }

  async componentDidMount() {
    try {
      const cars = await axios("/api/data");
      this.setState({
        carList: cars.data.cars,
        filteredData: cars.data.cars,
        isReady: !this.state.isReady,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  changeOptions = e => {
    const name = e.target.name
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  filteredData() {
    let newData = this.state.carList.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price
      && item.year >= this.state.year
    })
    if(this.state.color !== 'All') {
      newData = newData.filter((item) => item.color === this.state.color)
    }
    if(this.state.make !== 'All') {
      newData = newData.filter((item) => item.make === this.state.make)
    }

    // Options
    (this.state.hasSunroof) && (newData = newData.filter(item => item.options.hasSunroof));

    (this.state.isFourWheelDrive) && (newData = newData.filter(item => item.options.isFourWheelDrive));

    (this.state.hasLowMiles) && (newData = newData.filter(item => item.options.hasLowMiles));

    (this.state.hasPowerWindows) && (newData = newData.filter(item => item.options.hasPowerWindows));

    (this.state.hasNavigation) && (newData = newData.filter(item => item.options.hasNavigation));

    (this.state.hasHeatedSeats) && (newData = newData.filter(item => item.options.hasHeatedSeats));


    this.setState({
      filteredData: newData
    },
    // () => console.log(this.state.filteredData)
    )
  }

  render() {
    return (
      <Layout>
        <SideBar
          changeOptions={this.changeOptions}
          setSliderValue={this.setSliderValue}
          carList={this.state.carList}
        />
        {this.state.isReady ? (
          <Container>
            {this.state.filteredData.map(car => {
              return(
                <CarItem car={car} />
              )
            })}
          </Container>
        ) : (
          <Loader />
        )}
      </Layout>
    )
  }
}