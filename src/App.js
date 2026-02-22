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
      </main>
      <Footer />
    </div>
  );
}

export default App;