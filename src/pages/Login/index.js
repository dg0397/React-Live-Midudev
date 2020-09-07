import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter';
import useUser from 'hooks/useUser';

export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [, setPath] = useLocation();
    const { hasLoginError, isLoginLoading, isLogged, login } = useUser();

    useEffect(() => {
        if (isLogged) {
            setPath('/')
        }
    }, [isLogged, setPath])

    const handleSubmit = e => {
        e.preventDefault();
        login({ username, password })
    }

    const handleChange = e => {
        const { value, type } = e.target;

        type === 'text' ? setUserName(value) : setPassword(value)

    }

    return (
        <>
            <h2>
                Login
            </h2>
            { 
                isLoginLoading && <strong>Checking credentials... </strong>
            }
            {
                !isLoginLoading && <form onSubmit={handleSubmit} >
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder='username'
                        value={username} />
                    <input
                        onChange={handleChange}
                        type="password"
                        placeholder='password'
                        value={password} />
                    <button>Login</button>
                </form>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        </>
    )
}
