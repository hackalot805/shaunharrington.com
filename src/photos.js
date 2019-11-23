import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import sc_photo from './assets/sc.jpg';
import sc2_photo from './assets/sc2.jpg';
import sc3_photo from './assets/sc3.jpg';
import sc4_photo from './assets/sc4.jpg';
import sb_photo from './assets/sb.jpg';
import sb2_photo from './assets/sb2.jpg';
import sb3_photo from './assets/sb3.jpg';
import sb4_photo from './assets/sb4.jpg';
import buddy_photo from './assets/buddy.jpg';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

import './photos.css';

const CarouselItemImg = styled.img`
   width: 100%;
`;

const CarouselItemP = styled.p`
   color: white;
`;

const CarouselItemH3 = styled.p`
   color: white;
`;

/*
                      <div className="container-fluid">
                         <div className="row">
                            <div className='col-sm-12 col-sm-6 text-center quickFade delayOne'>
                               <img src={sc_photo} />
                            </div>
                            <div className='col-sm-12 col-sm-6 text-center quickFade delayTwo'>
                            </div>
                         </div>
                      </div>

*/
class Photos extends Component {
   render() {
      return (
       <div>
          <div className="container-fluid text-left">
             <div className="row">
                <div className='col-sm-12 photos-wrapper'>
                   <Carousel>
                      <Carousel.Item>
                         <CarouselItemImg alt="900x500" src={sc_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>SOULCRUSHER</CarouselItemH3>
                            <CarouselItemP>My daily ride for about a decade.</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <CarouselItemImg alt="900x500" src={sc2_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>SOULCRUSHER</CarouselItemH3>
                            <CarouselItemP>With the original tank and frontend.</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <CarouselItemImg alt="900x500" src={sc3_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>SOULCRUSHER</CarouselItemH3>
                            <CarouselItemP>Sturgis style freedom.</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <CarouselItemImg alt="900x500" src={sc4_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>SOULCRUSHER</CarouselItemH3>
                            <CarouselItemP>Arizona bar hopping.</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <CarouselItemImg  alt="900x500" src={sb_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>SUPERBEAST</CarouselItemH3>
                            <CarouselItemP>Bit of a shop project.</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <CarouselItemImg alt="900x500" src={sb2_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>SUPERBEAST</CarouselItemH3>
                            <CarouselItemP>Sick body work with molded taillights, and even a retracting license plate.</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <CarouselItemImg alt="900x500" src={sb3_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>SUPERBEAST</CarouselItemH3>
                            <CarouselItemP>Why do people keep looking at me?</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <CarouselItemImg alt="900x500" src={sb4_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>SUPERBEAST</CarouselItemH3>
                            <CarouselItemP>I'm a tractor.</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <CarouselItemImg alt="900x500" src={buddy_photo} />
                         <Carousel.Caption>
                            <CarouselItemH3>BUDDY</CarouselItemH3>
                            <CarouselItemP>My dog is a nut case!</CarouselItemP>
                         </Carousel.Caption>
                      </Carousel.Item>
                   </Carousel>
                </div>
             </div>
          </div>
       </div>
      );
   }
}

export default Photos;