import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';

interface FunPaneProps {
   extra: string,
   size: number
}

class FunPane extends Component<FunPaneProps> {
   render() {
      let { extra } = this.props;

      let cssClass = `fun-pane ${extra}`;

      const divStyle = {
         width: `80px`,
         height: `80px`,
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
