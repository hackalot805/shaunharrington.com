import "babel-polyfill";
import React, { Component } from 'react';
import FunPane from './FunPane';
import PropTypes from 'prop-types';

/*
Todo: max and mins for the args.
Todo: prop types and defaults for the args
 */

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
   image: PropTypes.string.isRequired,
   size: PropTypes.number,
   paneCount: PropTypes.number,
   refreshSpeed: PropTypes.number,
   speed: PropTypes.number,
   primary: PropTypes.string,
   secondary: PropTypes.string,
   borderWidth: PropTypes.number,
   borderRadius: PropTypes.number,
   borderColor: PropTypes.string,
};

FunPanesContainer.defaultProps = {
   size: 140,
   paneCount: 70,
   refreshSpeed: 2,
   speed: 1.4,
   primary: "red",
   secondary: "blue",
   borderWidth: 2,
   borderRadius: 1,
   borderColor: "gray",
};

export default FunPanesContainer;
