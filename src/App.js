import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
    </Router>
  );
}

export default App;
