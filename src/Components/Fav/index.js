import React from 'react'
import useUser from 'hooks/useUser'
import './Fav.css'
import { useLocation } from 'wouter'

export default function Fav({id}) {
    const {isLogged,addFav,favs} = useUser() 
    const [,setPath] = useLocation()

    const isFaved = favs.some(favId => favId === id)

    const handleClick = e => {
        if(!isLogged){
            setPath('/login')
        }else if(!isFaved){
            addFav({id})
        }
    }

    const [label , emogi] = isFaved ? ['Remove gif from favorites','❌'] : ['Add Gif from favorites', '❤️']

    return (
        <button onClick = {handleClick} className = "Fav">
            <span aria-label = {label} role = "img" >
                {emogi}
            </span>
        </button>
    )
}
