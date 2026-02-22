import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="bg-animation"></div>
      <Header />
      <main>
        <Home />
        <Services />
        <Quote />
        <Contact />
        <div className="test-image-container" style={{ padding: '20px', textAlign: 'center', zIndex: '10', position: 'relative' }}>
          <h3>Test Image:</h3>
          <img src="/images/download.jpg" alt="Download Test" style={{ maxWidth: '300px', height: 'auto', border: '2px solid #14b8a6', borderRadius: '10px' }} />
          <p>Image should be visible if loading is working correctly</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;