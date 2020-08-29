import {API_KEY,API_URL} from "./settings";

export default function gerSingleGif(setState,setStatus,errorControler,{id}){
    setStatus(true)
    fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
        .then(data => data.json())
        .then(gif => {
            const {data} = gif
            //console.log(data)
            console.log("Fetching single gif")
            
            const {images,title,id} = data;
            const {url} = images.downsized_medium;
            const singleGif =  {url,id,title};
            
            setState(singleGif);
            setStatus(false)
            errorControler(false);
        
        }).catch(err => {
            console.log("There is an error")
            setStatus(false);
            errorControler(true)
        })
}