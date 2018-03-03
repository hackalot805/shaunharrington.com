import "babel-polyfill";
import React, { Component } from 'react';
import sc_photo from './assets/sc.jpg';
import sb_photo from './assets/sb.jpg';
import './about.css';
import { Carousel } from 'react-bootstrap';
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
                <div className='col-xs-10  col-xs-offset-1 '>
                   <h1>Rides</h1>
                   <section>
                      <p>
                         Once upon a time I was crazy for slammed hot rod v-twins...
                      </p>

                      <Carousel>
                         <Carousel.Item>
                            <img alt="900x500" src={sc_photo} />
                            <Carousel.Caption>
                               <h3>First slide label</h3>
                               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item>
                            <img alt="900x500" src={sb_photo} />
                            <Carousel.Caption>
                               <h3>Second slide label</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item>
                            <img  alt="900x500" src={sc_photo} />
                            <Carousel.Caption>
                               <h3>Third slide label</h3>
                               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                         </Carousel.Item>
                      </Carousel>

                   </section>
                </div>
             </div>
          </div>
       </div>
      );
   }
}

export default Photos;