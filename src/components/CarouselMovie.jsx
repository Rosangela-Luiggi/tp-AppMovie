
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CarouselMovie() {
  const [movies, setMovies] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {

    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES`)
      .then(
        (data) => {
          setMovies(data.data.results);

        });



  }, [apiKey]);

  return (

    <Carousel>
      {movies.map((movie) => (

        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
          <p className="legend" style={{fontSize:"18px"}}>{movie.title} <br/>{movie.overview}</p>
          
        </div>

      ))}

    </Carousel>

  );

}



