import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css'
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,
  document.getElementById('root')
);
