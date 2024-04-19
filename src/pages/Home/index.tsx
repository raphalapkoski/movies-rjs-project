import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import { getMoviesNowPlaying } from "../../services/movie.services";
import Warning from "../../shared/Warning";
import { Card, Container, Poster } from "./home.styled";

interface Movie {
    id: number,
    title: string,
    poster_path: string
}

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const loadMovies = async () => {
        const result = await getMoviesNowPlaying();
        setMovies(result.data.results);
    } 

    useEffect(() => { 
        loadMovies();
     }, []);

    if (movies.length == 0) {
        return <Warning message='Nenhum filme encontrado'/>
    }

    return (
        <Container>
            {movies.map((movie) => {
                return (
                    <Card key={movie.id}>
                        <Link to={`details/${movie.id}`}>
                            <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        </Link>
                    </Card>
                )
            })}
        </Container>
    )
}