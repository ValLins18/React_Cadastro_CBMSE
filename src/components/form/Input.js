import './Input.css'

export default function Input({inputLabel, type, name, handleOnChange}){
    return(
        <div className='form-group' id={'group-'+name}>
            <label htmlFor={name}>{inputLabel} </label>
            <input 
                type={type}
                name={name}
                id={name}
                onChange={handleOnChange}
            />
       </div>
    )
}