import { Link } from 'react-router-dom'
import './LinkButton.css'

export default function LinkButton({to, btnLabel, classCustom}) {
    return(
        <>
            <Link className={classCustom} to={to}>{btnLabel}</Link>
        </>
    )
}