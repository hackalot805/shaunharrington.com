import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import styled from 'styled-components';

const NoteToUsers =  styled.div`
   font-size: .8em;
   margin-top: 40px;
`;

const ProductCardTitle = styled(CardTitle)`
   font-variation-settings: "MONO" 0.1, "CASL" 3.9, "wght" 800 , "slnt" -15;
`;

const BtnRow = styled.div`
   margin-bottom: 18px;
`;

const Panel = styled.div`
   margin-top: ${props => props.theme.panelGap};
`;

const DartsPanel = styled(Panel)`
   background-image: url("/images/darts-bg.svg");
   background-repeat: no-repeat;
   background-position: center;
   background-size: 100% auto;
`;

class Apps extends Component {
   render() {
      return (
       <div>
          <div className="container-fluid">
             <div className="row">
                <div className='col-sm-10 offset-sm-1'>
                   <Panel id='tuner-panel' className="card">
                      <div className="card-header primary text-left"><span><i id='icon-audio' className="fab fa-itunes-note" /></span> Audio Tools</div>
                      <div className="card-body">
                         <p className="small">
                            I wrote these JAVA based audio tools as a suite of promotional products for a company that wanted something to give away at trade shows.
                            Shout out to Andrew Shriepbier for the turn on to FFT. (<a href=' https://www.macworld.com/article/1025524/bbtuner.html' target='_blank' rel="noopener noreferrer">press</a>)
                         </p>
                         <div className="container-fluid">
                            <div className="row">
                               <div className='col-sm-12 text-left md-grid'>
                                  <Card className="quickFade delayOne md-cell md-cell--4 md-cell--10-tablet">
                                     <ProductCardTitle title="BB-Tuner" subtitle="Instrument tuner" />
                                     <CardText className='text-center'>
                                        <div className="container-fluid">
                                           <div className="row">
                                              <div className='col-sm-12'>
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
                                     <ProductCardTitle title="BB-Tone" subtitle="Tone generator" />
                                     <CardText className='text-center'>
                                        <div className="container-fluid">
                                           <div className="row">
                                              <div className='col-sm-12'>
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
                                     <ProductCardTitle title="BB-Beat" subtitle="Beat generator" />
                                     <CardText className='text-center'>
                                        <div className="container-fluid">
                                           <div className="row">
                                              <div className='col-sm-12'>
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
                                  <NoteToUsers>
                                     <em><b>NOTE TO MAC USERS:</b></em> Because these are unsigned jar files,
                                     you will need to download and then launch these apps from within Finder.
                                     The Mac OS will block launching if you try to launch them from the browser.
                                  </NoteToUsers>
                               </div>
                            </div>
                         </div>
                      </div>
                   </Panel>
                </div>
             </div>
          </div>

          <div className="container-fluid">
             <div className="row">
                <div className='col-sm-10 offset-sm-1'>
                   <DartsPanel className="card">
                      <div className="card-header primary text-left"><span><i id='icon1' className="fa fa-bullseye" /></span> Cricket Keeper</div>
                      <div className="card-body">
                         <div className="container-fluid">
                            <div className="row">
                               <div className='col-sm-12 quickFade delayOne'>
                                  <p>
                                     I cobbled together a free and simple PHP/HTML based score keeper page for dart players that enjoy the game of Cricket.
                                  </p>
                                  <ul>
                                     <li>Enforces classic Cricket rules.</li>
                                     <li>Designed with tablets in mind.</li>
                                     <li>Auto scales to device or browser window size.</li>
                                     <li>Select the player titles to set the player names, if desired.</li>
                                     <li>Hit any button to score that value.</li>
                                     <li>Use the minus sign if you make a mistake.</li>
                                  </ul>
                                  <p className="text-center gutter-5">
                                     You can use it here, or fork the code base, change the background image and host it on your own web site!
                                  </p>
                               </div>
                            </div>
                            <BtnRow className="row">
                               <div className='col-sm-12 col-md-6 text-center quickFade delayTwo'>
                                  <a href="./darts/index.php" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-large full-width gutter-5'>Use Cricket Keeper <i className="fa fa-bullseye"></i></a>
                               </div>
                               <div className='col-sm-12 col-md-6 text-center quickFade delayTwo'>
                                  <a href="https://github.com/hackalot805/cricketkeeper" target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-large full-width gutter-5'>Fork Cricket Keeper <i className="fab fa-github"></i></a>
                               </div>
                            </BtnRow>
                         </div>
                      </div>
                   </DartsPanel>
                </div>
             </div>
          </div>
       </div>
      );
   }
}

export default Apps;