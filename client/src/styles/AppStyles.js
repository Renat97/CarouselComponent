import styled from 'styled-components';

export const Component = styled.div`background-color: white; margin-left: auto; margin-right: auto; width: 95%; overflow: auto;`

export const PTag = styled.p`margin-right: 5px; font-weight: bold; margin-left: 8px; @media(max-width: 600px) {
  margin-left: 0px;
}`;
export const PTag2 = styled.p`margin-right: 5px; font-weight: bold; margin-left: 8px;`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
export const Title = styled.h1`
font-size: 32px;
font-weight: 700;
color: #000;
font-family: Arial;
margin-left: 15px;
position: relative;
top: -50px;
left: -.305%;
`;

export const TextHeader = styled.div`display: flex; justify-content: space-between;
height: 30px;`;
export const SpanText =styled.span`position:relative; left: 12px; top: -20px; font-weight: bold;
color: #474747;
display: inline-block;
font-size: 14px;
line-height: 14px;`;
export const H4Text = styled.p`line-height: 14px; display:  flex; justify-content: left; font-size: 14px;
line-height: 18px;
color: #474747;
letter-spacing: .5px; position: relative; left: 16px; top: -36px;
`;
export const Text = styled.p`
margin-left: 4px;
border-bottom: 1px dotted #e0e0e0;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}
`;
export const Heart = styled.img`
 width: 15px; height: 15px; display: flex; justify-content: flex-start;position: relative;
 top: -21.5px; right: -50.45%;
 opacity: 1; font-family: Poppins;
 cursor: pointer;
`;

export const IconShare = styled.img`
width: 20px; height: 20px; position: relative;
 top: -30px; right: -87%;
 opacity: 1;
 background-size: cover;
 cursor: pointer;
`;

export const Text2 = styled.p`
font-size: 14px;
line-height: 18px;
border-bottom: 1px dotted #e0e0e0;
font-weight:300;
color: #474747;
letter-spacing: .5px;
position: relative;
left: -49.5%;
top: -10px;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}`
;
export const Text3 = styled.p` display: flex;
 justify-content: flex-start;
font-size: 14px;
line-height: 18px;
font-weight:300;
border-bottom: 1px dotted #e0e0e0;
color: #474747;
letter-spacing: .5px;
position: relative;
left: -47%;
top: -10px;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}`
;
export const CarouselFooter = styled.div`display: flex; flex-direction: column; align-items: center;`;

export const CarouselFooterText = styled.h1`font-family: Poppins; font-size: 16px; color: #2c2c2c;  text-align: center; margin-bottom: 10px; position: relative; top: -10px;`;
export const CarouselFooterTextTwo = styled.h4`font-family: arial; font-size: 12px; color: #2c2c2c; font-weight: lighter; text-align: center;
margin-bottom: 10px; position: relative; top: -25px; right: -42%; width: 400px; @media(max-width: 1600px) {
  right:-39%;
}
@media(max-width: 1400px) {
  right:-37%;
}
@media(max-width: 1300px) {
  right:-33%;
}
@media(max-width: 1200px) {
  right:-32%;
}
@media(max-width: 1100px) {
  right:-31%;
}
@media(max-width: 1000px) {
  right:-30%;
}
@media(max-width: 900px) {
  right:-31%;
}
@media(max-width: 850px) {
  right:-29%;
}
@media(max-width: 800px) {
  right:-29%;
}
@media(max-width: 700px) {
  right:-26%;
}
@media(max-width: 600px) {
  right:-23%;
}
@media(max-width: 550px) {
  right:-18%;
}
`;
export const CarouselFooterImage = styled.img`height: 24px; width: 24px; position: relative; top: -70px; left: 44%;@media(max-width: 1750px) {
  left:41%;
} @media(max-width: 1600px) {
  left:41%;
}
@media(max-width: 1800px) {
  left:42.5%;
}
@media(max-width: 1500px) {
  left:42%;
}
@media(max-width: 1400px) {
  left:40%;
}
@media(max-width: 1200px) {
  left:40%;
}
@media(max-width: 1100px) {
  left:38%;
}
@media(max-width: 1011px) {
  left: 38%;
}
@media(max-width: 900px) {
  left:33%;
}
@media(max-width: 700px) {
  left:32%;
}
@media(max-width: 650px) {
  left:30%;
}
@media(max-width: 600px) {
  left:26%;
}
`;

export const CarouselFooterButton = styled.button`border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: block;
font-size: 14px;
margin: 4px 2px;
cursor: pointer;
background-color: black;
font-style: normal;
font-stretch: normal;
letter-spacing: normal;
font-weight: 700;
width:99%;
transition-duration: 0.3s;
position:relative;
top: -20px;
&:hover {
  background-color: #2c2c2c;
}
`;
export const WhiteArrowDown = styled.img`height:20px; width: 18px; position: relative; top: -57px; right: -90%;`

export const Divider = styled.hr`height: 1px; background-color: #ccc;
border: none; position:relative; top: -45px;`;
export const OverviewDiv = styled.div`display:flex; flex-direction:column;
`;
export const OverviewText = styled.h4`font-size:16px; font-family: poppins; color: #474747; font-weight:550; margin: 5px 0 0 15px;
`;
export const OverviewPar = styled.p`font-size:14px; font-family: poppins;
color: #474747; font-weight:250; margin: 5px 0 0 15px;
`
export const OverviewMoreSpan = styled.a`
font-size:14px;
font-family: poppins;
color: #474747; font-weight:250;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);
width: 3.5%;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}
`;

export const OverviewFirstClock = styled.img`height:20px; width: 20px; margin: 5px 0 0 15px; `

export const OverviewHoursText = styled.p`color: #f73; font-weight: 700;
width:400px;
line-height:20px;
font-size: 14px;
font-family: poppins;
margin: 5px 0 0 15px;
position:relative;
top: -24px;
left: 25px;
`;

export const OverviewHoursText2 = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-family: poppins;
margin: 0px 0px 0px 40px;
position: relative;
top: -24px;
`;

export const OverviewHoursAnchor = styled.a`color: #069; line-height:20px;
font-size: 14px;
font-family: poppins;
cursor: pointer;
margin: 0px 0px 0px 40px;
position: relative;
top: -25px;
width:100px;
`;

export const OverviewDurationClock = styled.img`height:22px; width: 22px; margin: 0px 4px 0px 15px;`

export const OverviewDurationText = styled.p`color: #474747;
font-size: 14px;
font-weight: 600;
font-family: poppins;
position: relative;
top: -10px;
`;

export const OverviewHoursText3 = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-family: poppins;
margin-left: 5px;
position: relative;
top: -10.5px;
`;

export const OverviewAddress = styled.img`height:20px; width: 20px;`

export const OverviewAddressText = styled.p`color: #474747;
font-size: 14px;
font-weight: 600;
font-family: poppins;
margin: 0px 0px 0px 2px;
`;

export const OverviewAddressText2 = styled.p`color: #474747;
font-size: 14px;
font-family: poppins;
margin: 0px 0px 0px 5px;
`;

export const OverviewMapSpan = styled.a`
font-size:14px;
font-family: poppins;
color: #474747; font-weight:250;
cursor: pointer;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);
width: 3%;
height: 15px;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}
`;

export const OverviewImproveSpan = styled.p`
font-size:14px;
font-family: poppins;
color: #474747; font-weight:250;
cursor: pointer;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);
margin: 0px 0px 0px 4px;
height: 15px;
&:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}
@media(max-width: 550px) {
  position: relative;
  bottom: -20px;
}
`;

export const OverviewPencil = styled.img`height:20px; width: 20px; margin-left: 13px; @media(max-width: 550px) {
  position: relative;
  bottom: -20px;
}`

export const CarouselPhotos = styled.img`height:85px; width: 85px; position: relative;
top: -703px;
right: -38px;
background-color: #faf1ed;
`
export const CarouselPhotosButton = styled.button`
position: relative;
top: -20px;
min-width: 32px;
height: 32px;
border-radius: 16px;
padding: 10px 25px;
color: white;
font-weight: 800;
background-color: rgba(0, 0, 0, 0.5);
cursor: pointer;
border: 2px solid rgba(0,0,0,0);
text-align: right;
font-family: Arial;
font-weight: 400;
font-stretch: normal;
font-size: 12px;
transition-duration: 0.3s;
&:hover {
  background-color: rgba(0, 0, 0.4, 0.75);
}
`
export const TravelersChoice = styled.img`
position: relative;
height:85px;
width: 85px;
background-color: #faf1ed;
&:hover {
    border: none:
}
`
export const TravelersPhotoLogo = styled.img`height:20px; width: 20px; position: relative;
top: -145px;
left: -123px;
z-index: 99;
`
export const ContainerDivRatingAndReviews = styled.div`display: flex; flex-direction: row;
align-items: flex-start;
`;
export const ContainerDivHeaderText = styled.div`
`;

export const IconContainerDIv = styled.div`display: flex; `;

export const Image0 = styled.img`width: 221px; height: 140px; margin: 20px 20px 0px 20px; &:hover {
  opacity: 0.8;
}
cursor: pointer;
`

export const CloseIcon = styled.a`display:block;
  box-sizing:border-box;
  width:15px;
  height:20px;
  border-radius: 100%;
  background: -webkit-linear-gradient(-45deg, transparent 0%, transparent 46%, #474747 46%, #474747 56%,transparent 56%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, #474747 46%, #474747 56%,transparent 56%, transparent 100%);
  background-color:transparent;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  position: absolute;
  top: 1%;
  right: 5%;
  cursor: pointer;
`;

export const CloseIcon2 = styled.a`display:block;
  box-sizing:border-box;
  width:15px;
  height:20px;
  border-radius: 100%;
  background: -webkit-linear-gradient(-45deg, transparent 0%, transparent 46%, #474747 46%, #474747 56%,transparent 56%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, #474747 46%, #474747 56%,transparent 56%, transparent 100%);
  background-color:transparent;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  position: absolute;
  top: 12px;
  right: 3%;
  cursor: pointer;
`;


export const TextDivs = styled.div`display: flex; flex-direction: column; justify-content: flex-start; position: relative; top: -45px;`;

export const TextDiv1 = styled.div`display: flex; flex-direction:row; margin-left: 1px; color: #474747; font-size: 14px;`;

export const TextDiv2 = styled.div`display: flex; flex-direction: row; margin-left: 3.5%; position: relative; top: -25px; color: #474747; font-size: 14px;`;

export const Container = styled.div`background-color: white;
width: 70%;
height: 80%;
z-index: 99;
color: blue;`;

export const textDiv1Text = styled.p`letterSpacing: -.5px;  display:inline;`

export const Header = styled.div``;

export const ContainerDiv = styled.div`display: flex; flex-direction: column; align-items: flex-start;
justify-content: center;
height: 10%;
`;

export const TextArea = styled.div``;

export const EmailLogo = styled.div`
background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F3335695%2Femail_letter_mail_message_minimalist_ui_ux_icon&psig=AOvVaw0UtD_rcLjRm_8HckSJHXqr&ust=1606695892225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjj4eG-pu0CFQAAAAAdAAAAABAD');
width: 200px;
height: 200px;
`;

export const CarouselDiv = styled.div`overflow:auto;`;

export const TravelersDiv = styled.div``;

export const ToursAndExperiencesDiv = styled.div`border-color:red; height:50px;`;

export const CarouselFooterDiv = styled.div`flex: display; flex-direction: column;`;

export const CarouselTourOptions = styled.div`height:45px;`;

export const OverviewTop = styled.div`height: 65px; overflow:auto;`;

export const OverviewMiddle = styled.div`height`;

export const OverviewMiddleHours = styled.div`display: flex; flex-direction: column; height: 70px;`;

export const OverviewDurationHours = styled.div`display: flex; flex-direction: row; height: 30px;`;

export const OverviewAddressDiv = styled.div`display: flex; flex-direction: row; height: 20px; margin-left: 15px;`;

export const OverviewImproveDiv = styled.div`display: flex; flex-direction: row;  margin:0; `;





