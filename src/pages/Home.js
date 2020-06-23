import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'


export default function Home () {
    return (
        <React.Fragment>
            <Hero >
                <Banner title = 'Soran Shangapour' 
                subtitle="Architectural/urban design Portfolio">
                    <Link to='/projects' className="btn-primary">
                        Portfolio
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedProjects />
        </React.Fragment>
    )
}
