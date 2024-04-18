import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import './details.css'

import api from '../../services/api';

export default function Details() {

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
        <div className="container">
            <img src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} alt={details.title} />
            <div className="information">
                <h1>{details.title}</h1>
                <p>{details.overview}</p>
            </div>
        </div>
    )
}