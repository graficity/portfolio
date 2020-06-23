import React from 'react'
import mediumZoom from 'medium-zoom'

export default function SingleImage(props){
    let imgName = props.src
    let num = imgName.lastIndexOf("/")
    let imgString= imgName.slice(num+1,imgName.length-4)
    
    const myHandle = () => {
        mediumZoom('.smallImage',{
            margin:50,
            scrollOffset: 200
        })
    }
    
    return(
        <div class="single-image">
            <img class="smallImage" onClick={myHandle} src={props.src} name={props.name} alt={props.name}/>
            <p> {imgString} </p>
            
        </div>
    )
}