import "babel-polyfill";
import React, { Component } from 'react';

class FunPane extends Component {
   render() {
      let { extra, size, borderColor, borderWidth, borderRadius, speed, color } = this.props;

      let cssClass = `fun-pane ${extra}`;
      const divStyle = {
         width: `${size}px`,
         height: `${size}px`,
         border: `solid ${borderWidth}px ${borderColor}`,
         borderRadius: `${borderRadius}px`,
         opacity: "1.0",
         animationDuration: `${speed}s`,
         backgroundColor: color,
      };

      return (
         <div className={cssClass} style={divStyle} />
      );
   }
}

export default FunPane;
