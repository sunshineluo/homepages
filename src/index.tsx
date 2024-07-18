import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/css/index.css';
import Layout from './layout/Layout';
import { get } from './utils/useHttpTools';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
