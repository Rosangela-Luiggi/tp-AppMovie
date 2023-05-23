
import CardMovie from './CardMovie'
import axios from "axios";
import { useEffect, useState} from "react";
import { Grid, Box, Button } from "@mui/material";
/* import { useParams } from 'react-router-dom'; */






export default function ContainerHome() {
const apiKey = import.meta.env.VITE_API_KEY;
const [movie, setMovie] = useState([]);
const [page, setPage] = useState(1);
/* const {category} = useParams() */
 

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}
     
    `).then(
      (data) => {
        setMovie(data.data.results);
        console.log(data.data.re)
      }
    );
  
  
  }, [apiKey, page]);


  return (
    <Grid
      container
      paddingTop={"5rem"}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      { movie.map((elem) => (
           
            <Grid
              key={elem.id}
              item
              xs={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CardMovie
                image={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                name={elem.title}
               
              />
              
            </Grid>
            
          ))
        }

<Box display="flex" justifyContent="center" padding="10px">
        <Button sx={{backgroundColor: "black"}} mr="15px" ml="15px" onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button sx={{backgroundColor: "black"}} mr="15px" ml="15px" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Box>
      
    </Grid>
  );
}


