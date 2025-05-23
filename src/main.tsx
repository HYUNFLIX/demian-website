import React from 'react';
import ReactDOM from 'react-dom/client';
// BrowserRouter에 basename을 지정
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename="/demian-website">
    <App />
  </BrowserRouter>
);
