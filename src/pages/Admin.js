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


const Admin = ({ songs }) => {
    const [guess, setGuess] = useState('');
    const [access, setAccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (guess === process.env.REACT_APP_GUESS) {
            setAccess(true);
            setGuess('');
        } else {
            setAccess(false);
            setGuess('');
        }
    };

    const theme = useTheme();

    return (
        <div>
            <h1>Admin</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={guess} onChange={e => setGuess(e.target.value)} />
                <input type="submit" value='Submit' />
            </form>
           { access ? 
           <>
           <h2>Access Granted</h2>
           <div className="songCard">
            { 
                    songs.map((song) => {
                        return (
                            <div key={song._id}>
                                <Card sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        { song.title }
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        { song.artist }
                                    </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                    </IconButton>
                                    </Box>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={song.image}
                                    alt="albumn cover"
                                />
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
            <h2>Upload New Song:</h2>
            <form>
                Song Title:
                <input type="text" name="title" placeholder="title"/>
                Image URL:
                <input type="text" alt="image" name="image" placeholder="https://icon-library.com/images/image-placeholder-icon/image-placeholder-icon-5.jpg"/>
                Release Date:
                <input type="text" name="released" placeholder="February 12th, 2022"/>
                <input type="submit" value='Submit' />
            </form>
           </> : <h2>Access Denied</h2> }
        </div>
    );
}

export default Admin;
