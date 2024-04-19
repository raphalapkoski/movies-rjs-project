import { useState, useEffect, Suspense } from "react"
import { Link } from "react-router-dom";

import './home.css'

import api from "../../services/api"
import Warning from "../../shared/Warning";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => { loadMovies(); }, []);

    async function loadMovies() {
        const response = await api.get("/now_playing", {
            params: {
                api_key: "c1205111bb4dc67b34e32c2ac3dddd67",
                language: "pt-BR",
                page: 1
            }
        });
        setMovies(response.data.results);
    }

    if (movies.length == 0) {
        return <Warning message='Nenhum filme encontrado'/>
    }

    return (
        <div className="list-movies">
            {movies.map((movie) => {
                return (
                    <article key={movie.id}>
                        <Link to={`details/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        </Link>
                    </article>
                )
            })}
        </div>
    )
}