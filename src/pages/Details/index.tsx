import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import './details.css'

import api from '../../services/api';

export default function Details() {

    let path = 'https://image.tmdb.org/t/p/original';
    let youtube = 'https://www.youtube.com/results?search_query';
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        loadDetails();
    });

    async function loadDetails() {
        await api.get(`/movie/${id}`, {
            params: {
                api_key: "f18f7cd7a1d32a95a4b9332ec74bc8ab",
                language: "pt-BR",
            }
        }).then((response) => {
            setMovie(response.data);
        }).catch(() => {
            console.log("erro")
        });
    }

    async function addFavorite() {
        const list = localStorage.getItem('@moviesrjs');
        
        let moviesSaved = list ? JSON.parse(list) : [];

        const movieExists = moviesSaved.some((movie) => movie.id == movie.id);

        if(movieExists){
            alert('Este filme já está em sua lista de favoritos');
            return;
        }

        moviesSaved.push(movie);
        localStorage.setItem('@moviesrjs', JSON.stringify(moviesSaved));
        alert("Filme salvo em sua lista de favoritos");
    }

    return (
        <div className='container' style={{ backgroundImage: `url(${path}/${movie.backdrop_path})` }}>
            <div className='details-text-align'>
                <h1>{movie.title}</h1>
                <strong>{movie.overview}</strong>
                <strong className='vote'>Avaliação {movie.vote_average} / 10</strong>
            </div>
            <div className='buttons-align'>
                <button>
                    <a target='blank' href={`${youtube}=${movie.title} Trailer`}>Assistir trailer</a>
                </button>
                <button onClick={addFavorite}>Adicionar ao favoritos</button>
            </div>
        </div>
    )
}