import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import './fonts/recursive-MONO_CASL_wght_slnt_ital--2019_11_05-00_13.ttf'

WebFontLoader.load({
    google: {
       families: ['Roboto:300,400,500,700', 'Material Icons'],
      },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
