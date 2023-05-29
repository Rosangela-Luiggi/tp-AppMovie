import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Card, CardMedia, CardActionArea, Typography } from "@mui/material";
import axios from "axios";



export default function ContainerDetails() {

    const [details, setDetails] = useState([]);
    const { id } = useParams()
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {

        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`)
            .then(
                (data) => {
                    console.log(data)
                    setDetails(data.data);

                }).catch(error => console.log(error));


       
    }, [id, apiKey]);

    
    
    
    return (

        <Container key={details.id} sx={{display:"flex", marginTop: 15}}>
            
          
                <Box maxWidth="50%">
                    <Card sx={{ maxWidth: 245 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                                alt="poster de pelicula"
                            />
                        </CardActionArea>
                    </Card>
                </Box>
                <Box display="flex" flexDirection= "column" maxWidth="50%">
                    <Typography>Titulo:{details.title}</Typography>
                    <Typography>{details.release_date}</Typography>
                    <Typography> {details.overview}</Typography>
                </Box>
           



        </Container>



    )
}
