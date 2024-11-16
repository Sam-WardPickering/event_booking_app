import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

import AuthPage from './pages/Auth';
import EventsPage from './pages/Events';
import BookingsPage from './pages/Bookings';
import MainNavigation from './components/navigation/MainNavigation';
import AuthContext from './context/auth-context';

function App() {

  // UseState for state management
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  // Login function
  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setUserId(null);
  };


  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthContext.Provider value={{ token: token, userId: userId, login: login, logout: logout }}>
          <MainNavigation />
          <main className="main-content">
            <Routes>
              {!token && <Route path="/" element={<Navigate to="/auth" replace />} />}
              {token && <Route path="/" element={<Navigate to="/events" replace />} />}
              {token && <Route path="/auth" element={<Navigate to="/events" replace />} />}
              {!token && <Route path="/auth" element={<AuthPage />} />}
              <Route path="/events" element={<EventsPage />} />
              {token && <Route path="/bookings" element={<BookingsPage />} />}
            </Routes>
          </main>
        </AuthContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

