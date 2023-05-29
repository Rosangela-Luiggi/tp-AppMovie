import CardMovie from './CardMovie'
import InputSearch from "./InputSearch"
import axios from "axios";
import { Container, Grid } from "@mui/material";
import { useState } from "react";


export default function Search() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [card, setCard] = useState([]);

 

let searchValue ="";

  function searchMovie(e) {
    e.preventDefault();
    searchValue= e.target.value;
    axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&languaje=es-ES&query=${searchValue}`)
      .then(
        (data) => {
          console.log(data)
          setCard(data.data.results);

        })
        .catch(error => console.log(error));
        
  }
  
  return (
    <Container >
      <InputSearch onSearch={searchMovie} />
      <Grid 

        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        width={"100%"}
        height="100vh"
      >
        {card &&
          card.map((elem) => (

            <Grid
              key={elem.id}
              item
              xs={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CardMovie
            key={elem.id}
                image={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                title={elem.title}
                id={elem.id}

              /> 

            </Grid>

          ))
        }


      </Grid>


    </Container>
  )
}

