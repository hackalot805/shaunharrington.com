import "babel-polyfill";
import React, { Component } from 'react';
import './darts.css';

class Darts extends Component {
   render() {
      return (
       <div>
          <div className="container-fluid">
             <div className="row">
                <div className='col-xs-10 col-xs-offset-1'>
                   <div className="panel panel-primary darts-panel">
                      <div className="panel-heading text-left"><span><i id='icon1' className="fa fa-bullseye" /></span> Cricket Keeper</div>
                      <div className="panel-body">
                         <div className="container-fluid">
                            <div className="row">
                               <div className='col-xs-12 quickFade delayOne'>
                                  <p>
                                     I cobbled together a free and simple PHP/HTML based score keeper page for dart players that enjoy the game of Cricket.
                                  </p>
                                  <ul>
                                     <li>Enforces classic Cricket rules.</li>
                                     <li>Designed with tablets in mind</li>
                                     <li>Auto scales to device or browser window size.</li>
                                     <li>Select the player titles to set the player names, if desired.</li>
                                     <li>Hit any button to score that value.</li>
                                     <li>Use the minus sign if you make a mistake.</li>
                                  </ul>
                                  <p class="text-center gutter-5">
                                     You can use it here, or fork the code base and host it on your own server.
                                  </p>
                               </div>
                            </div>
                            <div className="row btn-row">
                               <div className='col-xs-12 col-sm-6 text-center quickFade delayTwo'>
                                  <a href="./darts/index.php" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-large full-width gutter-5'>Use Cricket Keeper <i className="fa fa-bullseye"></i></a>
                               </div>
                               <div className='col-xs-12 col-sm-6 text-center quickFade delayThree'>
                                  <a href="https://github.com/hackalot805/cricketkeeper" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-large full-width gutter-5'>Fork Cricket Keeper <i className="fab fa-github"></i></a>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
      );
   }
}

export default Darts;