import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/fonts/fontawesome-free/css/all.css';
import './css/fonts/simple-line-icons/css/simple-line-icons.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
