import './FormacaoInfo.css'
import './DadosPessoaisInfo.css'

export default function FormacaoInfo({formacoes}) {
    return(
        <div className='div-perfil'>
            <h5>Formação</h5>
            {formacoes.length > 0 ? formacoes.map((formacao, index) => (
                <div key={index} className='info-education'>
                    <span><label>Instituição: </label>{formacao.instituicao}</span>
                    <span><label>Curso: </label>{formacao.curso}</span>
                </div>
                )) : ('Sem formação')}

        </div>
    )
}