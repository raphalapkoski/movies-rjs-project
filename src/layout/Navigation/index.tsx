import { NavLink } from "react-router-dom";

import { NavStyle } from "./navigation.styled";

export default function Navigation() {
    return (
        <NavStyle>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/favorites"> Meus Favoritos </NavLink>
        </NavStyle>
    )
}