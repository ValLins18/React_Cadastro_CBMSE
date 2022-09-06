import { useEffect, useState } from 'react'
import LinkButton from '../layout/LinkButton'
import CandidatoRow from '../candidato/CandidatoRow'
import './Candidatos.css'

export default function Candidatos() {

    const [candidatos, setCandidatos] = useState([])
    const [tarja, setTarja] = useState(false)

    function toggleTarja() {
        setTarja(!tarja)
    }
    useEffect(() => {
        fetch('http://localhost:5000/perfil/')
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            setCandidatos(json)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div className='lista-candidatos'>
            <h1>Candidatos</h1>
                { candidatos.length > 0 ? candidatos.map((candidato, index) => (
                    <CandidatoRow
                        id={candidato.cpf} 
                        tarja={toggleTarja} 
                        name={candidato.name}
                        key={index}
                    />    
                )): (<h2>Não há Candidatos</h2>)}
            <LinkButton to={'/'} btnLabel={'Voltar'} classCustom={'botao primario botao-voltar'}/>
        </div>
    )
}