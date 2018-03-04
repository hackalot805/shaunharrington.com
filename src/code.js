import "babel-polyfill";
import React, { Component } from 'react';

class Code extends Component {
   render() {
      return (
       <div>
          <div className="container-fluid">
             <div className="row">
                <div className='col-xs-10 col-xs-offset-1'>
                   <div className="panel panel-primary dogs-panel">
                      <div className="panel-heading text-left"><span><i id='icon1' className="fa fa-code" /></span> Code</div>
                      <div className="panel-body">
                         <ul>
                            <li>
                               <a href="https://github.com/hackalot805" target="_blank" rel="noopener noreferrer">My GitHub Profile</a>
                            </li>
                            <li>
                               <a href="https://github.com/hackalot805/cricketkeeper" target="_blank" rel="noopener noreferrer">'Cricket Keeper' Source</a>
                            </li>
                            <li>
                               <a href="https://github.com/hackalot805/bbtuner" target="_blank" rel="noopener noreferrer">'BB-Tuner' Source</a>
                            </li>
                            <li>
                               <a href="https://github.com/hackalot805/bbtone" target="_blank" rel="noopener noreferrer">'BB-Tone' Source</a>
                            </li>
                            <li>
                               <a href="https://github.com/hackalot805/bbbeat" target="_blank" rel="noopener noreferrer">'BB-Beat' Source</a>
                            </li>
                            <li>
                               Calendar code?
                            </li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
      );
   }
}

export default Code;