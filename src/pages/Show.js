import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

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
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    <LinearProgress color="inherit" />
                </Stack>
            </>
        )
    };

    const loaded = () => {

    return (
            <div className="showImage" >
                <Card sx={{ display: 'flex' }}>
                    <Box className="cardContent" sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
                        <CardContent  sx={{ flex: '1 0 auto', backgroundColor:'black'}}>
                        <Typography sx={{color:'rgb(213, 213, 213)'}} component="div" variant="h3">
                            { image.title }
                        </Typography>
                        <Typography variant="h5" color="rgb(213, 213, 213)" component="div">
                            { image.photoCollection }
                        </Typography>
                        <Typography variant="h6" color="rgb(213, 213, 213)" component="div">
                            { image.dateAdded }
                        </Typography>
                        <button onClick={handleDelete}>Delete</button>
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
        )        
    }

    return photos ? loaded() : loading();

}

export default Show;
