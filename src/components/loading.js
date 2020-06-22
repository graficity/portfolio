import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

export default function Loading(){
    return(
        <div className="loading">
            <ha> Rooms data loading... </ha>
            <img src={loadingGif} alt='' />
        </div>
    )
}