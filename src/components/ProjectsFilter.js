import React from 'react'
import {useContext} from 'react'
import {ProjectContext} from '../context'
import Title from '../components/Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function ProjectsFilter({projects}){
    const context = useContext(ProjectContext)
    const {
        handleChange, 
        type, 
        kind, 
        year, 
        minYear, 
        maxYear, 
        minSize, 
        maxSize, 
        sketch, 
        render
    } = context
    let types=getUnique(projects,'type')
    types = ['all',...types];
    types = types.map((type, index) => {
        return <option key={index} value={type} >{type}</option>
    })

    let kinds=getUnique(projects,'kind')
    kinds = ['all',...kinds];
    kinds = kinds.map((kind, index) => {
        return <option key={index} value={kind} >{kind}</option>
    })

    /*let people = getUnique(projects, 'alternative')
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    } )*/

    return(
        <section className="filter-container" >
            <Title title="search projects" />
            <form className="filter-form">

                <div className='form-group'>
                    <label htmlFor="type">project type</label>
                    <select id='type' name="type"
                    value={type} className="form-control"
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="kind">project kind</label>
                    <select id='kind' name="kind"
                    value={kind} className="form-control"
                    onChange={handleChange}>
                        {kinds}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor="year">Year {year} </label>
                    <input type="range" value={year} 
                            className='form-control' name='year'
                            max={maxYear} min={minYear} 
                            id="year" onChange={handleChange} />
                </div>

                <div className="form-group" >
                    <label htmlFor="size" > project area </label>
                    <div className='size-inputs' >
                        <input type='number' value={minSize} name="minSize"
                                id='size' onChange={handleChange}
                                className= 'size-input' />
                         <input type='number' value={maxSize} name="maxSize"
                                id='size' onChange={handleChange} className= 'size-input' />
                    </div>
                </div>

                <div className= 'form-group'>
                    <div className='single-extra'>
                        <input type="checkbox" name='sketch' 
                        id='sketch' checked={sketch} 
                        onChange={handleChange} />
                        <label htmlFor='sketch'>Sketch</label>
                    </div>

                    <div className='single-extra'>
                        <input type="checkbox" name='render' 
                        id='render' checked={render} 
                        onChange={handleChange} />
                        <label htmlFor='render'>Render</label>
                    </div>
                </div>



            </form>
        </section>
    )
}