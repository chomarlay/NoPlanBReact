import 'react-app-polyfill/ie11'; // for ie11
import 'react-app-polyfill/stable'; // for ie11
import 'core-js'; // for ie11
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
