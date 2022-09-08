import { useState } from 'react'
import './Form.css'
import Input from './Input'

export default function Form({handleOnSubmit}){

    const [candidato, setCandidato] = useState({})

    function handleOnChange(e){
        setCandidato({...candidato, [e.target.name]:e.target.value})
        console.log(candidato)
    }

    return(
        <form onSubmit={handleOnSubmit}>
                <Input 
                    name={'name'}
                    inputLabel={'Nome'}
                    type={'text'}
                    handleOnChange={handleOnChange}
                />
                <Input 
                    name={'cpf'}
                    inputLabel={'CPF'}
                    type={'text'}
                    handleOnChange={handleOnChange}
                />
                <Input 
                    name={'data_nascimento'}
                    inputLabel={'Data de Nascimento'}
                    type={'date'}
                    handleOnChange={handleOnChange}
                />
                <Input 
                    name={'signo'}
                    inputLabel={'Signo'}
                    type={'text'}
                    handleOnChange={handleOnChange}
                />
                <Input 
                    name={'tipo_sanguineo'}
                    inputLabel={'Tipo Sanguineo'}
                    type={'text'}
                    handleOnChange={handleOnChange}
                />
                <Input 
                    name={'email'}
                    inputLabel={'E-mail'}
                    type={'text'}
                    handleOnChange={handleOnChange}
                />
                <Input 
                    name={'telefone'}
                    inputLabel={'Telefone'}
                    type={'text'}
                    handleOnChange={handleOnChange}
                />
            </form>
    )
}