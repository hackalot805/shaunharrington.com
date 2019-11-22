import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import Playground from './playground';

class App extends Component {
   render() {
      return (
          <div className="App">
             <Playground />
          </div>
      );
   }
}

export default App;
