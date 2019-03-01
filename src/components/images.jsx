import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Images extends Component{
  constructor(props, context) {
   super(props, context);

   this.handleSelect = this.handleSelect.bind(this);

   this.state = {
     index: 0,
     direction: null,
   };
 }

 handleSelect(selectedIndex, e) {
   this.setState({
     index: selectedIndex,
     direction: e.direction,
   });
 }

 render() {
   const { index, direction } = this.state;

   return (
     <div className="landingBackground">
     <Carousel
       activeIndex={index}
       direction={direction}
       onSelect={this.handleSelect}
     >
       <Carousel.Item>
         <img
           className=" d-block img-fluid DisplayImage"
           src={require('../img/designs/CruiseControlLogo.jpg')}
           alt="Cruise Control Logo"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block img-fluid DisplayImage"
           src={require('../img/designs/Lion1.jpg')}
           alt="Lion"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className=" d-block img-fluid DisplayImage"
           src={require('../img/designs/PortalAppLandingPage.jpg')}
           alt="Portal App Landing Page"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className=" d-block img-fluid DisplayImage"
           src={require('../img/designs/KMFacebook2.jpg')}
           alt="KM Facebook2"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className=" d-block img-fluid DisplayImage"
           src={require('../img/designs/Lion2.jpg')}
           alt="Lion2"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className=" d-block img-fluid DisplayImage"
           src={require('../img/designs/CruiseControlLogo2.jpg')}
           alt="Cruise Control Logo 2"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className=" d-block img-fluid DisplayImage"
           src={require('../img/designs/ShopCriticsInfo.jpg')}
           alt="Shop Critics Info"
         />
       </Carousel.Item>
     </Carousel>
   </div>
   );
 }
}
