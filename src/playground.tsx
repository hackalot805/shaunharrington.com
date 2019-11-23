import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import FunPanesContainer from './FunPanesContainer';
import './playground.css';
import sc_photo from './assets/sc.jpg';

class Playground extends Component {
   render() {
      return (

       <FunPanesContainer image={sc_photo} size={80} speed={5} />

      );
   }
}

export default Playground;
