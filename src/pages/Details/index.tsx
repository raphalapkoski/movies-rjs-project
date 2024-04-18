import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import './details.css'

import api from '../../services/api';

export default function Details() {

    let path = 'https://image.tmdb.org/t/p/original';
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        loadDetails();
    });

    async function loadDetails() {
        await api.get(`/${id}`, {
            params: {
                api_key: "c1205111bb4dc67b34e32c2ac3dddd67",
                language: "pt-BR",
            }
        }).then((response) => {
            setDetails(response.data);
        }).catch(() => {
            console.log("erro")
        });
    }

    return (
        <div className='container' style={{ backgroundImage: `url(${path}/${details.backdrop_path})` }}>
            <div className='details-text-align'>
                <h1>{details.title}</h1>
                <strong>{details.overview}</strong>
                <strong className='vote'>Avaliação {details.vote_average}/10</strong>
            </div>
            <div className='buttons-align'>
                <button>Assistir trailer</button>
                <button>Adicionar ao favoritos</button>
            </div>
        </div>
    )
}