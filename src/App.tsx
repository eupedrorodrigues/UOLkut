import React from 'react';
import './App.css';
import './app.module.css'
import { UserProvider } from './context/UserContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <React.StrictMode>
      <UserProvider>
        <AppRouter />
      </UserProvider>    
    </React.StrictMode>
  );
}

export default App;
