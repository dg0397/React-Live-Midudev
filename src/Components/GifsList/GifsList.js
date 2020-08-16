import React from 'react';
import Gif from '../Gif/Gif';
import './GifsList.css'


export default function GifsList({gifs} ) {
    return (
        <div className = 'GifsList'>
            {gifs.map(({ title, id, url }) => {
                return (
                    <Gif
                        title={title}
                        url={url}
                        id = {id}
                        key={id}
                    />
                )
            })}
        </div>
    )
}
