import styled from "styled-components"

export const MessageContainer = styled.div`
    height: calc(80vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h1 {
        text-align: center;
        color: white;
    }
    
    span {
        color: white;
        font-size: 150px;
    }
`