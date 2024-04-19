import { Code, Container, Message } from './not-found.styled';

export default function NotFound(){
    return (
        <Container>
            <Code>404</Code>
            <Message>Página não encontrada!</Message>
        </Container>
    );
}