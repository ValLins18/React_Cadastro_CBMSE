import './Perfil.css'
import '../layout/LinkButton.css'
import LinkButton from '../layout/LinkButton'
import DadosPessoaisInfo from '../perfil/DadosPessoaisInfo'
import ResumoInfo from '../perfil/ResumoInfo'
import FormacaoInfo from '../perfil/FormacaoInfo'
import CompetenciasInfo from '../perfil/CompetenciasInfo'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Perfil() {
    const {id} = useParams()

    const [candidato, setCandidato] = useState([])
    const [formacoes, setFormacoes] = useState([])
    const [competencias, setCompetencias] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/perfil/'+id)
        .then(resp => resp.json())
        .then(json => {
            setCandidato(json)
            setFormacoes(json.formacoes)
            setCompetencias(json.competencias)
        })
        .catch(err => console.log(err))
    }, [id])

    console.log(competencias)
    return(
        <div className='perfil'>
            {candidato.name ? (<h1>{candidato.name}</h1>) : (<h1>{'Sem info'}</h1>)}
            <DadosPessoaisInfo
                cpf={candidato.cpf}
                email={candidato.email}
                nome={candidato.name}
                nasc={candidato.data_nascimento}
                sangue={candidato.tipo_sanguineo}
                signo={candidato.signo}
                tel={candidato.telefone}
            />
            <ResumoInfo
                resumo={candidato.resumo}
            />
            <FormacaoInfo
                formacoes={formacoes}
            />
            <CompetenciasInfo competencias={competencias}/>
            <LinkButton to={'/candidatos'} btnLabel={'Voltar'} classCustom={'botao primario botao-voltar'}/>
        </div>
    )
}