import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // ✅ ADD THIS
import './index.css';
import AppWithRoutes from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Added basename to handle GitHub Pages static routing */}
    <BrowserRouter basename="/bowhle-project">
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <AppWithRoutes />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
