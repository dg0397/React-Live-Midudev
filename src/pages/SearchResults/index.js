import React,{useRef, useEffect, useCallback} from 'react';

import Spinner from "Components/Spinner";
import GifsList from 'Components/GifsList/GifsList';

import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

export default function SearchResults({params}){
    const {gifs,loading,setPages} = useGifs(params);
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({externalRef : loading ? null : externalRef,once : false, distance : "250px"});
    const {keyword} = params


   const deboundeHandleNextPage = useCallback(debounce(
        () => setPages(prevState => prevState + 1), 200
    ),[setPages]); 

   useEffect(()=> {
        console.log(isNearScreen)
       if(isNearScreen) deboundeHandleNextPage()
   },[isNearScreen,deboundeHandleNextPage])

   const title = gifs ?  `${gifs.length} resultados de ${decodeURI(keyword)}` : '';

    if(loading){
        return(
            <Helmet>
                <title>Loading...</title>
            </Helmet>
        )
    }
    
    return(
        <>
        {
            loading ?
            <Spinner /> :
            <>  
                <Helmet>
                    <title>{title}</title>
                    <meta
                        name="description"
                        content={title}
                    />
                    <meta
                    name="rating"
                    content="General"
                    />
                </Helmet>
                <h3 className = "App-title" >{decodeURI(keyword).toUpperCase()}</h3>
                <GifsList gifs = {gifs}  />
                <div className = "viewfinder" ref = {externalRef}></div>
            </>
        }
        </>
        
    )
}