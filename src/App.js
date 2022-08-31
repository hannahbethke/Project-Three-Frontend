
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Music from './pages/Music';
import Contact from './pages/Contact';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>App</h1>
     <Nav />
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
