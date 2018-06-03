import "babel-polyfill";
import React, { Component } from 'react';

class FunPane extends Component {
   render() {
      let { extra } = this.props;

      let cssClass = `fun-pane ${extra}`;

      const divStyle = {
         width: '80px',
         height: '80px',
         border: "solid 2px white",
         borderRadius: "5px",
         opacity: ".5",
      };

      return (
       <div className={cssClass} style={divStyle} />
      );
   }
}

export default FunPane;
