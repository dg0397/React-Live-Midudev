import useGlobalGifs from "./useGlobalGifs";
import { useEffect,useState } from "react";
import getSingleGif from "services/getSingleGif"

export default function useSingleGif({id}){
    const gifs = useGlobalGifs();
    const gifFromCache = gifs.find(singleGif => singleGif.id === id);

    const [singleGif,setSingleGif] = useState(gifFromCache);
    const [loadingSingleGif,setLoadingSingleGif] = useState(false);
    const [isError,setIsError] = useState(false)
  
    useEffect(()=>{
        if(!singleGif){
            console.log("singleGif")
            getSingleGif(setSingleGif,setLoadingSingleGif,setIsError,{id})
        }
    },[id,singleGif]);
               
    return {singleGif,loadingSingleGif,isError}
}