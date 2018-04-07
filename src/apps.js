import "babel-polyfill";
import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import './apps.css';

class Apps extends Component {
   render() {
      return (
       <div>
          <div className="container-fluid">
             <div className="row">
                <div className='col-xs-10 col-xs-offset-1'>
                   <div id='tuner-panel' className="panel panel-primary dogs-panel">
                      <div className="panel-heading text-left"><span><i id='icon2' className="fab fa-itunes-note" /></span> Audio Tools</div>
                      <div className="panel-body">
                         <p class="small">
                            I wrote these JAVA based audio tools as a suite of promotional products for a company that wanted something to give away at trade shows.
                            Shout out to Andrew Shriepbier for the turn on to FFT. (<a href=' https://www.macworld.com/article/1025524/bbtuner.html' target='_blank' rel="noopener noreferrer">press</a>)
                         </p>
                         <div className="container-fluid">
                            <div className="row">
                               <div className='col-xs-12 text-left md-grid'>
                                  <Card className="quickFade delayOne md-cell md-cell--4 md-cell--10-tablet">
                                     <CardTitle title="BB-Tuner" subtitle="A instrument tuner" />
                                     <CardText className='text-center'>
                                        <div className="container-fluid">
                                           <div className="row">
                                              <div className='col-xs-12'>
                                                 <p>
                                                    <a href="./bbtuner/bbtuner.jar">Download <i className="fa fa-download"></i></a>
                                                 </p>
                                                 <p>
                                                    Detects dominant frequency from the line-in signal and displays it on screen.
                                                 </p>
                                              </div>
                                           </div>
                                        </div>
                                     </CardText>
                                  </Card>
                                  <Card className="quickFade delayTwo md-cell md-cell--4 md-cell--10-tablet">
                                     <CardTitle title="BB-Tone" subtitle="A simple tone generator" />
                                     <CardText className='text-center'>
                                        <div className="container-fluid">
                                           <div className="row">
                                              <div className='col-xs-12'>
                                                 <p>
                                                    <a href="./bbtuner/bbtone.jar">Download <i className="fa fa-download"></i></a>
                                                 </p>
                                                 <p>
                                                    Generates an audio tone using the frequency, or note and octave that you choose.
                                                 </p>
                                              </div>
                                           </div>
                                        </div>
                                     </CardText>
                                  </Card>
                                  <Card className="quickFade delayThree md-cell md-cell--4 md-cell--10-tablet">
                                     <CardTitle title="BB-Beat" subtitle="A variable beat generator" />
                                     <CardText className='text-center'>
                                        <div className="container-fluid">
                                           <div className="row">
                                              <div className='col-xs-12'>
                                                 <p>
                                                    <a href="./bbtuner/bbbeat.jar">Download <i className="fa fa-download"></i></a>
                                                 </p>
                                                 <p>
                                                    Generates an metronome like beat using the tempo and pattern that you choose.
                                                 </p>
                                              </div>
                                           </div>
                                        </div>
                                     </CardText>
                                  </Card>
                                  <p class="note-to-users">
                                     <em><b>NOTE TO MAC USERS:</b></em> Because these are unsigned jar files,
                                     you will need to download and then launch these apps from within Finder.
                                     The Mac OS will block launching if you try to launch them from the browser.
                                  </p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

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
                                     You can use it here, or fork the code base, change the background image and host it on your own web site!
                                  </p>
                               </div>
                            </div>
                            <div className="row btn-row">
                               <div className='col-xs-12 col-sm-6 text-center quickFade delayTwo'>
                                  <a href="./darts/index.php" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-large full-width gutter-5'>Use Cricket Keeper <i className="fa fa-bullseye"></i></a>
                               </div>
                               <div className='col-xs-12 col-sm-6 text-center quickFade delayTwo'>
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

export default Apps;