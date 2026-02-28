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
        <p>Get Set Moove is your professional and reliable moving company that provides the best crew and moving truck to meet your unique moving needs with care and precision.
          Get comfortable and efficient with our moving company. 
          Our experienced movers ensure a simple and hassle-free move for you.
          Your belongings are our top priority and every object, furniture, fragile items or priceless pianos gets our full care and attention. 
          It's time to Get Set Moove. Locally Owned, Locally Operated. Support Local Businesses.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={scrollToQuote}>Get Started</button>
          <button className="btn btn-secondary" onClick={scrollToServices}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Home;