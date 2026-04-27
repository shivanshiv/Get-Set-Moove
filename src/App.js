import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Photos from './components/Photos';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className="bg-animation"></div>
            <Header />
            <main>
              <Home />
              <Services />
              <Quote />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/photos" element={
          <div className="App">
            <div className="bg-animation"></div>
            <Header />
            <Photos />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const scrollToHash = () => {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToHash();
    const timeout = setTimeout(scrollToHash, 100);
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return null;
}

export default App;