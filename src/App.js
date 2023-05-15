import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <main>
      <ParallaxProvider>
        <Navbar />
        <Header />
      </ParallaxProvider>
    </main>
    </Router>
  );
}

export default App;
