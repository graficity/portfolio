import React from 'react'
import Room from './Room'

export default function RoomsList({rooms}){
    if(rooms.length === 0){
        return (
            <div className="empty">
                <h3>unfortunately no rooms mached your search parameters</h3>
            </div>)}
        return(
        <section className="roomsList">
            <div className='roomslist-center'>
                {rooms.map(item => {
                    return <Room key={item.id} room={item}/>
                })}
            </div>
        </section>
    )
}