import React from 'react'
import RoomsList from './RoomsList'
import RoomsFilter from './RoomsFilter'
import {RoomConsumer} from '../context'
import Loading from './loading'

export default function RoomsContainer (){
    return (
        <RoomConsumer>
            {value => {
                const {loading, sortedRooms, rooms} = value;
                if(loading){
                    return <Loading />
                }
                return(
                        <div>
                            Hello from Rooms Container
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sortedRooms} />
                        </div>
                        )
                    }
            }
        </RoomConsumer>
      
    )
}