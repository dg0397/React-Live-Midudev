import React from 'react'
import Login from 'Components/Login'

export default function LoginPage(){
    return (
        <div  style = {{textAlign:"left",width:'100%', maxWidth : '450px'}} >
            <h2 style = {{textAlign:"left",width:'100%'}} >Login</h2>
            <Login />
        </div>
    )
}