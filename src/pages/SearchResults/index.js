import React from 'react';

import Spinner from "Components/Spinner";
import GifsList from 'Components/GifsList/GifsList';

import useGifs from 'hooks/useGifs'

export default function SearchResults({params}){
    const {gifs,loading,setPages} = useGifs(params);
    const {keyword} = params

    const handleNextPage = () => {
        setPages(prevState => prevState + 1)
    }

    return(
        <>
        {
            loading ?
            <Spinner /> :
            <>
                <h3 className = "App-title" >{decodeURI(keyword).toUpperCase()}</h3>
                <GifsList gifs = {gifs}  />
            </>
        }
        <button onClick = {handleNextPage} >Get next page</button>
        </>
        
    )
}