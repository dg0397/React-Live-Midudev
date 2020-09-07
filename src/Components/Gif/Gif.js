import React from 'react';
import './Gif.css'
import { Link } from 'wouter'
import Fav from 'Components/Fav';

function Gif({ title, url, id }) {
    return (
        <div className="Gif">
            <Fav id={id} />
            <div className = "Gif-content" >
                <Link to={`/gif/${id}`}>
                    <p>{title}</p>
                    <img src={url} alt={title} />
                </Link>
            </div>
        </div>
    )
}

export default React.memo(Gif)