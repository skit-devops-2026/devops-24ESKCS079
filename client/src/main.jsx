import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import HeartMonitor from './pages/HeartMonitor.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './styles/output.css';
import './styles/app.css';

function App() {
 return <BrowserRouter><Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
  <Route path="/heart-monitor" element={<ProtectedRoute><HeartMonitor /></ProtectedRoute>} />
  <Route path="*" element={<Home />} />
 </Routes></BrowserRouter>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
