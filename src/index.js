import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import './fonts/recursive-MONO_CASL_wght_slnt_ital--2019_11_05-00_13.ttf'
import 'typeface-inter';
import './index.css';

Sentry.init({
   dsn: "https://5ca00112977b4d44946c9b487c016c6f@o659169.ingest.sentry.io/5764131",
   integrations: [new Integrations.BrowserTracing()],

   // Set tracesSampleRate to 1.0 to capture 100%
   // of transactions for performance monitoring.
   // We recommend adjusting this value in production
   tracesSampleRate: 1.0,
});

WebFontLoader.load({
    google: {
       families: ['Roboto:300,400,500,700', 'Material Icons'],
      },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
