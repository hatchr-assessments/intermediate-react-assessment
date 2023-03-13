import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CustomerDashboard from './pages/CustomerDashboard/CustomerDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<CustomerDashboard/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;