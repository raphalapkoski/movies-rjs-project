import styled from "styled-components";

interface ContainerProps {
    backgroundImage: string
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    ${props => 
        { 
            return `background-image: url(${props.backgroundImage})` 
        }
    }
`

export const DetailsContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    opacity: 0.9;
    width: 100%;

    h1 {
        color: white;
        font-size: 30px;
    }

    strong {
        color: white;
        text-align: justify;
        font-size: 20px;
        width: 50%;
    }
`

export const ButtonContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
        width: 250px;
        height: 50px;
        border: none;
        font-weight: bold;
        border-radius: 15px;
        background-color: transparent;
        border: 1px solid white;
        cursor: pointer;
        color: white;
    
        a {
            cursor: pointer;
            color: whitesmoke;
            text-decoration: none;
        }
    }
`
