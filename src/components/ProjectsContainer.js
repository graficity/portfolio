import React from 'react'
import ProjectsList from './ProjectsList'
import ProjectsFilter from './ProjectsFilter'
import {ProjectConsumer} from '../context'
import Loading from './loading'

export default function ProjectsContainer (){
    return (
        <ProjectConsumer>
            {value => {
                const {loading, sortedProjects, projects} = value;
                if(loading){
                    return <Loading />
                }
                return(
                        <div>
                            <ProjectsFilter projects={projects}/>
                            <ProjectsList projects={sortedProjects} />
                        </div>
                        )
                    }
            }
        </ProjectConsumer>
      
    )
}