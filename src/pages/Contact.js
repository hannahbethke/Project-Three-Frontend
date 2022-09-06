import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

const Contact = () => {

    const handleClickInsta = () => {
        window.open("https://www.instagram.com/merlin.lightpainting/");
    }

    const handleClickTwitter = () => {
        window.open("https://twitter.com/MERLINph");
    }

    const handleClickWeb = () => {
        window.open("https://www.pexels.com/@merlin/");
    }

    return (
        <div className="contactPage">
            <img className="contactPageImg" src={require("../images/pexels-merlin-lightpainting3.jpg")} alt="Portrait" />
            <h1>Merlin Lightpainting</h1>
            <h2>Photographer, Lightpainter, NFT Artist</h2>
            <h4>Follow to Support!</h4>
            <ul className="contactButtons">
            <li>
                <IconButton className="iconButton" onClick={handleClickInsta}>
                    <InstagramIcon/>
                </IconButton>   
            </li>
            <li>
                <IconButton className="iconButton" onClick={handleClickTwitter}>
                    <TwitterIcon/>
                </IconButton>  
            </li>
            <li>
            <IconButton className="iconButton" onClick={handleClickWeb}>
                    <LanguageIcon/>
                </IconButton> 
            </li>
            </ul>
        </div>
    );
}

export default Contact;
