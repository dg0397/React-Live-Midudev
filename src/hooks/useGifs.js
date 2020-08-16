import {useContext,useEffect,useState} from 'react';
import getGifs from "../services/getGifs"
import GifsContext from '../context/GifsContext';


export default function useGifs({keyword} = {keyword : null}){
    const {gifs, setGifs} = useContext(GifsContext);
    const [loading,setLoading] = useState(false)
    //Getting keyword of LocalStorage
    const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') ? localStorage.getItem('lastKeyword') : "American";

    useEffect(() => {
        getGifs(setGifs, keywordToUse,setLoading)
        //Setting keyword in LocalStorage
        localStorage.setItem('lastKeyword',keywordToUse)
    }, [keywordToUse,setGifs]);
    
    return {loading,gifs}
}