import ModalTrailer from './ModalTtailer'

import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";


export default function TrailerMovie() {

    const { id } = useParams();
    const [trailer, setTrailer] = useState({ results: [] });
    const apiKey = import.meta.env.VITE_API_KEY;
    let videos = [];

    trailer.results.map((elem) => {
        if (elem.name.includes("trailer") || (elem.name.includes("Trailer"))) {
            videos.push(elem.key);
        }

    });

    useEffect(() => {
        axios(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        )
            .then((data) => {
                let allData = data.data;
                setTrailer(allData);
            })

            .catch((error) => console.log(error));
    }, [id, apiKey]);

    return (
        <Container
            sx={{
                bgcolor: "black",
                height: "100vh",
                minWidth: "100%",
                padding: "200px",
            }}
        >
            <ModalTrailer video={videos} />
        </Container>
    );
}