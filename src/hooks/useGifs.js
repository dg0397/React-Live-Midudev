import {useContext,useEffect,useState} from 'react';
import getGifs from "services/getGifs"
import GifsContext from 'context/GifsContext';

const INITIAL_PAGE = 0;


export default function useGifs({keyword} = {keyword : null}){
    const {gifs, setGifs} = useContext(GifsContext);
    const [loading,setLoading] = useState(false);

    const [page,setPages] = useState(INITIAL_PAGE);
    const [loadingNextPage,setLoadingNextPage] = useState(false);

    
    //Getting keyword of LocalStorage
    const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') ? localStorage.getItem('lastKeyword') : "American";

    useEffect(() => {
        getGifs(setGifs,setLoading,{keyword : keywordToUse })
        //Setting keyword in LocalStorage
        localStorage.setItem('lastKeyword',keywordToUse);
    }, [keywordToUse,setGifs]);
    

    useEffect(() => {
        if(page === INITIAL_PAGE) return;

        getGifs(setGifs,setLoadingNextPage,{keyword : keywordToUse, page})
    },[page,keywordToUse,setGifs])

    return {loading,loadingNextPage,gifs,setPages}
}