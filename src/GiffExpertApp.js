import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiffExpertApp = ()=>{

    // const categories = ['Boku no Hero','One Punch Man','Hunter x Hunter'];

    const [categories, setCategories] = useState(['Boku no Hero']);

    

    return(
        <Fragment>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/>
        <ol>
            { 
                categories.map(category =>(
                    <GifGrid
                    category = {category}
                    key={category}
                    />
                ))
            }
        </ol>
        
        </Fragment>

    )
}

export default GiffExpertApp;