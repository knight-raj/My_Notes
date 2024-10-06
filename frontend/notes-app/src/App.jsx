import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); 
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  
  return children;
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route 
            path="/dashboard" 
            exact 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          
          {/* Optionally, redirect '/' to login or dashboard */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
