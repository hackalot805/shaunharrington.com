import "babel-polyfill";
import React, { Component } from 'react';
import FunPane from './FunPane';

class FunPanesContainer extends Component {
   constructor(props) {
      super(props);

      this.getPanes = this.getPanes.bind(this);
      this.state = {
         panes: [],
      };
   }

   componentDidMount() {
      this.getPanes();
   }

   getPanes() {
      const { paneSize } = this.props;

      let panes = [];
      for (let n = 0; n < 400; n++) {
         const randVal = Math.random();
         let cssClass = '';
         if (parseInt(n*randVal)%2) {
            cssClass = "fun-pane2";
         }
         if (parseInt(n*randVal)%3) {
            cssClass = "fun-pane3";
         }
         if (parseInt(n*randVal)%2) {
            cssClass += " fun-pane4";
         }
         panes.push (
          <FunPane key={n} extra={cssClass} size={paneSize} />
         );
      }
      this.setState({
        panes: panes
      });
      setTimeout(this.getPanes, 7000)
   }

   render() {
      const { image, speed } = this.props;
      const { panes } = this.state;

      const style = {
         backgroundImage: `url(${image})`,
      };

      return (
       <div className="fun-panes-container" style={style}>
          {panes}
       </div>
      );
   }
}

export default FunPanesContainer;
