import React from 'react';
// import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
// import { Title } from '@mui/icons-material';
import image from "../images/pexels-merlin-lightpainting4.jpg";

const Music = ({ songs }) => {
    
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
            <>
                <div className="artworkImgDiv" style={{ backgroundImage:`url(${image})`, backgroundRepeat: "no-repeat", backgroundSize:"cover" }}>
                    <div className="artworkImgContainer">
                        <h1 className="artworkH1">Merlin Lightpainting</h1>
                    </div>
                </div>

                <div className="photographyH1">
                    <h1 className="photographyH1">Photography Collections</h1>
                </div>

                <div className="photoContainer">
                    
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
                                            <Typography variant="h5" color="rgb(213, 213, 213)" component="div">
                                                { song.photoCollection }
                                            </Typography>
                                            <Typography variant="h6" color="rgb(213, 213, 213)" component="div">
                                                { song.dateAdded }
                                            </Typography>
                                            </CardContent>
                                        </Box>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 900, maxHeight: 800}}
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
            </>
        );
    };

    return songs ? loaded() : loading();
};

export default Music;
