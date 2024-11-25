import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyles />
    </PersistGate>
  </Provider>
);
