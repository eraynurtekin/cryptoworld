import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);