import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Photos from './components/Photos';
import Footer from './components/Footer';

function GitHubPagesRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // GitHub Pages SPA redirect handler
    const l = window.location;
    if (l.search[1] === '/') {
      const decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
      );
      navigate(decoded, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <GitHubPagesRedirect />
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