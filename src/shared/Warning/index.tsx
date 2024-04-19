import './warning.css'

export default function Warning(params){
    return (
        <div className="message">
            <span className='material-symbols-outlined'>mood_bad</span>
            <h1>{params.message}</h1>
        </div>
    )
}