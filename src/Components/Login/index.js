import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter';
import useUser from 'hooks/useUser';
import './Login.css';
import { Button } from 'Components/Button/styles';

export default function Login({onLogin}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [, setPath] = useLocation();
    const { hasLoginError, isLoginLoading, isLogged, login } = useUser();

    useEffect(() => {
        if (isLogged) {
            setPath('/');
            onLogin && onLogin()
        }
    }, [isLogged, setPath,onLogin])

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
            {
                isLoginLoading && <strong style = {{color : "white"}} >Checking credentials... </strong>
            }
            {
                !isLoginLoading && <form  className = 'Form' onSubmit={handleSubmit} >
                    <label>
                        Username
                        <input
                        onChange={handleChange}
                        type="text"
                        placeholder='username'
                        value={username} />
                    </label>
                    <label>
                        Password
                        <input
                        onChange={handleChange}
                        type="password"
                        placeholder='password'
                        value={password} />
                    </label>
                    <Button>Login</Button>
                </form>
            }
            {
                hasLoginError && <strong style = {{color : "white"}}>Credentials are invalid</strong>
            }
        </>
    )
}
