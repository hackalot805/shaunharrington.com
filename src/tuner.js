import "babel-polyfill";
import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';

class Tuner extends Component {
   render() {
      return (
       <div>
          <div className="container-fluid">
             <div className="row">
                <div className='col-xs-10 col-xs-offset-1'>
                   <div id='tuner-panel' className="panel panel-primary dogs-panel">
                      <div className="panel-heading text-left"><span><i id='icon2' className="fab fa-itunes-note" /></span> Audio Tools</div>
                      <div className="panel-body">
                         <p>
                            I wrote these java based audio tools as a suite of promotional products for a company that wanted something to give away at trade shows.
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
                                                    Generates an audio tone using the frequency or note and octave that you choose.
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

export default Tuner;