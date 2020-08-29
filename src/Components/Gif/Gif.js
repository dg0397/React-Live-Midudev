import React from 'react';
import './Gif.css'
import {Link} from 'wouter'

function Gif({ title, url,id }) {
    return (
        <Link to = {`/gif/${id}`}>
            <div className="Gif">
                <p>{title}</p>
                <img src={url} alt={title} />
            </div>
        </Link>
    )
}

export default React.memo(Gif)