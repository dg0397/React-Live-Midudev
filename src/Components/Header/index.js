import React from 'react'
import useUser from 'hooks/useUser';
import { Link } from 'wouter'
import './index.css'

function Header() {
    const {isLogged,logout} = useUser();

    const handleClick = (e) => {
        //e.preventDefault()
        logout()
    }

    return (
        <header className = "gf-header" >
            { isLogged && <Link to = '/' onClick = {handleClick} > Logout </Link>}
            {! isLogged && <Link to = '/login' > Login </Link>}
        </header>
    )
}

export default React.memo(Header)