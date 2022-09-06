import './ResumoInfo.css'
import './DadosPessoaisInfo.css'

export default function ResumoInfo({resumo}) {
    return(
        <div className='div-perfil'>
            <h4>Resumo</h4>
            <p>{resumo}</p>
        </div>
    )
}