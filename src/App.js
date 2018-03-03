import "babel-polyfill";
import React, { Component } from 'react';
import harringtonLogo from './assets/Harrington.svg';
import './App.css';
import { NavigationDrawer } from 'react-md';
//import { Button, SVGIcon, SelectionControl } from 'react-md';
import inboxListItems from './inboxListItems';
import Darts from './darts';
import Tuner from './tuner';
import About from './about';
import Code from './code';
import Resume from './resume';
import Photos from './photos';

class App extends Component {
   constructor() {
      super();
      this.navItems = inboxListItems.map((item) => {
         if (item.divider) {
            return item;
         }

         return {
            ...item,
            onClick: () => this.setPage(item.key, item.primaryText),
         };
      });

      this.state = {
         renderNode: null,
         visible: false,
         key: inboxListItems[0].key,
         page: inboxListItems[0].primaryText
      };
   };

   setPage = (key, page) => {
      this.navItems = this.navItems.map((item) => {
         if (item.divider) {
            return item;
         }

         return { ...item, active: item.key === key };
      });

      this.setState({ key, page });
   };

   render() {
      const { /*visible, page, renderNode,*/ key } = this.state;

      let content = '';
      if (key === 'darts') {
         content = (
            <Darts />
         );
      } else if (key === 'tuner') {
         content = (
            <Tuner />
         );
      } else if (key === 'about') {
         content = (
            <About />
         );
      } else if (key === 'code') {
         content = (
            <Code />
         );
      } else if (key === 'photos') {
         content = (
          <Photos />
         );
      } else {
         content = (
            <Resume />
         );

      }
      const year = new Date().getFullYear();
// <img src={logo} className='App-logo' alt='react-logo' /><img src={angularLogo} className='App-logo Angular-logo' alt='angular-logo' />&nbsp;&nbsp;&nbsp;<img src={nodejsLogo} className='App-logo Nodejs-logo' alt='nodejs-logo' />
// <a href='https://aws.amazon.com' title='Amazon Web Services' target='_blank' rel="noopener noreferrer"><i className="App-logo fab fa-aws"></i></a><a href='https://nodejs.org' title='NodeJS' target='_blank' rel="noopener noreferrer"><i className="App-logo fab fa-node-js"></i></a><a href='https://reactjs.org' title='ReactJS' target='_blank' rel="noopener noreferrer"><i className="App-logo fab fa-react"></i></a><a href='https://angular.io' title='Angular' target='_blank' rel="noopener noreferrer"><i className="App-logo fab fa-angular"></i></a>
     return (
       <NavigationDrawer drawerTitle={<p>Shaun Harrington <img src={harringtonLogo} className='App-logo Harrington-logo' alt='angular-logo' /></p>} toolbarTitle={<div></div>} navItems={this.navItems}>
         <div className="App">
            {content}
            <footer className="page-content">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xs-12">
                        <p className="text-center text-muted gutter-5 remove-bottom">
                           <small>Site bootstrapped with <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebookincubator/create-react-app">'Create React App'</a>.</small>
                        </p>
                        <p className="text-center text-muted remove-top remove-bottom">
                           &copy; {year} Shaun Harrington, All rights reserved.
                        </p>
                     </div>
                  </div>
               </div>
            </footer>
         </div>
      </NavigationDrawer>
      );
   }
}

export default App;
