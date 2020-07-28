


export const getGiffs = async(category)=>{
    //encodeuri adapta la busqueda quitando espacios y reemplazando para disponer la url
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=76DCxFXAZzZiUCs7OxOr8cF0ln0mbaga`;
        const resp = await fetch(url);
        const {data} = await resp.json(); 

        const gifs = data.map(img =>{
            return {
                id: img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        })
        return gifs;
    }
    