const key = '6NDmRXWzvLtd56H066CQhq4O0s05NE6m';

export default function getGifs(setState,word,setStatus){
    setStatus(true)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${word}&limit=25&offset=0&rating=r&lang=en`)
      .then(data => data.json())
      .then( gifs => {
        const {data} = gifs
        const newGifs = data.map(gif => {
            const {images,title,id} = gif;
            const {url} = images.downsized_medium;
            return {url,id,title}
        });
        console.log("Fetching")
        setState(newGifs);
        setStatus(false)
        })
}