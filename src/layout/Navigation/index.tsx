import { NavLink } from "react-router-dom";

import './navigation.css'

export default function Navigation() {
    return (
        <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/favorites"> Meus Favoritos </NavLink>
        </nav>
    )
}