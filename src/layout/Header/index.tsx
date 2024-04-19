import Navigation from '../Navigation'
import { HeaderStyle, TitleStyle } from './header.styled'

export default function Header(){
    return(
        <HeaderStyle>
            <TitleStyle>Movies RJS</TitleStyle>
            <Navigation />
        </HeaderStyle>
    )
}