import './CandidatoRow.css'
import '../layout/LinkButton.css'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CandidatoRow({name, id, tarja}) {
    return(
        <div className={`candidato-row ${tarja? 'tarjado': ''}`}>
            <span>{name}</span><Link className={`botao-ver primario`} to={'/perfil/'+id}><FaSearch/>Ver</Link>
        </div>
    )
}