import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToQuote = () => {
    document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={process.env.PUBLIC_URL + '/images/logo_main.png'} alt="Get Set Move Logo" className="main-logo" />
        <p>Professional local moving services with care and precision</p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={scrollToQuote}>Get Started</button>
          <button className="btn btn-secondary" onClick={scrollToServices}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Home;