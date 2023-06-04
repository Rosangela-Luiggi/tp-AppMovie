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
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

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

                }).catch(error => console.log(error));

    }, [apiKey]);



    return (
        <Container maxWidth="100%" sx={{ marginTop: 10, marginBottom: 10 }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={8}
                justifyContent="center"
            >
                <Box sx={{ border: 2 }}>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 400,
                            padding: 0

                        }}

                    >

                        <ListSubheader sx={{ fontSize: "20px", textAlign: "center", fontWeight: "bold", color: "blue", padding: "6px" }} >Peliculas más Populares < MovieCreationIcon /></ListSubheader>

                        {moviesPopular.map((movie) => (

                            <ListItem key={movie.id}>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                </ListItemAvatar>
                                <ListItemText />
                                {movie.title}
                                <Link to={`/detail/${movie.id}`} style={{ textDecoration: "none" }}>
                                    <IconButton edge="end" aria-label="comments" sx={{ ml: 6 }}>
                                        <ArrowCircleRightOutlinedIcon />
                                    </IconButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>



                <Box sx={{ border: 2 }}>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 400,
                            padding: 0

                        }}

                    >

                        <ListSubheader sx={{ fontSize: "20px", textAlign: "center", fontWeight: "bold", color: "blue", padding: "6px" }} >Peliculas con mejor puntiación <MovieFilterIcon /></ListSubheader>

                        {moviesPuntuacion.map((movie) => (

                            <ListItem key={movie.id}>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                </ListItemAvatar>
                                <ListItemText />
                                {movie.title}
                                <Link to={`/detail/${movie.id}`} style={{ textDecoration: "none" }}>
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
