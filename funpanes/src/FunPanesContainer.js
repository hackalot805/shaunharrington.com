import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import FunPane from './FunPane';
import PropTypes from 'prop-types';

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
      const { paneCount, refreshSpeed, speed, primary, secondary, ...props } = this.props;

      // Todo: max and min for the args.
      // paneCount, 1 - 1000;
      // refreshSpeed, 1 - 100;
      // speed, 0.1 - 10.0;
      // size, 10 - 500;
      // borderRadius, 0 - 50;
      // borderWidth, 0 - 50;

      // TODO make color a #xxxxxx

      let panes = [];
      for (let nDex = 0; nDex < paneCount; nDex++) {
         let speedOut = speed;
         let colorOut = primary;
         const randVal = Math.random();
         let cssClass = '';

         if (parseInt(nDex*randVal, 10)%2) {
            cssClass = "fun-pane2";
         }
         if (parseInt(nDex*randVal, 10)%3) {
            speedOut = parseInt(speedOut + 2, 10);
         }
         if (parseInt(nDex*randVal, 10)%2) {
            colorOut = secondary;
            speedOut = parseInt(speedOut + 4, 10);
         }

         panes.push (
          <FunPane key={nDex} extra={cssClass} speed={speedOut} {...props} color={colorOut} />
         );
      }
      this.setState({
        panes: panes
      });
      setTimeout(this.getPanes, refreshSpeed * 2000);
   }

   render() {
      const { image } = this.props;
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

FunPanesContainer.propTypes = {
   borderColor: PropTypes.string,
   borderRadius: PropTypes.number,
   borderWidth: PropTypes.number,
   image: PropTypes.string.isRequired,
   paneCount: PropTypes.number,
   primary: PropTypes.string,
   refreshSpeed: PropTypes.number,
   secondary: PropTypes.string,
   size: PropTypes.number,
   speed: PropTypes.number,
};

FunPanesContainer.defaultProps = {
   borderColor: "gray",
   borderRadius: 1,
   borderWidth: 2,
   paneCount: 70,
   primary: "red",
   refreshSpeed: 2,
   secondary: "blue",
   size: 140,
   speed: 1.4,
};

export default FunPanesContainer;
