import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/netflix-clone/">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
