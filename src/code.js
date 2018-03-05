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
         'github-progile': {'title': 'GitHub Profile', icon: 'fab fa-github', url: 'https://github.com/hackalot805'},
         'github-cricket': {'title': 'Cricket Keeper', icon: 'fa fa-bullseye', url: 'https://github.com/hackalot805/cricketkeeper'},
         'github-bbtuner': {'title': 'BB-Tuner', icon: 'fab fa-itunes-note', url: 'https://github.com/hackalot805/bbtuner'},
         'github-bbtone': {'title': 'BB-Tone', icon: 'fa fa-volume-up', url: 'https://github.com/hackalot805/bbtone'},
         'github-bbbeat': {'title': 'BB-Beat', icon: 'fa fa-headphones', url: 'https://github.com/hackalot805/bbbeat'}
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
                         <section className='dashboard-section'>
                            <div className="list-container">
                               {buttonItems}
                            </div>
                         </section>
                         <div className="panel panel-default dogs-panel">
                            <div className="panel-heading text-left"><span><i id='icon1' className="fa fa-calendar-alt" /></span> Snippets</div>
                            <div className="panel-body">
                               <ExpansionList className='md-cell md-cell--12'>
                                  <ExpansionPanel label="Get Easter JavaScript Function" footer={<CustomFooter codePenUrl='//codepen.io/hackalot805/pen/XZwXeN' />}>
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
                                     <ExpansionPanel label="Actual Results" footer={null}>
                                        {easterString}<br /><br />
                                     </ExpansionPanel>
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

export default Code;