import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';

import AuthPage from './pages/Auth';
import EventsPage from './pages/Events';
import BookingsPage from './pages/Bookings';
import MainNavigation from './components/navigation/MainNavigation';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
          </Routes>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

