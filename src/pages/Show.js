import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';


const Show = ({ photos, deletePhoto }) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const image = photos ? photos.find(s => s._id === id) : null;

    const handleDelete = () => {
        deletePhoto(id);
        navigate('/mslp')
    };

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
            <div className="showPageContainer">

                <div className="showImage" >
                    <Card sx={{ display: 'flex' }}>
                        <Box className="cardContent" sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                            <CardContent sx={{ flex: '1 0 auto', backgroundColor:'black'}}>
                                <h2 className="showImageH2">
                                    { image.title }
                                </h2>
                                <h2 className="showImageH2">
                                    { image.photoCollection }
                                </h2>
                                <h2 className="showImageH2">
                                    { image.dateAdded }
                                </h2>
                                <button className="submitButton" onClick={handleDelete}>Delete</button>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 900, maxHeight: 800}}
                            image={image.image}
                            alt="album cover"
                        />
                    </Card>
                </div>
                
            </div>
        ); 

    };

    return photos ? loaded() : loading();

};

export default Show;
