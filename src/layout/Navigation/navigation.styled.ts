import styled from "styled-components";

export const NavStyle = styled.nav`
    display: flex;
    gap: 2rem;
    margin-right: 5rem;

    a {
        color: gainsboro;
        text-decoration: none;
        font-size: 20px;
        cursor: pointer;     
    }

    a:hover {
        color: white;
    }
`