import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import './index.css';
import App from './App';

ReactDOM.render(
  <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732">
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
