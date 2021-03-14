import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import { ForksServiceProvider } from './components/forksContext';
import ForkService from './services/forks-service';
import store from './store';

const forkService = new ForkService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ForksServiceProvider value={forkService}>
        <App />
      </ForksServiceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
