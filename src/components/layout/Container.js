import './Container.css'

export default function Container(props) {
    return(
        <div className="center-box">
            {props.children}
        </div>  
    )
}
