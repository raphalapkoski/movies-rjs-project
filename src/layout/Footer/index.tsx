import { FooterStyle, IdentityStyle } from './footer.styled';

export default function Footer() {
    return (
        <FooterStyle>
            <IdentityStyle>Desenvolvido por Raphael L. Mazanek</IdentityStyle>
            <span className='material-symbols-outlined'>devices</span>
        </FooterStyle>
    );
}