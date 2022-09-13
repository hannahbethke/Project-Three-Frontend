import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';

const Admin = ({ photos, createPhoto }) => {

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
        createPhoto(newPhoto);
        setNewPhoto({
            title: "",
            artist: "",
            photoCollection: "",
            image: "",
            dateAdded: ""
        });
    };

    return (
        <div className="adminPageContainer">

            <div className="adminLoginForm">
                <h1 className="adminLoginFormH1">Admin Login</h1>
                <form onSubmit={handleAdminSubmit}>
                    <input className="submitButton" type="text" value={guess} onChange={handleAdminFormChange} />
                    <input className="submitButton" type="submit" value='Submit' />
                </form>
            </div>

           { access ? 

           <>
                <div className="adminAccessContainer">

                    <div className="adminAccessRight">
                        <div className="photoCard">
                            { 
                                photos.map((photo) => {

                                    return (
                                        <div className="eachPhoto" key={photo._id}>
                                            <Card sx={{ display: 'flex' }}>
                                                <Box className="cardContent" sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                                                    <CardContent  sx={{ flex: '1 0 auto', backgroundColor:'black'}}>
                                                    <h1>
                                                        { photo.title }
                                                    </h1>
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
                            }                        
                        </div>
                    </div>

                    <div className="adminAccessLeft">
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
                                                <input className="photoInput"
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
                                                <input className="photoInput"
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
                                                <input className="photoInput"
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
                                                <input className="photoInput"
                                                    type="text"
                                                    name="image" 
                                                    placeholder="image URL"
                                                    value={newPhoto.image} 
                                                    onChange = {handlePhotoFormChange}
                                                />
                                            </Item>
                                            <Item>
                                                <label>Date Added </label>
                                                <input className="photoInput"
                                                    type="text"
                                                    name="dateAdded" 
                                                    placeholder="Month Day, Year" 
                                                    value={newPhoto.dateAdded} 
                                                    onChange = {handlePhotoFormChange}
                                                    required
                                                />
                                            </Item>
                                            <Item>
                                                <input className="submitButton" onClick={handleNewPhotoSubmit} type="submit" value="Submit"/>
                                            </Item>
                                        </Stack>
                                    </form>
                                </Item>
                            </Stack>
                        </div>
                    </div>
                    
                </div>
             </>

            : <h2 className="adminLoginFormH2">Access Denied</h2> }

        </div>
    );
};

export default Admin;
