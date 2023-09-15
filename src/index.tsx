/**
 * index.tsx
 *
 * This is the entry file for the application
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// Use consistent styling
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from 'app';

import { store } from 'store';

import reportWebVitals from 'reportWebVitals';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const persistor = persistStore(store);


root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
