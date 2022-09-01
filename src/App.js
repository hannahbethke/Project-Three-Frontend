
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Music from './pages/Music';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import './index.css';
import './App.css';

function App() {
  const [ songs, setSongs ] = useState(null);

  const API_URL = 'http://localhost:4000/api/songs';

  const getSongs = async () => {
      try {
          const response = await fetch(API_URL);
          const songData = await response.json();
          setSongs(songData);
      } catch (error) {
          // TODO: add logic to handle error
      }
  ;}

  useEffect(() => {
      getSongs();
  }, []);


  return (
    <div className="App">
     <Nav />
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music songs={songs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nslp" element={<Admin songs={songs} />} />
      </Routes>
    </div>
  );
}

export default App;
