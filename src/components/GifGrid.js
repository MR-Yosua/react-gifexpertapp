// import React, { Fragment as div, useState, useEffect, Fragment } from 'react'
import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    

    const {data:images,loading} = useFetchGifs(category);
    
    // console.log(loading);


    
    return (

        <Fragment>
        
        <h3  > {category} </h3>

        { loading && <p className = "animate__animated animate__flash ">Loading</p> }

        <div className ="card-grid animate__animated animate__fadeIn">
                {
                    images.map( (img =>(
                        <GifGridItem 
                        key = {img.id}
                        {...img}
                        />
                    )))
                }
        </div>
        </Fragment>
    )
}
