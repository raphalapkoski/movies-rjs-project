import './header.css'

import Navigation from '../Navigation'

export default function Header(){
    return(
        <header>
            <h1 className="title">Movies RJS</h1>
            <Navigation />
        </header>
    )
}