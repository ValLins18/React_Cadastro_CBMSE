import './TrabalheConosco.css'
import logo from '../../img/Brasão_CBM_SE 1.png'
import LinkButton from '../layout/LinkButton'

export default function TrabalheConosco() {
    return(
        <div className='trabalhe-conosco'>
            <img src={logo} alt="logo"/>
            <h1>Trabalhe Conosco</h1>
            <LinkButton classCustom={'botao primario arredondado'} to={'/dadospessoais'} btnLabel={'Cadastrar-se'} />
            <LinkButton classCustom={'botao secundario arredondado'} to={'/candidatos'} btnLabel={'Ver Concorrentes'} />
        </div>
    )
}
