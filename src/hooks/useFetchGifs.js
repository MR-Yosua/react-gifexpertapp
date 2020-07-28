import { useState, useEffect } from "react"
import { getGiffs } from '../helpers/getGifs';


export const useFetchGifs = (category)=>{

    const [state, setState] = useState({

        data: [],
        loading: true

    });
    // //use effect solo se ejecuta 1 vez - el segundo parametro es un parametro de dependencia Array
    useEffect(()=>{
        getGiffs( category )
        .then(img =>{

            setState({
                data:img,
                loading: false
            });    
            
        })
    },[category])

    

    return state; // {data:[], loading: true};
}