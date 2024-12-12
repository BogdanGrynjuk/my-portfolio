import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'config/i18n';
import { MusicProvider } from 'context/MusicContext';

import 'scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MusicProvider>
      <App />
    </MusicProvider>
  </React.StrictMode>
);
