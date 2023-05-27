import {
    Box,
    Container,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    List, ListSubheader, IconButton, Stack
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function ListMovie() {

    const apiKey = import.meta.env.VITE_API_KEY;
    const [moviesPopular, setMoviePopular] = useState([]);
    const [moviesPuntuacion, setMoviePuntuacion] = useState([]);




    useEffect(() => {

        axios(`https://api.themoviedb.org/3/movie/popular?language=es-ES&api_key=${apiKey}`)
            .then(
                (data) => {
                    setMoviePopular(data.data.results);

                });

    }, [apiKey]);

    useEffect(() => {

        axios(`https://api.themoviedb.org/3/movie/top_rated?language=es-ES&api_key=${apiKey}`)
            .then(
                (data) => {
                    setMoviePuntuacion(data.data.results);

                });

    }, [apiKey]);



    return (
        <Container >
            <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
  justifyContent ="center"
>
            <Box sx={{ borderColor: 'primary.main', border: 1, margin: 10}}> 
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 480,
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 300,
                        '& ul': { padding: 0 },
                    }}

                >

                    <ListSubheader>Lista de Peliculas Populares</ListSubheader>

                    {moviesPopular.map((movie) => (

                        <ListItem key={movie.id}>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                            </ListItemAvatar>
                            <ListItemText />
                            {movie.title}
                            <Link to={`/search`} style={{ textDecoration: "none" }}>
                                <IconButton edge="end" aria-label="comments" sx={{ ml: 6 }}>
                                    <ArrowCircleRightOutlinedIcon />
                                </IconButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Box>

         

            <Box sx={{ borderColor: 'primary.main', border: 1, margin: 10}}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 580,
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 300,
                        '& ul': { padding: 0 },
                    }}

                >

                    <ListSubheader>Lista de Peliculas Populares</ListSubheader>

                    {moviesPuntuacion.map((movie) => (

                        <ListItem key={movie.id}>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                            </ListItemAvatar>
                            <ListItemText />
                            {movie.title}
                            <Link to={`/search`} style={{ textDecoration: "none" }}>
                                <IconButton edge="end" aria-label="comments" sx={{ ml: 6 }}>
                                    <ArrowCircleRightOutlinedIcon />
                                </IconButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Box>

            </Stack>
        </Container>
    );
}
