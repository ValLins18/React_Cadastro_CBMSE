import './CompetenciasInfo.css'
import './DadosPessoaisInfo.css'

export default function CompetenciasInfo({competencias}) {

    return(
        <div className='div-perfil'>
            <h5 className='mb-2'>Competencias</h5>
            {competencias.length > 0 ? competencias.map((competencia, index) => (
                <span key={index} className='competencias'>{competencia}</span>
            )): ('sem competencia')}
        </div>
    )
}