import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import dozukilogo from './assets/dozuki-logo.png';
import ifixitlogo from './assets/ifixit-logo.png';
import styled from 'styled-components';

const RedIcon = styled.i`
   color: red;
`;

const LogoPanel = styled.div`
   padding: 40px 15px;
`;

const DogsPanel = styled.div`
   margin-top: ${props => props.theme.panelGap};
`;

const SpinningIcon = styled.i`
   animation: App-logo-spin infinite 20s linear;
   height: 60px;
   margin-top: 3px;
   font-size: 3.5em;
   margin-right: 50px;
   color: ${props => props.theme.spinningIconColor};
`;

class About extends Component {
   render() {
      return (
       <div className="about-page">
          <div className="container-fluid text-left">
             <div className="row">
                <div className='col-sm-10 offset-sm-1'>
                   <h1>About Shaun Harrington</h1>
                   <section>
                      <p>
                         My name is Shaun Harrington and I develop software.
                         I'm currently working at <a href="https://www.dozuki.com" target="_blank" rel="noopener noreferrer">Dozuki</a>, an <a href="https://www.ifixit.com" target='_blank' rel="noopener noreferrer">iFixit</a> spin-off located in beautiful <a href="http://slocity.org" title='San Luis Obispo' target='_blank' rel="noopener noreferrer">San Luis Obispo</a>.
                         At Dozuki we build software that helps companies implement a continuous improvement culture to improve their people, their processes, and their communication.
                      </p>
                      <LogoPanel className="container-fluid">
                         <div className="row">
                            <div className='col-sm-12 col-md-6 text-center quickFade delayOne'>
                               <a href="https://www.dozuki.com" target="_blank" rel="noopener noreferrer"><img className='full-width gutter-5' src={dozukilogo} title='Dozuki' alt='Dozuki' /></a>
                            </div>
                            <div className='col-sm-12 col-md-6 text-center quickFade delayTwo'>
                               <a href="http://www.ifixit.com" title="iFixit" target='_blank' rel="noopener noreferrer"><img className='full-width gutter-5' src={ifixitlogo} title='iFixit' alt='iFixit' /></a>
                            </div>
                         </div>
                      </LogoPanel>
                      <p>
                         While I spend most of my time writing classes and functions using PHP and JavaScript,
                         I really dig working with Amazon Web Services, NodeJS, ReactJS and Angular.
                         You can learn more about these very cool technologies by clicking on any of the spinning logos below.
                      </p>
                      <p className="text-center logos">
                         <a href='https://aws.amazon.com' title='Amazon Web Services' target='_blank' rel="noopener noreferrer">
                            <SpinningIcon className="App-logo fab fa-aws"></SpinningIcon>
                         </a>
                         <a href='https://nodejs.org' title='NodeJS' target='_blank' rel="noopener noreferrer">
                            <SpinningIcon className="App-logo fab fa-node-js"></SpinningIcon>
                         </a>
                         <a href='https://reactjs.org' title='ReactJS' target='_blank' rel="noopener noreferrer">
                            <SpinningIcon className="App-logo fab fa-react"></SpinningIcon>
                         </a>
                         <a href='https://angular.io' title='Angular' target='_blank' rel="noopener noreferrer">
                            <SpinningIcon className="App-logo fab fa-angular"></SpinningIcon>
                         </a>
                      </p>
                      <p>
                         I occasionally have some extra cycles.  Feel free to <a href="mailto:me@shaunharrington.com" title='Contact me'>reach out</a> if you need help with a software project, or just want to say 'Hi'.
                      </p>
                      <DogsPanel className="card">
                         <div className="card-header primary">What am I passionate about?</div>
                         <div className="card-body">
                            <p>
                               My <a href="http://www.groverbeads.com" target='_blank' rel="noopener noreferrer">wife</a> and I are crazy for dogs.
                               All sizes and all breeds... we just love them all!
                               If you have it in your <RedIcon className="fa fa-heart"></RedIcon> and a little money to spare, please consider giving to these humane society organizations.
                            </p>
                            <div className="container-fluid">
                               <div className="row">
                                  <div className='col-sm-12 col-md-6 text-center quickFade delayThree'>
                                     <a href="http://www.woodshumanesociety.org" target="_blank" rel="noopener noreferrer"><img className='btn btn-default btn-large full-width gutter-5' src='./woods-logo.png' title='Woods Humane Society' alt='Woods Humane Society' /></a>
                                  </div>
                                  <div className='col-sm-12 col-md-6 text-center quickFade delayFour'>
                                     <a href="https://smvhs.org" title="iFixit" target='_blank' rel="noopener noreferrer"><img className='btn btn-default btn-large full-width gutter-5' src='./smvhs-logo.png' title='Santa Maria Valley Humane Society' alt='Santa Maria Valley Humane Society' /></a>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </DogsPanel>
                   </section>
                </div>
             </div>
          </div>
       </div>
      );
   }
}

export default About;
