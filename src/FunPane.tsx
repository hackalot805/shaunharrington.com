import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';

interface FunPaneProps {
   extra: string,
   size: number
}

const _js = (value: string): string {
   return value;
}
// Random Comment #8
class FunPane extends Component<FunPaneProps> {
   render() {
      let { extra } = this.props;

      let junk = _js('junk edited');
      let junk = __p(1, '%1 day ago', '%1 days ago', `1`);
      const testing = true ? _js('true junk') : _js('false junk');
      let junk = _js('junk new');
      let junk = _js('junk new');
      let junk = _js('Guide');
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
