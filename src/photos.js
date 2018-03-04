import "babel-polyfill";
import React, { Component } from 'react';
import sc_photo from './assets/sc.jpg';
import sc2_photo from './assets/sc2.jpg';
import sc3_photo from './assets/sc3.jpg';
import sc4_photo from './assets/sc4.jpg';
import sb_photo from './assets/sb.jpg';
import sb2_photo from './assets/sb2.jpg';
import sb3_photo from './assets/sb3.jpg';
import buddy_photo from './assets/buddy.jpg';
import './about.css';
import { Carousel } from 'react-bootstrap';
import './photos.css';

/*
                      <div className="container-fluid">
                         <div className="row">
                            <div className='col-xs-12 col-sm-6 text-center quickFade delayOne'>
                               <img src={sc_photo} />
                            </div>
                            <div className='col-xs-12 col-sm-6 text-center quickFade delayTwo'>
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
                <div className='col-xs-12'>
                   <Carousel>
                      <Carousel.Item>
                         <img alt="900x500" src={sc_photo} />
                         <Carousel.Caption>
                            <h3>SOULCRUSHER</h3>
                            <p>My daily ride for about a decade.</p>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <img alt="900x500" src={sc2_photo} />
                         <Carousel.Caption>
                            <h3>SOULCRUSHER</h3>
                            <p>With the original tank and frontend.</p>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <img alt="900x500" src={sc3_photo} />
                         <Carousel.Caption>
                            <h3>SOULCRUSHER</h3>
                            <p>Sturgis style freedom.</p>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <img alt="900x500" src={sc4_photo} />
                         <Carousel.Caption>
                            <h3>SOULCRUSHER</h3>
                            <p>Arizona bar hopping.</p>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <img  alt="900x500" src={sb_photo} />
                         <Carousel.Caption>
                            <h3>SUPERBEAST</h3>
                            <p>Bit of a shop project.</p>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <img alt="900x500" src={sb2_photo} />
                         <Carousel.Caption>
                            <h3>SUPERBEAST</h3>
                            <p>Sick body work with molded taillights, and even a retracting license plate.</p>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <img alt="900x500" src={sb3_photo} />
                         <Carousel.Caption>
                            <h3>SUPERBEAST</h3>
                            <p>Why do people keep looking at me?</p>
                         </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                         <img alt="900x500" src={buddy_photo} />
                         <Carousel.Caption>
                            <h3>BUDDY</h3>
                            <p>My dog is a nut case!</p>
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