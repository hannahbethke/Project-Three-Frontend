
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Artwork from './pages/Artwork';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Show from './pages/Show';
import './index.css';
import './App.css';


function App() {
  const [ songs, setSongs ] = useState(null);

  // const API_URL = 'https://ancient-cove-76773.herokuapp.com/api/songs/';
  const API_URL = 'http://localhost:4000/api/photos';

  const getSongs = async () => {
      try {
          const response = await fetch(API_URL);
          const songData = await response.json();
          setSongs(songData);
      } catch (error) {
          // TODO: add logic to handle error
      }
  ;}

  const createSongs = async (song) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(song)
      });
      getSongs();
    } catch (error) {
      // TO DO
    }
  };

  const deleteImage = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      getSongs();
    } catch (error) {
      // TODO
    }
  }

  useEffect(() => {
      getSongs();
  }, []);


  return (
    <div className="App">
     <Nav />
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/artwork" element={<Artwork songs={songs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mslp" element={<Admin songs={songs} createSongs={createSongs} />} />
        <Route path="/mslp/:id" element={<Show songs={songs} deleteImage={deleteImage}/>} />
      </Routes>
    </div>
  );
}

export default App;
