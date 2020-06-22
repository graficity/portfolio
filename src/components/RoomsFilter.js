import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}){
    const context = useContext(RoomContext)
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context
    let types=getUnique(rooms,'type')
    types = ['all',...types];
    types = types.map((type, index) => {
        return <option key={index} value={type} >{type}</option>
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    } )

    return(
        <section className="filter-container" >
            <Title title="search rooms" />
            <form className="filter-form">
                <div className='form-group'>
                    <label htmlFor="type">room type</label>
                    <select id='type' name="type"
                    value={type} className="form-control"
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="capacity">Guests</label>
                    <select id='capacity' name="capacity"
                    value={capacity} className="form-control"
                    onChange={handleChange}>
                        {people}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="price">room price ${price} </label>
                    <input type="range" value={price} 
                            className='form-control' name='price'
                            max={maxPrice} min={minPrice} 
                            id="price" onChange={handleChange} />
                </div>

                <div className="form-group" >
                    <label htmlFor="size" > room size </label>
                    <div className='size-inputs' >
                        <input type='number' value={minSize} name="minSize"
                                id='size' onChange={handleChange}
                                className= 'size-inputs' />
                         <input type='number' value={maxSize} name="maxSize"
                                id='size' onChange={handleChange} className= 'size-inputs' />
                    </div>
                </div>

                <div className= 'form-group'>
                    <div className='single-extra'>
                        <input type="checkbox" name='breakfast' 
                        id='breakfast' checked={breakfast} 
                        onChange={handleChange} />
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>

                    <div className='single-extra'>
                        <input type="checkbox" name='pets' 
                        id='pets' checked={pets} 
                        onChange={handleChange} />
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>



            </form>
        </section>
    )
}