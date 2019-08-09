import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './store/configureStore';
// import registerServiceWorker from './registerServiceWorker';

const { REACT_APP_SERVER_RENDER: isServer } = process.env

console.log(process.env)

const store = configureStore(window.__REDUX_STATE__ || {});

delete window.__REDUX_STATE__;

const AppBundle = (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

if (!isServer) {
  ReactDOM.render(
    AppBundle,
    document.getElementById('root')
  );
} else {
  // window.onload = () => {
  Loadable.preloadReady().then(() => {
    console.log('preloaded loadable');
    ReactDOM.hydrate(
      AppBundle,
      document.getElementById('root')
    );
  });
  // };
}



// registerServiceWorker();
