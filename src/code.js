import "babel-polyfill";
import React, { Component } from 'react';
import { ExpansionList, ExpansionPanel } from 'react-md';
import './code.css';

class Code extends Component {

   // This is for calculating Easter up to the year 2099...
   getEaster(nCurrentYear) {
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

   handleClick = (url) => {
      window.open(url);
   };

   render() {
      const years = Array.from({length: 50}, (v, k) => k + 2018);
      const easterString = years.map((year) => {
         const easter = this.getEaster(year);
         return (
          <span key={year}>
             {easter.month}-{easter.day}-{year},&nbsp;
          </span>
         );
      });

      const buttons = {
         'github-cricket': {'title': 'Cricket Keeper', icon: 'fa fa-bullseye', url: 'https://github.com/hackalot805/cricketkeeper'},
         'github-bbtuner': {'title': 'BB-Tuner', icon: 'fab fa-itunes-note', url: 'https://github.com/hackalot805/bbtuner'},
         'github-bbtone': {'title': 'BB-Tone', icon: 'fa fa-volume-up', url: 'https://github.com/hackalot805/bbtone'},
         'github-bbbeat': {'title': 'BB-Beat', icon: 'fa fa-headphones', url: 'https://github.com/hackalot805/bbbeat'},
         'github-progile': {'title': 'GitHub Profile', icon: 'fab fa-github', url: 'https://github.com/hackalot805'}
      };

      const buttonItems =
      Object.keys(buttons).map((key) => {
         const button = buttons[key];
         return (
          <div key={button.title} className='list-item'>
             <div className='btn btn-default btn-large list-item-content' onClick={() => this.handleClick(button.url)}>
                <div className='list-item-title' title={button.title}>
                   {button.title}
                </div>
                <div className="list-item-image">
                   <i className={button.icon} />
                </div>
             </div>
          </div>
         );
      });

      const CustomFooter = (props) => (
       <footer style={{ padding: 24 }}>
          <a href={props.codePenUrl} target="_blank" rel="noopener noreferrer">CodePen</a>
       </footer>
      );

      return (
       <div>
          <div className="container-fluid">
             <div className="row">
                <div className='col-xs-10 col-xs-offset-1'>
                   <div className="panel panel-primary dogs-panel">
                      <div className="panel-heading text-left"><span><i id='icon1' className="fa fa-code" /></span> Code</div>
                      <div className="panel-body">
                         <p>
                            Most of the interesting code that I have produced is proprietary, and I can't share it.
                            This is what's left...
                         </p>
                         <section className='dashboard-section'>
                            <div className="list-container">
                               {buttonItems}
                            </div>
                         </section>
                         <div className="panel panel-default">
                            <div className="panel-heading text-left"><span><i id='icon1' className="fa fa-cut" /></span> Snippets</div>
                            <div className="panel-body">
                               <ExpansionList className='md-cell md-cell--12'>
                                  <ExpansionPanel label="getEaster() JavaScript Function" footer={<CustomFooter codePenUrl='//codepen.io/hackalot805/pen/XZwXeN' />}>
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
                                  <ExpansionPanel label="CodeProject Articles" footer={null}>
                                     <p>
                                        <img src='https://icon-icons.com/icons2/801/PNG/512/CODEPROJECT_icon-icons.com_65877.png' style={{width: 20, top: -2, position: 'relative'}} />
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

/*
                                     <ExpansionPanel label="Actual Results" footer={null}>
                                        {easterString}<br /><br />
                                     </ExpansionPanel>
 */

export default Code;