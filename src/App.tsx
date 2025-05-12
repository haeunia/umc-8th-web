import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PremiumPage from './pages/PremiumPage';
import GoogleLoginPage from './pages/GoogleLoginPage';

function App() {
    return (
        <Router basename="/week5">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/premium" element={<PremiumPage />} />
                <Route path="/auth/callback" element={<GoogleLoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
