import React from 'react';

import Spinner from "../../Components/Spinner";
import GifsList from '../../Components/GifsList/GifsList';

import useGifs from '../../hooks/useGifs'

export default function SearchResults({params}){
    const {gifs,loading} = useGifs(params);
    return(
        <>
        {
            loading ?
            <Spinner /> :
            <GifsList gifs = {gifs}  />
        }
        </>
        
    )
}