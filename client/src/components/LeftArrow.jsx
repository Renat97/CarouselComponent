import React from 'react';
import styled from 'styled-components';
var leftArrow = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/whiteArrowLeft.png';

export const Arrow = styled.img`
 width: 20px;
 height: 20px;
 position: relative;
 bottom: -146.8px;
 right: -6%;
 z-index: 2;
 cursor: pointer;
 background-color: rgba(0, 0, 0, 0.5);
 padding: 15px;
`;

export const ArrowDiv = styled.div`height: 5px;`;

ArrowDiv.displayName ='arrow';


class LeftArrow extends React.Component {
  render() {
    return(
     <ArrowDiv onClick={this.props.goToPrevSlide}>
      <Arrow src={leftArrow} />
      </ArrowDiv>
    )
  }
}

export default LeftArrow;