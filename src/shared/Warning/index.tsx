import { MessageContainer } from './warning.styles'

interface WarningProps {
    message: string
}

export default function Warning(params: WarningProps){
    return (
        <MessageContainer className="message">
            <span className='material-symbols-outlined'>mood_bad</span>
            <h1>{params.message}</h1>
        </MessageContainer>
    )
}