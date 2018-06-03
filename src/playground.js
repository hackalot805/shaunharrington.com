import "babel-polyfill";
import React, { Component } from 'react';
import FunPanesContainer from './FunPanesContainer';
import './playground.css';
import sc_photo from './assets/sc.jpg';

class Playground extends Component {
   render() {
      return (

       <FunPanesContainer image={sc_photo} speed='5' />

      );
   }
}

export default Playground;
