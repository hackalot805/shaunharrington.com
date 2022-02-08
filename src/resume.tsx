import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Component } from 'react';
import headshot from './assets/headshot.jpg';
import { Button } from 'react-md';
import styled from 'styled-components';

import './resume.css';

const MdButtonText = styled(Button)`
   &.md-btn--text {
      min-width: 20px;
      width: 45px;
      font-size: 20px;
      height: 45px;

      @media all and (max-width: 815px) {
         font-size: 30px;
         width: 45px;
      }
      
      @media all and (max-width: 626px) {
         font-size: 30px;
         width: 45px;
      }
   }
`;

const MainDetails = styled.div`
   padding: 25px 15px 20px;
   border: solid 1px #e0e0e0;
   border-bottom: 2px solid silver;
   background: #edede6;
`;

const NameH1 = styled.h1`
   font-size: 2.5em;
   font-weight: 700;
   font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
   margin-bottom: -6px;

   @media all and (min-width: 992px) and (max-width: 1110px) {
      font-size: 2.0em;
   }
`;

const NameH2 = styled.h2`
   font-size: 2em;
   margin-left: 2px;
   font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
   @media all and (min-width: 992px) and (max-width: 1110px) {
      font-size: 1.8em;
   }
`;

const MainArea = styled.div`
   background: #edede6;
   padding: 0 40px;
   border: solid 1px #e0e0e0;
   border-top: none;
   text-align: left;
`;

const HeadShot = styled.div`
   width: 12.5%;
   float: left;
   margin-right: 20px;
   margin-left: 16px;

   @media all and (max-width: 815px) {
      display: none;
   }
`;

const HeadShotImg = styled.img`
   width: 100%;
   max-width: 100px;
   height: auto;
   -webkit-border-radius: 50px;
   border-radius: 50px;
`;

const Name = styled.div`
   float: left;

   @media all and (max-width: 726px) {
      float: none;
      width: 100%;
      text-align: center;
   }
`;

const ContactDetails = styled.div`
   float: right;
   padding-right: 20px;
   
   @media all and (max-width: 726px) {
      float: none;
      width: 100%;
      text-align: center;
   }
`;

const ContactDetailsUL = styled.ul`
   list-style-type: none;
   font-size: 0.9em;
   margin-top: 2px;
`;

const ContactDetailsLI = styled.li`
   margin-bottom: 3px;
   color: #444;
`;

class Resume extends Component {
   onClick = (url: string) => {
      window.open(url);
   };

   render() {
      const year = new Date().getFullYear();
      const workYears = year - 1989;
      return (
       <div>
          <div className="container-fluid" id="page_main">
             <div className="row">
                <div className="col-sm-12 col-md-offset-0">
                   <MainDetails className="quickFade delayOne">
                      <HeadShot>
                         <HeadShotImg src={headshot} alt="Shaun Harrington" />
                      </HeadShot>
                      <Name>
                         <NameH1 className="quickFade delayTwo">Shaun Harrington</NameH1>
                         <NameH2 className="quickFade delayThree">Software Developer</NameH2>
                      </Name>
                      <ContactDetails id="contactDetails" className="quickFade delayFour">
                         <ContactDetailsUL>
                            <ContactDetailsLI>e: <a href="mailto:me@shaunharrington.com" target="_blank" rel="noopener noreferrer">me@shaunharrington.com</a></ContactDetailsLI>
                            <ContactDetailsLI>w: <a href="http://www.shaunharrington.com/">www.shaunharrington.com</a></ContactDetailsLI>
                            <ContactDetailsLI>m: (805) 441-7875</ContactDetailsLI>
                            <ContactDetailsLI>
                               <MdButtonText flat primary onClick={this.onClick.bind(this, './ShaunHarringtonResume.pdf')} title="PDF Resume"><i className="fas fa-file-pdf"></i></MdButtonText>
                               <MdButtonText flat primary onClick={this.onClick.bind(this, './shaunharrington.vcf')} title="VCard"><i className="fas fa-address-card"></i></MdButtonText>
                               <MdButtonText flat primary onClick={this.onClick.bind(this, 'https://www.linkedin.com/in/shaunharrington')} title="LinkedIn"><i className="fab fa-linkedin"></i></MdButtonText>
                               <MdButtonText flat primary onClick={this.onClick.bind(this, 'https://github.com/hackalot805')} title="GitHub"><i className="fab fa-github"></i></MdButtonText>
                               <MdButtonText flat primary onClick={this.onClick.bind(this, 'https://shaunharrington.slack.com')} title="Slack"><i className="fab fa-slack-hash"></i></MdButtonText>
                            </ContactDetailsLI>
                         </ContactDetailsUL>
                      </ContactDetails>
                      <div className="clear"></div>
                   </MainDetails>
                </div>
             </div>
             <div className="row">
                <div className="col-sm-12 col-md-offset-0">
                   <MainArea id="mainArea" className="quickFade delayFive">
                      <section>
                         <article>
                            <div className="sectionTitle">
                               <h1>Skills</h1>
                            </div>

                            <div className="sectionContent">
                               <p>
                                  I have over {workYears} years of professional application software programming experience.
                                  I deeply enjoy challenges and learning new programming skills.
                                  I'm a quick learner and known for my pit-bull like attitude towards tasks and milestones.
                                  I'm a strong addition to design teams and bring a keen eye for usability and best practices to the table.
                                  I'm good at estimating work load and completion dates. I never turn my nose up at grunt work.
                                  I am honest, hard working and have strong communication, presentation, and documentation skills.
                                  I work very well with quality assurance, technical support, and localization teams.
                                  I'm a fan of Agile development methodologies and continuous development cycles.
                                  I'm a team player that can get the job done.
                                  I know what it means, and what it takes to turn a technology into a world class software product.
                               </p>
                               <p>
                                  The bulk of my early efforts are in producing OEM software products for global retail markets on Windows platforms.
                                  Relevant tools included X86 Assembly, C, C++, JAVA, RTL, WIN32, STL, ATL, MFC, COM, DCOM, SPRING, AWT, SWT and SWING, Zortech, Borland, Microsoft Visual Developer Studio (MSDN), Bounds Checker, CVS and PVCS.
                                  More recently, I've been working as a full stack engineer focused on producing web applications on both LAMP and MEAN stacks.
                                  My efforts include using Ubuntu (light config, Ruby and Shell scripts), Apache (light config), NGINX (light config), MySQL (5.1-8.0), MongoDB (light), AWS (EC2, S3, LightSail, SDB, RDS, Route53), PHP (4.x-8.1, WordPress, ZenCart, eCommerce, Zapatec, Drupal, Symfony, Zend), Javascript (Native, Typescript, React, Angular (light), Node.js, Vue.js (light), jQuery, jQueryUI, MooTools, jpGraph, D3, Bootstrap, Jade), HTML/XHTML/HTML5, CSS, LESS, Authorize.net API, Google Fusion API, Google Map API, Yahoo Weather API, IntelliJ (my fav), PHPStorm, GitHub (git), Mercurial, BugZilla, RedShift, Sentry, Solar Winds and more.
                               </p>
                               <p>
                                  While I primarily lean towards UI and UX efforts with an eye for responsive design, I also have a strong skill set for, and extensive experience with web application design, architecture and implementation.
                                  This includes authoring of PHP and JavaScript class libraries, RESTful APIs and web services, along with fairly complicated MySQL queries, designing database schemas and contributing to backend/engine logic.
                                  I've also spent a fair amount of time doing dev-ops tasks like producing server templates, Bash and Ruby scripts, launching/swapping instances and installing services.
                               </p>
                            </div>
                         </article>
                         <div className="clear"></div>
                      </section>
                      <section>
                         <div className="sectionTitle">
                            <h1>Experiences</h1>
                         </div>
                         <div className="sectionContent">
                            <article>
                               <h2>Senior Software Developer</h2>
                               <h3>Dozuki, San Luis Obispo, CA <a target="_blank" rel="noopener noreferrer" href='http://www.dozuki.com/' title="Visit web site"><i className="fas fa-link"></i></a></h3>
                               <p className="subDetails">November 2017 - Present</p>
                               <p>
                                  I'm currently working as a full stack software engineer at Dozuki.
                                  Dozuki is spin off from iFixit that builds on the iFixit core codebase to offer a training guide platform to Fortune 500 companies.
                               </p>
                               <p>
                                  My efforts include 3rd party application and service integrations, UI/UIX enhancements
                                  language/translation system enhancements, major feature implementations,
                                  API endpoint development and bug squashing.
                                  During my time at Dozuki I've had significant exposure to PHP, MySQL, JavaScript, TypeScript, React, AWS and Sentry to name a few.
                                  I'm particularly proud of a Grafana integration designed to provide in-app dashboards.
                                  The implementation consists of a free standing Grafana server in AWS that employs a NodeJS based auth-proxy services to validate access.
                               </p>
                            </article>

                            <article>
                               <h2>Principal Software Developer</h2>
                               <h3>SMS Masterminds, San Luis Obispo, CA <a target="_blank" rel="noopener noreferrer" href='http://www.smsmasterminds.com/' title="Visit web site"><i className="fa fa-link"></i></a></h3>
                               <p className="subDetails">November 2013 - April 2017</p>
                               <p>
                                  I worked as the principal software developer for the 'Engage' product at SMS Masterminds.
                                  'Engage' is a branding enabled boilerplate web site platform coupled with an SMS sending and receiving platform that enables clients to send and receive text messages to groups of mobile subscribers collected by web, mobile and loyalty kiosk (in store tablet) methods.
                                  Over the course of my efforts the product has grown from 5 licensees to over 200 licensees, and from 1 million mobile subscribers to over 7 million mobile subscribers.
                               </p>
                               <p>
                                  My specific efforts are primarily focused on programming, managing the codebase and dev ops.
                                  I have out right owned or contributed programming efforts to almost every module (UI, API, services, engine) of the codebase with the exception of the tablet APK (android) that runs on our loyalty kiosks.
                                  Some highlights include converting a "copy and paste" code base into a shared code base for the consumer web site side of the product.
                                  Migration of primary service server from Rackspace hosting to service specific servers within Amazon Web Services.
                                  Implementation of an enterprise wide dashboard using responsive design with Bootstrap that provides facilities for managing hosted web sites and reporting for the SMS sending service.
                                  Authoring of several RESTful APIs and services for internal consumption.
                                  Seemingly endless UI enhancements, widget and wizard (work flow UI) implementations.
                                  Authoring of DR system spin up, service installation and product update bash scripts.
                                  Dev-op responsibilities that include Amazon Web Services (AWS) EC2 instance, volume and snapshot management along with heavy use of Route53, SES, RDS, SDB and S3.
                                  Closely working with QA to ensure quality, and customer service departments to prioritize feature roll outs and bug fixes.
                                  I've had the opportunity to mentor a couple of jr. engineers recently, which was a lot of fun.
                               </p>
                            </article>

                            <article>
                               <h2>Owner/Principal Software Developer</h2>
                               <h3>PlanetHarrington, Arroyo Grande, CA</h3>
                               <p className="subDetails">November 2001 - November 2013 (overlaps with BlackBall)</p>
                               <p>PlanetHarrington was my venture into contracting for web application design and internet marketing. I switched back and forth between SEO efforts and working on custom website frameworks, responsive and mobile design, widgets, extensive ZenCart enhancements and WordPress plug-ins. During this time I built and maintained well over one hundred websites. I'm particularly proud of an IDX (real estate listings) system that I implemented on an AWS AMI instance that pulls listing data from the Central Coast Real Estate Association and makes the data available for real estate web sites by API and WordPress plug-ins, and is still in use today. Another effort included a database schema design and a secure set of tools for adding, updating, searching and reviewing IVF egg donors for one of the largest IVF facilities in the nation. One last effort worth mentioning was a custom web site and ATV reservation system for Steve's ATV that was my first real venture into data driven web sites. All in all there was a lot of PHP and MySQL on the back end and web site frameworks, jQuery and jQuery UI on the front end. I also started contracting for SMS Masterminds during this time.</p>
                            </article>

                            <article>
                               <h2>Senior Software Developer</h2>
                               <h3>BlackBall, Inc., San Diego, CA</h3>
                               <p className="subDetails">November 2001 - July 2009</p>
                               <p>Senior software developer of Windows client-side user interfaces, JAVA server applets and internet components for a family of data management tools built around a metadata indexing file system. Specific efforts include shell extensions and other Windows UI components. In addition, I implemented a software based musical instrument tuner in JAVA and in C++ for Windows. Responsibilities included UI design documents and directing testing efforts. Heavy use of C, C++, PHP, MySQL, JAVA and Microsoft Developer Tools.</p>
                            </article>

                            <article>
                               <h2>Principal Software Developer</h2>
                               <h3>VERITAS Software, Inc., San Luis Obispo, CA <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Veritas_Software' title="Visit wikipedia article"><i className="fas fa-link"></i></a></h3>
                               <p className="subDetails">May 1999 - October 2001 (merged with Seagate)</p>
                               <p>Principal software developer of Windows UI components for OEM backup and replication software distributed to global markets. Specific efforts include custom controls, 3D widgets, reusable class libraries, shell extensions and other UI components. Participation in large (25-100) person engineering teams. Strong cooperation with large QA, localization and hardware driver teams. Heavy use of C, C++ and Microsoft Developer Tools, PVCS, Bounds Checker, and Bugzilla.</p>
                            </article>

                            <article>
                               <h2>Senior Software Developer</h2>
                               <h3>Seagate Software, Inc., San Luis Obispo, CA <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Seagate_Software' title="Visit wikipedia article"><i className="fas fa-link"></i></a></h3>
                               <p className="subDetails">January 1996 - May 1999 (merged with Arcada)</p>
                               <p>Senior software developer of Windows UI components for OEM backup and replication software distributed to global markets. Specific efforts include custom controls, 3D widgets, shell extensions and other UI components. Participation in large (10-50) person engineering teams; Strong cooperation with large QA, localization and hardware driver teams. Heavy use of C, C++, Microsoft Developer Tools, PVCS, Bounds Checker, and Bugzilla.</p>
                            </article>

                            <article>
                               <h2>Software Developer</h2>
                               <h3>Arcada Software, Inc., San Luis Obispo, CA <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Arcada_Software' title="Visit wikipedia article"><i className="fas fa-link"></i></a></h3>
                               <p className="subDetails">May 1993 - January 1996</p>
                               <p>Software developer of Windows UI components for OEM tape backup and disaster recovery software distributed to global markets. Specific efforts include custom controls, shell extensions and other UI components. Participation in large (10-25) person engineering teams. Strong cooperation with large QA, localization and hardware teams. Heavy use of C, C++, Microsoft Developer Tools and CVS.</p>
                            </article>

                            <article>
                               <h2>Software Developer</h2>
                               <h3>Stac Electronics, Inc., San Diego, CA <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Stac_Electronics' title="Visit wikipedia article"><i className="fas fa-link"></i></a></h3>
                               <p className="subDetails">January 1990 - May 1993</p>
                               <p>Software developer of Windows UI components and DOS interrupt hook components for a widely distributed real time data compression product. Specific efforts include 3D chart widgets, Custom buttons, Client installation/configuration components, DOS command and redirect hooks. Heavy use of C, C++ and Microsoft Developer Tools and some light assembly programming.</p>
                            </article>

                            <article>
                               <h2>Software Developer</h2>
                               <h3>Mountain Network Solutions, Inc., San Diego, CA</h3>
                               <p className="subDetails">January 1988 - December 1990</p>
                               <p>Software developer of reusable C++ libraries for custom installation software and Windows UI components for tape backup software.</p>
                            </article>

                            <article>
                               <h2>Software Tester/Developer</h2>
                               <h3>Emerald Systems, Inc., San Diego, CA</h3>
                               <p className="subDetails">February 1987 - January 1988</p>
                               <p>Software tester of the first Windows based tape backup software. Software developer of reusable C++ libraries for custom installation software and Windows UI components for tape backup software.</p>
                            </article>
                         </div>
                         <div className="clear"></div>
                      </section>
                      <section>
                         <p className="text-center">References and reviews are available upon request. Thank you for your consideration</p>
                      </section>
                   </MainArea>
                </div>
             </div>
          </div>
       </div>
      );
   }
}

export default Resume;