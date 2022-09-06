import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';


const Admin = ({ songs, createSongs }) => {

    const [guess, setGuess] = useState('');
    const [access, setAccess] = useState(false);
    const [newSong, setNewSong] = useState({
        title: "",
        artist: "",
        photoCollection: "",
        image: "",
        dateAdded: ""
    });

    const handleAdminFormChange = (e) => {
        setGuess(e.target.value);
    };

    const handleAdminSubmit = (e) => {
        e.preventDefault();
        if (guess === process.env.REACT_APP_GUESS) {
            setAccess(true);
            setGuess('');
        } else {
            setAccess(false);
            setGuess('');
        }
    };

    const handleSongFormChange = (e) => {
        setNewSong((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const handleNewSongSubmit = (e) => {
        e.preventDefault();
        createSongs(newSong);
        setNewSong({
            title: "",
            artist: "",
            photoCollection: "",
            image: "",
            dateAdded: ""
        });
    };

    return (
        <div className="adminContainer">
            <div className="adminForm">
                <h1>Admin</h1>
                <form onSubmit={handleAdminSubmit}>
                    <input type="text" value={guess} onChange={handleAdminFormChange} />
                    <input type="submit" value='Submit' />
                </form>
                </div>

           { access ? 

           <>
            <div className="adminRight">
                <div className="songCard">
                { 
                    songs.map((song) => {
                        return (
                            <div className="eachSong" key={song._id}>
                                <Card sx={{ display: 'flex' }}>
                                <Box className="cardContent" sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                                    <CardContent  sx={{ flex: '1 0 auto', backgroundColor:'black'}}>
                                    <Typography sx={{color:'rgb(213, 213, 213)'}} component="div" variant="h3">
                                        { song.title }
                                    </Typography>
                                    <Link to={`/mslp/${song._id}`}>
                                        <h5>Edit Image</h5>
                                    </Link>
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 300 }}
                                    image={song.image}
                                    alt="album cover"
                                />
                                </Card>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="adminLeft">
                <div className="songFormDiv">
                    <Stack >
                    <Item>
                    <h2>Upload New Photo</h2>
                    </Item>
                    <Item>
                    <form className="songForm" onSubmit={handleNewSongSubmit}>
                        <Stack spacing={4}>
                        <Item>
                        <label>Photo Title </label>  
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="photo title" 
                            value={newSong.title} 
                            onChange = {handleSongFormChange}
                            required
                        />
                        </Item>
                        <Item>
                        <label>Artist Name </label>
                        <input
                            type="text"
                            name="artist" 
                            placeholder="artist name" 
                            value={newSong.artist} 
                            onChange = {handleSongFormChange}
                            required
                        />
                        </Item>
                        <Item>
                        <label>Collection </label>
                        <input
                            type="text"
                            name="photoCollection" 
                            placeholder="collection title" 
                            value={newSong.photoCollection} 
                            onChange = {handleSongFormChange}
                            required
                        />
                        </Item>
                        <Item>
                        <label>Image URL </label>
                        <input
                            type="text"
                            name="image" 
                            placeholder="image URL"
                            value={newSong.image} 
                            onChange = {handleSongFormChange}
                        />
                        </Item>
                        <Item>
                        <label>Date Added </label>
                        <input
                            type="text"
                            name="dateAdded" 
                            placeholder="Month Day, Year" 
                            value={newSong.dateAdded} 
                            onChange = {handleSongFormChange}
                            required
                        />
                        </Item>
                        <Item>
                        <input className="submitButton" type="submit" value="Submit"/>
                        </Item>
                        </Stack>
                    </form>
                    </Item>
                    </Stack>
                </div>
            </div>
           </> : <h2 className="adminFormH2">Access Denied</h2> }
        </div>
        
    );
}

export default Admin;
