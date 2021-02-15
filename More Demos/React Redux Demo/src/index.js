import React from 'react';
import ReactDOM ,{ render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'
import './index.css';
import App from './App';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
render(
  <Provider store = {store}>
     <App />
  </Provider>, document.getElementById('root')
)