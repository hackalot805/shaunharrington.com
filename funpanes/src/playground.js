import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';

import FunPanesContainer from './FunPanesContainer';
import './playground.css';
//import sc_photo from './assets/sc.jpg';
import buddy from './assets/buddy.jpg';

function parse_query_string(query) {
   var vars = query.split("&");
   var query_string = {};
   for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === "undefined") {
         query_string[key] = decodeURIComponent(value);
         // If second entry with this name
      } else if (typeof query_string[key] === "string") {
         var arr = [query_string[key], decodeURIComponent(value)];
         query_string[key] = arr;
         // If third or later entry with this name
      } else {
         query_string[key].push(decodeURIComponent(value));
      }
   }
   return query_string;
}

class Playground extends Component {
   render() {
      const query = window.location.search.substring(1);
      const parsed_qs = parse_query_string(query);
      const params = {};

      let toTitleCase = function (str) {
         str = str.toLowerCase().split('_');
         for (let i = 1; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
         }
         return str.join('');
      };

      const floatParams = [
         'speed',
      ];
      const numberParams = [
         'size',
         'refreshSpeed',
         'paneCount',
         'borderRadius',
         'borderWidth'
      ];
      Object.keys(parsed_qs).map((key) => {
         console.log("numberParams", toTitleCase(key), numberParams.indexOf(toTitleCase(key)));
         if (numberParams.indexOf(toTitleCase(key)) >= 0) {
            return params[toTitleCase(key)] = parseInt(parsed_qs[key]);
         } else if (floatParams.indexOf(toTitleCase(key)) >= 0) {
            return params[toTitleCase(key)] = parseFloat(parsed_qs[key]);
         }
         return params[toTitleCase(key)] = parsed_qs[key];
      });

      params.image = buddy;
      return (
         <FunPanesContainer {...params} />
      );
   }
}

export default Playground;
