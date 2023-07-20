import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import "../src/styles/App.css";
import About from './pages/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
);
