import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from './App'; //you can leave off '.js' for js files you wrote
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //telling to render out element 'App'to div 'root'
registerServiceWorker();
