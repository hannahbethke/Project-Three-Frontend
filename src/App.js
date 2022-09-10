
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
  const [ photos, setPhotos ] = useState(null);

  // const API_URL = 'https://ancient-cove-76773.herokuapp.com/api/photos/';
  const API_URL = 'http://localhost:4000/api/photos';

  const getPhotos = async () => {
      try {
          const response = await fetch(API_URL);
          const photoData = await response.json();
          setPhotos(photoData);
      } catch (error) {
          // TODO: add logic to handle error
      }
  ;}

  const createPhoto = async (photo) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(photo)
      });
      getPhotos();
    } catch (error) {
      // TO DO
    }
  };

  const deletePhoto = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      getPhotos();
    } catch (error) {
      // TODO
    }
  }

  useEffect(() => {
      getPhotos();
  }, []);


  return (
    <div className="App">
     <Nav />
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/artwork" element={<Artwork photos={photos} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mslp" element={<Admin photos={photos} createPhoto={createPhoto} />} />
        <Route path="/mslp/:id" element={<Show photos={photos} deletePhoto={deletePhoto}/>} />
      </Routes>
    </div>
  );
}

export default App;
