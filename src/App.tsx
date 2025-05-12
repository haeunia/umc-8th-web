import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './week5/pages/HomePage';   // 경로 수정
import LoginPage from './week5/pages/LoginPage'; // 경로 수정
import PremiumPage from './week5/pages/PremiumPage'; // 경로 수정
import ProtectedRoute from './week5/components/ProtectedRoute';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);

    return (
        <Router basename="/week5">
            <div>
                <h1>Protected Route Example</h1>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Logout</button>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route 
                        path="/premium" 
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <PremiumPage />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
