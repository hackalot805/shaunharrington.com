import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import { Button, NavigationDrawer } from 'react-md';
import { Modal } from 'react-bootstrap';
import InboxListItems from './inboxListItems';
import Apps from './apps';
import About from './about';
import Code from './code';
import Resume from './resume';
import Photos from './photos';
import Playground from './playground';
import styled, { ThemeProvider } from 'styled-components';
import harringtonLogo from './assets/Harrington.svg';

import './App.css';

const theme = {
   spinningIconColor: "#8bc34a",
   panelGap: "50px",
};

const AppLeft = styled.div`
   text-align: left;
`;

const AppLogo = styled.img`
   font-size: 3.5em;
   animation: none;
   height: 40px;
   margin-top: 0;
   margin-left: 0;
   margin-right: ${props => props.theme.panelGap};
`;

const Copyright = styled.p`
   font-size: .8em;
`;

interface NavItemProps {
   key: string,
   primaryText: string,
   leftIcon: JSX.Element,
   active?: boolean,
}

interface AppProps {
}

interface AppState {
   key: string,
   page: string,
   visible: boolean,
   show: boolean,
}

class App extends Component<AppProps, AppState> {
   navItems: NavItemProps[] = [];

   constructor(props: AppProps) {
      super(props);

      this.navItems = InboxListItems.map((item) => {
         return {
            ...item,
            onClick: () => this.setPage(item.key, item.primaryText),
         };
      });

      this.state = {
         visible: false,
         key: InboxListItems[0].key,
         page: InboxListItems[0].primaryText,
         show: false,
      };
   };

   setPage = (key: string, page: string) => {
      window.scrollTo(0,0);
      this.navItems = this.navItems.map((item) => {
         return { ...item, active: item.key === key };
      });

      this.setState({ key, page });
   };

   render() {
      const { show, key } = this.state;

      let content: JSX.Element | null = null;
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
      }

      const handleClose = () => {
         this.setState({show: false})
      };

      const handleShow = () => {
         this.setState({show: true})
      };

      const year = new Date().getFullYear();

      return (
         <ThemeProvider theme={theme}>
            <NavigationDrawer drawerTitle={<p>Shaun Harrington <AppLogo src={harringtonLogo} alt='harrington-logo' /></p>} toolbarTitle={<div></div>} navItems={this.navItems}>
               <AppLeft>
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
                              <Copyright className="text-center text-muted remove-top remove-bottom">
                                 &copy; {year} Shaun Harrington, All rights reserved.
                              </Copyright>
                           </div>
                        </div>
                     </div>
                  </footer>
               </AppLeft>
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
         </ThemeProvider>
      );
   }
}

export default App;
