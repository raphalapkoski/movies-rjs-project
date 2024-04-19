import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import { ButtonContainer, Container, DetailsContainer } from './details.styled';

import { getMovieDetails } from '../../services/movie.services';

interface Movie {
    id: number,
    title: string,
    overview: string
    backdrop_path: string
    vote_average: number,
}

export default function Details() {

    let path = 'https://image.tmdb.org/t/p/original';
    let youtube = 'https://www.youtube.com/results?search_query';
    const { id } = useParams();
    const [movie, setMovie] = useState<Movie>(
        {
            id: 0, 
            title: '',
            backdrop_path: '', 
            overview: '', 
            vote_average: 0
        });

    useEffect(() => {
        loadDetails();
    });

    async function loadDetails() {
        const result = await getMovieDetails(id!);
        setMovie(result.data);
    }

    async function addFavorite() {
        const list = localStorage.getItem('@moviesrjs');
        
        let moviesSaved = list ? JSON.parse(list) : [];

        const movieExists = moviesSaved.some((m: { id: number; }) => m.id == movie.id);

        if(movieExists){
            alert('Este filme já está em sua lista de favoritos');
            return;
        }

        moviesSaved.push(movie);
        localStorage.setItem('@moviesrjs', JSON.stringify(moviesSaved));
        alert("Filme salvo em sua lista de favoritos");
    }

    return (
        <Container backgroundImage={`${path}/${movie.backdrop_path}`}>
            <DetailsContainer>
                <h1>{movie.title}</h1>
                <strong>{movie.overview}</strong>
                <strong className='vote'>Avaliação {movie.vote_average} / 10</strong>
            </DetailsContainer>
            <ButtonContainer>
                <button>
                    <a target='blank' href={`${youtube}=${movie.title} Trailer`}>Assistir trailer</a>
                </button>
                <button onClick={addFavorite}>Adicionar ao favoritos</button>
            </ButtonContainer>
        </Container>
    )
}