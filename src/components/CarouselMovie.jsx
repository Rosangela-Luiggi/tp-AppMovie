
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


export default function CarouselMovie() {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {

    axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es-ES`)
      .then(
        (data) => {
          setMovies(data.data.results);

        }).catch(error => console.log(error));

  }, [apiKey]);

  return (

    <Carousel showArrows={true} >
      {movies.map((movie) => (

        <div key={movie.id} style={{ height: "520px" }}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
          <Typography className="legend" style={{ fontSize: "15px", backgroundColor:"#e0e0e0", color: "#424242" }}>{movie.title}<br />{movie.overview}
          <Link to={`/detail/${movie.id}`} style={{ textDecoration: "none" }}>
          <Button variant="text">
            Ver Más</Button></Link>
            </Typography>

        </div>

      ))}

    </Carousel>



  );

}



