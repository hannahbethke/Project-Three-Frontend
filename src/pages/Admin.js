import React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Admin = ({ songs, createSongs }) => {

    const [guess, setGuess] = useState('');
    const [access, setAccess] = useState(false);
    const [newSong, setNewSong] = useState({
        title: "",
        artist: "",
        albumTitle: "",
        image: "",
        released: ""
    })

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
    };

    const handleDeleteBtnClick = (e) => {

    };

    const theme = useTheme();

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
            <h2>Access Granted</h2>
            <div className="adminRight">
                <div className="songCard">
                { 
                    songs.map((song) => {
                        return (
                            <div className="eachSong" key={song._id}>
                                <Card sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                                    <CardContent sx={{ flex: '1 0 auto', backgroundColor:'black'}}>
                                    <Typography sx={{color:'rgb(213, 213, 213)'}} component="div" variant="h5">
                                        { song.title }
                                    </Typography>
                                    <Typography variant="subtitle1" color="rgb(213, 213, 213)" component="div">
                                        { song.artist }
                                    </Typography>
                                    <Typography variant="subtitle2" color="rgb(213, 213, 213)" component="div">
                                        { song.released }
                                    </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor:'black', justifyContent: 'center', pl: 1, pb: 1 }}>
                                    <IconButton aria-label="previous" sx={{color: 'rgb(213, 213, 213)'}}>
                                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                    </IconButton>
                                    <IconButton aria-label="play/pause" sx={{color: 'rgb(213, 213, 213)'}}>
                                        <PlayArrowIcon sx={{ height: 38, width: 38}} />
                                    </IconButton>
                                    <IconButton aria-label="next" sx={{color: 'rgb(213, 213, 213)'}}>
                                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                    </IconButton>
                                    </Box>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 300 }}
                                    image={song.image}
                                    alt="album cover"
                                />
                                </Card>
                                <button onClick={handleDeleteBtnClick}>Delete</button>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="adminLeft">
                <div className="songForm">
                    <h2>Upload New Song:</h2>
                    <form onSubmit={handleNewSongSubmit}>
                        <label>Song Title: </label>  
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="song title" 
                            value={newSong.title} 
                            onChange = {handleSongFormChange}
                            required
                        />
                        <label>Artist Name: </label>  
                        <input
                            type="text"
                            name="artist" 
                            placeholder="artist name" 
                            value={newSong.artist} 
                            onChange = {handleSongFormChange}
                            required
                        />
                        <label>Album Title: </label>
                        <input
                            type="text"
                            name="albumTitle" 
                            placeholder="album title" 
                            value={newSong.albumTitle} 
                            onChange = {handleSongFormChange}
                            required
                        />
                        <label>Image URL: </label>
                        <input
                            type="text"
                            name="image" 
                            placeholder="image URL"
                            value={newSong.image} 
                            onChange = {handleSongFormChange}
                        />
                        <label>Album Release Date: </label>
                        <input
                            type="text"
                            name="released" 
                            placeholder="Month Day, Year" 
                            value={newSong.released} 
                            onChange = {handleSongFormChange}
                            required
                        />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
           </> : <h2>Access Denied</h2> }
        </div>
        
    );
}

export default Admin;
