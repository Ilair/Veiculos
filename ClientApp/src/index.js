import './marca/node_modules/bootstrap/dist/css/bootstrap.css';
import React from './marca/node_modules/react';
import ReactDOM from './marca/node_modules/react-dom';
import { BrowserRouter } from './marca/node_modules/react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

