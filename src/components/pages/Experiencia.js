import './Experiencia.css'
import './DadosPessoais.css'
import DadosPessoaisIcon from '../../img/dadosPessoaisIcon.svg';
import ExperienciaIcon from '../../img/experienciaIcon.svg';
import ResumoIcon from '../../img/resumoIcon.svg';
import Form from '../form/Form';
import LinkButton from '../layout/LinkButton'


export default function Experiencia() {
    return(
        <div className='dados-pessoais'>
            
            
            
            <div className='progresso'>
                <div className='circulo-estacao filling'>
                    <img src={DadosPessoaisIcon} alt='dados pessoais'/>
                </div>
                <div className='barra to-fill'></div>
                <div className='circulo-estacao to-fill'>
                    <img src={ExperienciaIcon} alt='experiencia'/>
                </div>
                <div className='barra to-fill'></div>
                <div className='circulo-estacao to-fill'>
                    <img src={ResumoIcon} alt='resumo'/>
                </div>
            </div>
            
            
            
            <h1>Dados Pessoais</h1>
            <Form/>
            <div className='group-btn'>
                <LinkButton to={'/'} btnLabel={'Voltar'} classCustom={'botao secundario botao-voltar'} />
                <LinkButton to={'/experiencia'} btnLabel={'Próximo'} classCustom={'botao primario botao-voltar'}/>
            </div>
        </div>
    )
}