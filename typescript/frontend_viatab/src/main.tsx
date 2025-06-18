import './style/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <header>
          <h1>VIA Tabloid</h1>
        </header>
        <App />
      </div>
    </Router>
  </React.StrictMode>
);