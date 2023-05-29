import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Card, CardMedia, CardActionArea, Typography, Button, Stack, } from "@mui/material";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";



export default function ContainerDetails() {
    let [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const { id } = useParams()
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {

        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`)
            .then(
                (data) => {
                    console.log(data)
                    setDetails(data.data);
                    setLoading(false);


                }).catch(error => console.log(error));



    }, [id, apiKey]);




    return (
        <Box sx={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${details.backdrop_path}')`,
            height: "100vh", backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover", width: "100vw", m: 0,
        }}>
            <Box display="flex" p="155px"  sx={{gap: 6}}>

                <Box maxWidth="50%">
                    <Card sx={{ maxWidth: 245 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={`https://image.tmdb.org/t/p/w1280/${details.poster_path}`}
                                alt="poster de pelicula"
                            />
                        </CardActionArea>
                    </Card>
                </Box>

                <Box display="flex" flexDirection="column" maxWidth="50%" sx={{fontWeight: "bold", color: "white"}}>
                    <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="stretch"
                        spacing={2}
                    >
                        <Typography variant="h2" >{details.title}</Typography>
                        <Typography variant="subtitle3"> Fecha de estreno: {details.release_date}</Typography>
                        <Typography variant="body2"> {details.overview}</Typography>
                    </Stack>
                </Box>

                <Link to={`/trailer/${details.id}`} style={{ textDecoration: "none" }}>
                    <Box >
                        <Button variant="text" sx={{fontWeight: "bold", color: "white" }}><SlideshowIcon /> VerTrailer </Button>
                    </Box>
                </Link>
            </Box>
            <PuffLoader
                color="blue"
                loading={loading}
                size={125}
                aria-label="Loading Spinner"
                data-testid="loader"
                width={50}
            />


        </Box>
    )
}
