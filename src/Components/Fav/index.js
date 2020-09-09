import React, { useState , useCallback } from 'react'
import useUser from 'hooks/useUser';

import './Fav.css';

import Modal from 'Components/Modal';
import Login from 'Components/Login';

export default function Fav({id}) {
    const {isLogged,addFav,favs} = useUser() ;
    const [showModal,setShowModal] = useState(false)

    const isFaved = favs.some(favId => favId === id)

    const handleClick = e => {
        if(!isLogged){
            return setShowModal(true)
        }else if(!isFaved){
            addFav({id})
        }
    }

    const handleClose = useCallback(
        () => {
            setShowModal(false)
        },
        [setShowModal],
    );

    const handleLogin = useCallback(
        () => {
            setShowModal(false)
        },
        [setShowModal],
    )

    const [label , emogi] = isFaved ? ['Remove gif from favorites','❌'] : ['Add Gif from favorites', '❤️']

    return (
        <>
            <button onClick = {handleClick} className = "Fav">
                <span aria-label = {label} role = "img" >
                    {emogi}
                </span>
            </button>
            {
                showModal && <Modal onClose = {handleClose} >{<Login onLogin = {handleLogin} />}</Modal>
            }
        </>
    )
}
