import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'loader'} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
);
