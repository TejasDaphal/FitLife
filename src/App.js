import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import Review from './pages/Review';
import Join from './pages/Join';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/review" element={<Review />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;