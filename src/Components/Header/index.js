import React from 'react'
import useUser from 'hooks/useUser';
import { Link, useRoute } from 'wouter'
import './index.css'

function Header() {
    const { isLogged, logout } = useUser();
    const [match] = useRoute('/login');

    const handleClick = (e) => {
        //e.preventDefault()
        logout()
    }

    return (
        <>
            { !match && <header className="gf-header" >
                {isLogged && <Link to='/' onClick={handleClick} > Logout </Link>}
                {!isLogged && <Link to='/login' > Login </Link>}
                <Link to='/register' > Register </Link>
            </header>}
        </>
    )
}

export default React.memo(Header)