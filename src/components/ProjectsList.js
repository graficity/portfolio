import React from 'react'
import Project from './Project'

export default function ProjectsList({projects}){
    if(projects.length === 0){
        return (
            <div className="empty">
                <h3> No projects are matched with your search parameters</h3>
            </div>)}
        return(
        <section className="projectsList">
            <div className='projectslist-center'>
                {projects.map(item => {
                    return <Project key={item.id} project={item}/>
                })}
            </div>
        </section>
    )
}