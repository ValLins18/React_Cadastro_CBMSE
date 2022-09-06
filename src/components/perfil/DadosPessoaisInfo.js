import './DadosPessoaisInfo.css'

export default function DadosPessoaisInfo({nome, cpf, sangue, tel, email, nasc, signo}) {
    return(
        <div className='div-perfil'>
            <div className='info-group'>
                <span><label>Nome: </label>{nome}</span>
            </div>
            <div className='info-group'>
                <span><label>CPF: </label>{cpf}</span> 
                <span><label>Data de Nascimento: </label>{nasc}</span> 
                <span><label>Signo: </label>{signo}</span>
            </div>
            <div className='info-group'>
                <span><label>Tipo Sanguineo: </label>{sangue}</span>
            </div>
            <div className='info-group'>
                <span><label>E-mail: </label>{email}</span>
                <span><label>Telefone: </label>{tel}</span>
            </div>
        </div>
    )
}