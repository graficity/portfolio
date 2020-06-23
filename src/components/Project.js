import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from'prop-types'

export default function Project ({project}){
    const{name, slug, images, size} = project
    return(
        <article className='project'>
            <div className='img-container'>
                <img src={images[0] || defaultImg} 
                alt='single-project' />
                <div className='size-top'>
                    <h6>{size}</h6>
                    <p>Sq m</p>
                </div>
                <Link to={`/projects/${slug}`} className='btn-primary project-link'>
                    Features
                </Link>
            </div>
            <p className='project-info'>{name}</p>
        </article>
    )
}

Project.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        size: PropTypes.number.isRequired
    })
}

