import { useEffect, useState } from 'react'
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
                { candidatos.length > 0 ? candidatos.map((candidato) => (
                    <CandidatoRow
                        id={candidato.cpf} 
                        tarja={toggleTarja} 
                        name={candidato.name}
                    />    
                )): (<h2>Não há Candidatos</h2>)}
               
        </div>
    )
}