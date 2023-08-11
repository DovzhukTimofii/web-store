
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { createRoot } from 'react-dom/client';
import './index.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

