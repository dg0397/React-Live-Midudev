import React from 'react'
import Register from 'Components/Register'

export default function RegisterPage() {
    return (
        <div  style = {{textAlign:"left",width:'100%', maxWidth : '450px'}} >
            <h2 style = {{textAlign:"left",width:'100%'}} >Register Form</h2>
            <Register />
        </div>
    )
}
