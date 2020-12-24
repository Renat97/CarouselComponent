import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageCarouselHeader from './ImageCarouselHeader.jsx';
import ImageCarouselFooter from './ImageCarouselFooter.jsx';
import ImageCarousel from './ImageCarouselComponent.jsx';
import {Component, CarouselDiv, CarouselPhotosButton, TravelersPhotoLogo} from '../styles/AppStyles.js';
import Modal from '../modals/Modal.jsx';
import Carousel from './Carousel.jsx';
import GoogleMaps from './GoogleMaps.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: '',
      travelersHovered: false,
      galleryShow: false,
      mapClicked: false
    }
    this.hideModal = this.hideModal.bind(this);
    this.googleMaps = this.googleMaps.bind(this);
    this.clickedMap = this.clickedMap.bind(this);
  }
  hideModal() {
    this.setState({ galleryShow: false });
  };
  clickedMap() {
    if(this.state.mapClicked === false) {
      this.setState({
        mapClicked: true
      })
    } else {
      this.setState({
        mapClicked: false
      })
    }
  }

  componentDidMount() {
    axios.get('/api/trips/CarouselComponent/1/reviews').then(
      (response) => {
        this.setState({
         reviewCount: response.data[0].reviewCount.toLocaleString('en')
        })
      }
    );
  }

  googleMaps() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  render() {
    const mapClicked = this.state.mapClicked;
    return (
          <Component>
          <ImageCarouselHeader reviewCount = {this.state.reviewCount}/>
          <ImageCarousel/>
          <ImageCarouselFooter onClick = {this.clickedMap}/>
          <GoogleMaps mapClicked = {this.state.mapClicked}/>
          </Component>
    );
  }
}

export default App;

/*https://static.tacdn.com/img2/travelers_choice/2020/TC_L.svg*/
/*







*/
