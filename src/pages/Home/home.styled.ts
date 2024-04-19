import styled from "styled-components"

export const Container = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 100%;
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: center;
`

export const Card = styled.article`
    width: 100%;
`

export const Poster = styled.img`
    width: 100%;
    object-fit: contain;
`