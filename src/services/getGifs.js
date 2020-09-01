import {API_KEY,API_URL} from "./settings";

export default function getGifs(setState,setStatus,{limit = 15 , keyword = 'america',page = 0,rating = 'g',language = 'en'} = {}){
    setStatus(true)
    fetch(`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=${rating}&lang=${language}`)
      .then(data => data.json())
      .then( gifs => {
        const {data} = gifs
        const newGifs = data.map(gif => {
            const {images,title,id} = gif;
            const {url} = images.downsized_medium;
            return {url,id,title}
        });
        console.log("Fetching")
        
        if(page === 0 ){
          setState(newGifs)
        }else{
          setState(prevState => prevState.concat(newGifs))
        }

        setStatus(false)
        })
}