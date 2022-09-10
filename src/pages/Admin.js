import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';

const Admin = ({ photos, createPhotos }) => {

    const [guess, setGuess] = useState('');
    const [access, setAccess] = useState(false);
    const [newPhoto, setNewPhoto] = useState({
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
        };
    };

    const handlePhotoFormChange = (e) => {
        setNewPhoto((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleNewPhotoSubmit = (e) => {
        e.preventDefault();
        createPhotos(newPhoto);
        setNewPhoto({
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
                    <div className="photoCard">
                        { 
                            photos.map((photo) => {

                                return (
                                    <div className="eachPhoto" key={photo._id}>
                                        <Card sx={{ display: 'flex' }}>
                                            <Box className="cardContent" sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                                                <CardContent  sx={{ flex: '1 0 auto', backgroundColor:'black'}}>
                                                <Typography sx={{color:'rgb(213, 213, 213)'}} component="div" variant="h3">
                                                    { photo.title }
                                                </Typography>
                                                <Link to={`/mslp/${photo._id}`}>
                                                    <h5>Edit Image</h5>
                                                </Link>
                                                </CardContent>
                                            </Box>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 300 }}
                                                image={photo.image}
                                                alt="album cover"
                                            />
                                        </Card>
                                    </div>
                                );

                            })
                        };                        
                    </div>
                </div>

                <div className="adminLeft">
                    <div className="photoFormDiv">
                        <Stack>

                            <Item>
                                <h2>Upload New Photo</h2>
                            </Item>

                            <Item>
                                <form className="photoForm" onSubmit={handleNewPhotoSubmit}>
                                    <Stack spacing={4}>
                                        <Item>
                                            <label>Photo Title </label>  
                                            <input 
                                                type="text" 
                                                name="title" 
                                                placeholder="photo title" 
                                                value={newPhoto.title} 
                                                onChange = {handlePhotoFormChange}
                                                required
                                            />
                                        </Item>
                                        <Item>
                                            <label>Artist Name </label>
                                            <input
                                                type="text"
                                                name="artist" 
                                                placeholder="artist name" 
                                                value={newPhoto.artist} 
                                                onChange = {handlePhotoFormChange}
                                                required
                                            />
                                        </Item>
                                        <Item>
                                            <label>Collection </label>
                                            <input
                                                type="text"
                                                name="photoCollection" 
                                                placeholder="collection title" 
                                                value={newPhoto.photoCollection} 
                                                onChange = {handlePhotoFormChange}
                                                required
                                            />
                                        </Item>
                                        <Item>
                                            <label>Image URL </label>
                                            <input
                                                type="text"
                                                name="image" 
                                                placeholder="image URL"
                                                value={newPhoto.image} 
                                                onChange = {handlePhotoFormChange}
                                            />
                                        </Item>
                                        <Item>
                                            <label>Date Added </label>
                                            <input
                                                type="text"
                                                name="dateAdded" 
                                                placeholder="Month Day, Year" 
                                                value={newPhoto.dateAdded} 
                                                onChange = {handlePhotoFormChange}
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

             </>

            : <h2 className="adminFormH2">Access Denied</h2> };

        </div>
    );
};

export default Admin;
