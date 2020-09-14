import { Button } from 'Components/Button/styles';
import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

function Modal({children,onClose}) {
    return (
        <div className = 'modal' >
            <div className = 'modal-content' >
                <Button onClick = {onClose}>X</Button>
                {children}
            </div>
        </div>
    )
}

export default function ModalPortal({children,onClose}){
    return ReactDom.createPortal( <Modal onClose = {onClose} > {children} </Modal>, document.getElementById('modal-root') )
}
