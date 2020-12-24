import React, {useState} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
  if(this.props.mapClicked === true) {
  // props.activeMap();
  const containerStyle = {
    position: 'absolute',
    width: '40%',
    height: '20%',
    left: '700px',
    top: '650px'
  }
  return (
    <Map containerStyle={containerStyle} google={this.props.google} zoom={14} initialCenter={{lat: 37.3183308913816, lng: -121.95104927812497}}>
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
      <InfoWindow onClose={this.onInfoWindowClose}>
          {/* <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div> */}
      </InfoWindow>
    </Map>
  );
  } else {
    return null;
  }
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyDUg1oaQokWEvMUyfxZiz-_Ms4JZWQqHm0')
})(MapContainer)


