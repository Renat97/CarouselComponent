import React from 'react';
// footer images
import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice, CarouselPhotosButton, TravelersPhotoLogo, ContainerDiv, ContainerDivRatingAndReviews, ContainerDivHeaderText, Text3, Image0, CloseIcon, CloseIcon2, IconDivs, TextDivs, TextDiv1, TextDiv2, Container, textDiv1Text, Header, TextArea, EmailLogo, CarouselDiv, TravelersDiv, ToursAndExperiencesDiv, CarouselFooterDiv, CarouselTourOptions, PTag, OverviewTop, OverviewMiddle, OverviewMiddleHours, OverviewDurationHours, OverviewAddressDiv, OverviewImproveDiv, EmailTag, CopyTag } from '../styles/AppStyles.js';
var shareIcon = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/shareIcon.png';
var shareIconBlack = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/shareIconBlack.png';
import Carousel from './Carousel.jsx';
import RightArrow from './RightArrow.jsx';
import PhotosModal from '../modals/PhotosModal.jsx';
var walkingPNG = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/walking.png';
var whiteArrowDown = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/whiteArrowDown.jpg';
var firstClock = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/firstClock.png';
var durationClock = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/durationClock.png';
var mapMarker = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/mapMarker.png';
var pencil = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/pencil.png';
import ModalTravelers from '../modals/ModalTravelers.jsx';
import MoreModal from '../modals/MoreModal.jsx';
import HoursModal from '../modals/HoursModal.jsx';

class ImageCarouselFooter extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    moreModalShow: false
  }
  this.showMoreModal = this.showMoreModal.bind(this);
  this.closeMoreModal = this.closeMoreModal.bind(this);
  this.showHoursModal = this.showHoursModal.bind(this);
  this.closeHoursModal = this.closeHoursModal.bind(this);
}
showMoreModal() {
  this.setState({
    moreModalShow: true
  })
}
closeMoreModal() {
  this.setState({
    moreModalShow: false
  })
}
showHoursModal() {
  this.setState({
    hoursModalShow: true
  })
}
closeHoursModal() {
  this.setState({
    hoursModalShow: false
  })
}
render() {
return (
  <CarouselFooterDiv>
  <ToursAndExperiencesDiv>
  <CarouselFooterText> 2 Tours & Experiences</CarouselFooterText>
  <CarouselFooterTextTwo> Cultural tours, Walking Tours, Biking Tours & more </CarouselFooterTextTwo>
  <CarouselFooterImage src={walkingPNG}>
  </CarouselFooterImage>
  </ToursAndExperiencesDiv>
  <CarouselTourOptions>
  <CarouselFooterButton>
    See available tour options
  </CarouselFooterButton>
  <WhiteArrowDown src={whiteArrowDown} />
  <Divider />
  </CarouselTourOptions>
  <OverviewDiv>
      <OverviewTop>
      <OverviewText>
              Overview
      </OverviewText>
            <OverviewPar>
              The Winchester Mystery House is the beautiful but bizarre mansion of Sarah Winchester, heiress of the Winchester Repeating Arms fortune. Construction began in 1884, and didn't stop for 38 years. Haunted by the spirits of Winchester rifle victims...
              <OverviewMoreSpan onClick={() => this.showMoreModal()}>
              more
      </OverviewMoreSpan>
            </OverviewPar>
            <MoreModal show={this.state.moreModalShow} handleClose={this.closeMoreModal}>
              <p style={{ fontSize: "15px", textAlign: "left" }}>The Winchester Mystery House is the beautiful but bizarre mansion of Sarah Winchester, heiress of the Winchester Repeating Arms fortune. Construction began in 1884, and didn't stop for 38 years. Haunted by the spirits of Winchester rifle victims, Mrs. Winchester built the Victorian mansion with many odd and mysterious features. The Winchester Mystery House is an architectural wonder and historic landmark in San Jose, CA. Self-guided garden tours are available.
      </p>
            </MoreModal>
            </OverviewTop>
            <OverviewMiddle>
            <OverviewMiddleHours>
            <OverviewFirstClock src={firstClock} />
            <OverviewHoursText>
              Closed Now
            </OverviewHoursText>
            <OverviewHoursText2>
              Hours Today: Closed
            </OverviewHoursText2>
            <OverviewHoursAnchor onClick={this.showHoursModal}>
              See all hours
      </OverviewHoursAnchor>
            <HoursModal handleClose={this.closeHoursModal} show={this.state.hoursModalShow}>
              <h3 style={{
                fontSize: "15px", textAlign: "center", fontWeight: "700",
                fontFamily: "Arial", paddingBottom: "6px", borderBottom: "1px solid #e0e0e0"
              }}>Hours</h3>
              <p style={{ color: "#474747", display: "inline-block", fontSize: "14px", margin: "1px", textAlign: "left" }}>
                Wed - Sun
    </p>
              <p style={{ color: "#474747", display: "inline-block", fontSize: "14px" }}>
                10:00 AM - 4:00 PM
    </p>
            </HoursModal>
            </OverviewMiddleHours>
            <OverviewDurationHours>
            <OverviewDurationClock src={durationClock} />
            <OverviewDurationText>
              Suggested Duration:
            </OverviewDurationText>
            <OverviewHoursText3>
              2-3 hours
            </OverviewHoursText3>
            </OverviewDurationHours>
            <OverviewAddressDiv>
            <OverviewAddress src={mapMarker} />
            <OverviewAddressText>
              Address:
            </OverviewAddressText>
            <OverviewAddressText2>
              525 S Winchester Blvd North San Jose, San Jose, CA 95128-2588 <OverviewMapSpan onClick={this.props.onClick}>Map</OverviewMapSpan>
            </OverviewAddressText2>
            </OverviewAddressDiv>
            <OverviewImproveDiv>
            <OverviewPencil src={pencil} />
            <OverviewImproveSpan>
              Improve this listing
            </OverviewImproveSpan>
            </OverviewImproveDiv>
            </OverviewMiddle>
            </OverviewDiv>
          </CarouselFooterDiv>
);
  }
}

export default ImageCarouselFooter;