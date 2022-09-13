import artworkPageImg from '../assets/images/pexels-merlin-lightpainting4.jpg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';

const Artwork = ({ photos }) => {
    
    const loading = () => {

        return (
            <>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </>
        );

    };

    const loaded = () => {

        return (
            <>

                <div className="artworkImgDiv" style={{ backgroundImage:`url(${artworkPageImg})`, backgroundRepeat: "no-repeat", backgroundSize:"cover" }}>
                    <div className="artworkH1Div">
                        <h1 className="artworkH1">Merlin Lightpainting</h1>
                    </div>
                </div>

                <div className="photographyH1Div">
                    <h1 className="photographyH1">Photography</h1>
                </div>

                <div className="photoContainer">
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
                                                <h2>
                                                    { photo.photoCollection }
                                                </h2>
                                                </CardContent>
                                            </Box>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 900, maxHeight: 700}}
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

            </>
        );
    };

    return photos ? loaded() : loading();
};

export default Artwork;