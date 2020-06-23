import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import ProjectsContainer from '../components/ProjectsContainer'

const Projects = () =>{
    return (
        <>
            <Hero hero='projectsHero'>
                <Banner title="our projects">
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Hero>
            <ProjectsContainer />
        </>
    )
};

export default Projects;