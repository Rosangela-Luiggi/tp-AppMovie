import {
  
  Container,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  
  List, ListSubheader
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from 'react';


export default function ListMovie() {

    const apiKey = import.meta.env.VITE_API_KEY;
    const [moviesPopular, setMoviePopular] = useState([]);
    
    

    
    useEffect(() => {
      
        axios(`https://api.themoviedb.org/3/movie/popular?language=es-ES&api_key=${apiKey}`)
          .then(
            (data) => {
                setMoviePopular(data.data.results);
    
            });
    
    }, [ apiKey]);


    
  return (
    <Container>
         <List
      sx={{
        width: '100%',
        maxWidth: 360,
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
                  <ListItemText  />
                  {movie.title}
                </ListItem>
                  ))}
          
       
    </List>
      
    </Container>
  );
}
