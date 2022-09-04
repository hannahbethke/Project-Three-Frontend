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
import image from "../images/shadow.jpg";

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
        
                <div className="songCard">
                    { 
                        songs.map((song) => {
                            return (
                                <div key={song._id}>
                                    <Card sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
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
                                        alt="album cover"
                                    />
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="musicPageImg2">
                <img className="musicPageImg2" src={require("../images/headshot2.jpg")} alt="makekin" />
                </div>
            </div>
        );
    };

    return songs ? loaded() : loading();
};

export default Music;
