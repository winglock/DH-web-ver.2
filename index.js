import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById(''));
root.render(
  <App />  // StrictMode가 없는 상태로 렌더링
);

reportWebVitals();
