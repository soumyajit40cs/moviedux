import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import MessageContext from './context/MessageContext';
import { MessageProvider } from './components/MessageProvider';
import { store, Store } from './Redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const message = "Hello Worls";
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <MessageProvider>
        <App />
      </MessageProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
