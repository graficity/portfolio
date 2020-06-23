import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import InfoAbout from '../components/InfoAbout'
import Contacts from '../components/Contacts'


const About = () =>{
    return (
        <>
            <Hero hero='aboutHero'>
                <Banner title="About Me">
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Hero>
            <InfoAbout />
            <Contacts />
            
        </>
    )
};

export default About;