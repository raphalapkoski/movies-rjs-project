import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header(){
    return(
        <header>
            <h1 className="title">Movies RJS</h1>
            <nav>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/favorites"> Meus Favoritos </NavLink>
            </nav>
            <span>Entrar</span>
        </header>
    )
}