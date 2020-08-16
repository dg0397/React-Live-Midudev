import React from 'react';
import useGlobalGifs from '../../hooks/useGlobalGifs';
import Gif from '../../Components/Gif/Gif';

export default function Detail({params}){
    const gifs = useGlobalGifs();
    
    const gif = gifs.find(singleGif => singleGif.id === params.id) ? 
                gifs.find(singleGif => singleGif.id === params.id) : 
                localStorage.getItem('lastSingleGif');

    localStorage.setItem('lastSingleGif',gif.url)
    console.log(gif)
    return(
        <Gif  {...gif}/>
    )
}