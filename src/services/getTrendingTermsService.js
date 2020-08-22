import {API_KEY,API_URL} from "./settings";

export default function getTrendingTerms(setState){
    fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`)
      .then(data => data.json())
      .then( jsonResponse => {
        const {data} = jsonResponse;
    
        setState(data)
    })
}