import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import harringtonLogo from './assets/Harrington.svg';
import './App.css';
import { NavigationDrawer } from 'react-md';
import { Button } from 'react-md';
import inboxListItems from './inboxListItems';
import Apps from './apps';
import About from './about';
import Code from './code';
import Resume from './resume';
import Photos from './photos';
import Playground from './playground';
import { Modal } from 'react-bootstrap'

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
         page: inboxListItems[0].primaryText,
         show: false,
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
      if (key === 'apps') {
         content = (
          <Apps />
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
      } else if (key === 'resume') {
         content = (
          <Resume />
         );
      } else if (key === 'playground') {
         content = (
          <Playground />
         );
      } else {
         // TODO: 404
      }
      const year = new Date().getFullYear();

      const { show  } = this.state;

      const handleClose = () => {
         this.setState({show: false})
      };

      const handleShow = () => {
         this.setState({show: true})
      };

// <img src={logo} className='App-logo' alt='react-logo' /><img src={angularLogo} className='App-logo Angular-logo' alt='angular-logo' />&nbsp;&nbsp;&nbsp;<img src={nodejsLogo} className='App-logo Nodejs-logo' alt='nodejs-logo' />
// <a href='https://aws.amazon.com' title='Amazon Web Services' target='_blank' rel="noopener noreferrer"><i className="App-logo fab fa-aws"></i></a><a href='https://nodejs.org' title='NodeJS' target='_blank' rel="noopener noreferrer"><i className="App-logo fab fa-node-js"></i></a><a href='https://reactjs.org' title='ReactJS' target='_blank' rel="noopener noreferrer"><i className="App-logo fab fa-react"></i></a><a href='https://angular.io' title='Angular' target='_blank' rel="noopener noreferrer"><i className="App-logo fab fa-angular"></i></a>
      return (
         <NavigationDrawer drawerTitle={<p>Shaun Harrington <img src={harringtonLogo} className='App-logo Harrington-logo' alt='harrington-logo' /></p>} toolbarTitle={<div></div>} navItems={this.navItems}>
            <div className="App">
               {content}
               <footer className="page-content">
                  <div className="container-fluid">
                     <div className="row">
                        <div className="col-sm-12">
                           <p className="text-center text-muted gutter-5 remove-bottom">
                              <Button flat variant="primary" onClick={handleShow}>
                                 Acknowledgments
                              </Button>
                           </p>
                           <p className="text-center text-muted remove-top remove-bottom copyright">
                              &copy; {year} Shaun Harrington, All rights reserved.
                           </p>
                        </div>
                     </div>
                  </div>
               </footer>
            </div>
            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Acknowledgments</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <ul>
                     <li><small>Bootstrapped using <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebookincubator/create-react-app">'Create React App'</a></small></li>
                     <li><small>Text displayed using the <a target="_blank" rel="noopener noreferrer" href="https://www.recursive.design/">'Recursive Sans && Mono'</a> typeface</small></li>
                     <li><small>Material design provided by the <a target="_blank" rel="noopener noreferrer" href="https://react-md.mlaursen.com/">'react-md'</a> package</small></li>
                  </ul>
               </Modal.Body>
               <Modal.Footer>
                  <Button flat variant="secondary" onClick={handleClose}>
                     Close
                  </Button>
               </Modal.Footer>
            </Modal>
         </NavigationDrawer>
      );
   }
}

export default App;
