import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import { ExpansionList, ExpansionPanel } from 'react-md';
import styled from 'styled-components';

const DashboardSection = styled.section`
   background: inherit;
   padding: 0 10px 17px;
   margin-bottom: 20px;
   border: none;
`;

const ListContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

const ListItem = styled.div`
   flex-grow: 0;
   width: 120px;
   padding: 5px 5px;
   cursor: pointer;
   border-radius: 5px;
   color: #0d3349;
`;

const ListItemButton = styled.button`
   min-height: 100px;
   margin-top: 10px;
   margin-right: 5px;
   background-color: #f2f2f2;
   padding: 0;
   box-shadow: 2px 2px 3px gray;
   min-width: 100px;
   border-radius: 5px;
   overflow: hidden;
   text-align: center;

   :focus {
      outline: none !important;
   }
   
   :hover .list-item-image {
      transform: scale(0.9);
   }

   :focus .list-item-image {
      transform: scale(0.9);
   }
   
`;

const ListItemTitle = styled.div`
   overflow: hidden;
   height: 35px;
   background-color: transparent;
   vertical-align: middle;
`;

const ListItemImage = styled.div`
   -webkit-transition: all .15s ease-in-out;
   transition: all .15s ease-in-out;
   transform: scale(.8);
   width: 100%;
   max-width: 110px;
   max-height: 55px;
   /* text-shadow: 1px 1px 1px @shadow; */
   font-size: 2.7em;
   color: black;
`;

const Card = styled.div`
   margin-top: ${props => props.theme.panelGap};
`;

interface ButtonProps {
   title: string,
   icon: string,
   url: string,
}

type mySomething = {
   [key: string]: ButtonProps
};

interface CustomFooterProps {
   codePenUrl: string
}

const CustomFooter = (props: CustomFooterProps) => (
    <footer style={{ padding: 24 }}>
       <a href={props.codePenUrl} target="_blank" rel="noopener noreferrer">CodePen</a>
    </footer>
);

class Code extends Component {

   // This is for calculating Easter up to the year 2099...
   getEaster(nCurrentYear: number): object {
      let easterMonth = 0;
      let easterDay = 0;
      const base = 255 - (11 * (nCurrentYear % 19));
      let baseDay = ((base - 21) % 30) + 21;
      if (baseDay > 48)
         baseDay -= 1;
      const nE = (nCurrentYear + (nCurrentYear / 4) + baseDay + 1 ) % 7;
      const nQ = Math.ceil(baseDay + 7 - nE);
      if (nQ <= 31) {
         easterMonth = 3;
         easterDay = nQ;
      } else {
         easterMonth = 4;
         easterDay = nQ - 31;
      }

      return {month: easterMonth, day: easterDay};
   }

   handleClick = (url: string): void => {
      window.open(url);
   };

   render() {
/*
      const years = Array.from({length: 50}, (v, k) => k + 2018);
      const easterString = years.map((year) => {
         const easter = this.getEaster(year);
         return (
          <span key={year}>
             {easter.month}-{easter.day}-{year},&nbsp;
          </span>
         );
      });
*/
      const buttons: mySomething = {
         'github-cricket': {title: 'Cricket', icon: 'fa fa-bullseye', url: 'https://github.com/hackalot805/cricketkeeper'},
         'github-bbtuner': {title: 'BB-Tuner', icon: 'fab fa-itunes-note', url: 'https://github.com/hackalot805/bbtuner'},
         'github-bbtone': {title: 'BB-Tone', icon: 'fa fa-volume-up', url: 'https://github.com/hackalot805/bbtone'},
         'github-bbbeat': {title: 'BB-Beat', icon: 'fa fa-headphones', url: 'https://github.com/hackalot805/bbbeat'},
      };

      const buttonItems =
      Object.keys(buttons).map((key) => {
         const button = buttons[key];
         return (
          <ListItem key={button.title}>
             <ListItemButton className='btn btn-default btn-large list-item-button' onClick={() => this.handleClick(button.url)}>
                <ListItemTitle title={button.title}>
                   {button.title}
                </ListItemTitle>
                <ListItemImage className='list-item-image'>
                   <i className={button.icon} />
                </ListItemImage>
             </ListItemButton>
          </ListItem>
         );
      });

      return (
       <div className='code-page'>
          <div className="container-fluid">
             <div className="row">
                <div className='col-sm-10 offset-sm-1'>
                   <Card className="card">
                      <div className="card-header primary text-left"><span><i id='icon1' className="fa fa-code" /></span> Code</div>
                      <div className="card-body">
                         <p>
                            Most of the interesting code that I have produced is proprietary, and I can't share it. This is what's left...
                         </p>
                         <DashboardSection>
                            <ListContainer>
                               {buttonItems}
                            </ListContainer>
                            <p className="text-center text-muted small">
                               (<em>Click on a button to visit the GitHub repository.</em>)
                            </p>
                         </DashboardSection>
                      </div>
                   </Card>

                   <Card className="card">
                      <div className="card-header primary text-left"><span><i id='icon1' className="fa fa-cut" /></span> Snippets</div>
                      <div className="card-body">
                         <ExpansionList className='md-cell md-cell--12'>
                            <ExpansionPanel label="'getEaster()' JavaScript Function" footer={<CustomFooter codePenUrl='//codepen.io/hackalot805/pen/XZwXeN' />}>
                               <p>Based on my understanding of how to compute Easter.  I wrote this for a calendar generating program that I developed many years ago.</p>
                               <pre>
                                        <code>
                              {`
getEaster(currentYear) {
    let easterMonth = 0;
    let easterDay = 0;
    const base = 255 - (11 * (currentYear % 19));
    let baseDay = ((base - 21) % 30) + 21;
    if (baseDay > 48)
    baseDay -= 1;
    const baseWeek = (currentYear + (currentYear / 4) + baseDay + 1 ) % 7;
    const offsetDay = Math.ceil(baseDay + 7 - baseWeek);
    if (offsetDay <= 31) {
       easterMonth = 3;
       easterDay = offsetDay;
    } else {
       easterMonth = 4;
       easterDay = offsetDay - 31;
    }

    return {month: easterMonth, day: easterDay};
}
                              `}
                                        </code>
                                     </pre>
                            </ExpansionPanel>
                         </ExpansionList>
                         <ExpansionList className='md-cell md-cell--12'>
                            <ExpansionPanel label="'any_in_array()' PHP Function" footer={null}>
                               <p>Simple method to determine if any element single element from one array exists in another.</p>
                               <pre>
                                        <code>
                              {`
   function any_in_array(array $needles, array $haystack): bool {
      return !empty(array_intersect($needles, $haystack));
   }
                              `}
                                        </code>
                                     </pre>
                            </ExpansionPanel>
                         </ExpansionList>
                      </div>
                   </Card>

                   <Card className="card">
                      <div className="card-header primary text-left"><span><i id='icon2' className="fa fa-newspaper" /></span> Articles</div>
                      <div className="card-body">
                         <ExpansionList className='md-cell md-cell--12'>
                            <ExpansionPanel label="CodeProject" footer={null}>
                               <p>
                                  <img alt='' src='https://icon-icons.com/icons2/801/PNG/512/CODEPROJECT_icon-icons.com_65877.png' style={{width: 20, top: -2, position: 'relative'}} />
                                  Mostly old C++ code for obsolete Win32 platforms.
                               </p>

                               <ul>
                                  <li><a href="https://www.codeproject.com/Articles/14634/A-Cool-Way-to-Navigate-Your-Start-Menu-that-Integr" target='_blank' rel="noopener noreferrer">Taskbar Extension</a></li>
                                  <li><a href="https://www.codeproject.com/Articles/5113/A-Context-Menu-Handler-for-Windows-Users-That-Can" target='_blank' rel="noopener noreferrer">Context Menu Handler</a></li>
                                  <li><a href="https://www.codeproject.com/Articles/8302/WinDiff-or-WinMerge-the-way-you-want-it" target='_blank' rel="noopener noreferrer">Another Context Menu Extension</a></li>
                                  <li><a href="https://www.codeproject.com/Articles/15258/A-user-configurable-Idle-Computer-Notification-too" target='_blank' rel="noopener noreferrer">Idle Detection Win32 App</a></li>
                                  <li><a href="https://www.codeproject.com/Articles/14411/A-Perpetual-Calendar-Generator-well-at-least-until" target='_blank' rel="noopener noreferrer">Win32 Desktop Calendar Generator</a></li>
                                  <li><a href="https://www.codeproject.com/Articles/14952/A-simple-class-for-converting-numbers-into-a-strin" target='_blank' rel="noopener noreferrer">C++ Number Class</a></li>
                                  <li><a href="https://www.codeproject.com/script/Membership/View.aspx?mid=451209" target='_blank' rel="noopener noreferrer">CodeProject Profile</a></li>
                               </ul>
                            </ExpansionPanel>
                         </ExpansionList>
                      </div>
                   </Card>

                </div>
             </div>
          </div>
       </div>
      );
   }
}

/*
                                     <ExpansionPanel label="Actual Results" footer={null}>
                                        {easterString}<br /><br />
                                     </ExpansionPanel>
 */

export default Code;