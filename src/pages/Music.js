import React from 'react';
// import { useEffect, useState } from 'react';
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
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
// import { Title } from '@mui/icons-material';
// import image from "../images/shadow.jpg";

const Music = ({ songs }) => {
    const theme = useTheme();
    
    const loading = () => {
        return (
            <>
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    <LinearProgress color="inherit" />
                </Stack>
            </>
        )
    };

    const loaded = () => {
        return (
            <div className="musicPageContainer"  >
        
                <div className="musicPageImgDiv">
                    <img className="musicPageImg" src={require("../images/piano.jpg")} alt="piano" />
                </div>
                <h1>Discography</h1>

        
                <div className="songCard">
                <h1>Discography</h1>
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
                                </div>
                            )
                        })
                    }
                </div>
                <div className="musicPageImg2">
                </div>
            </div>
        );
    };

    return songs ? loaded() : loading();
};

export default Music;
