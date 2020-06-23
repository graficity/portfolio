import React, { Component} from 'react'
import defaultBcg from '../images/room-1.jpeg'
//import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {ProjectContext} from '../context'
import StyledHero from '../components/StyledHeros'
import SingleImage from '../components/SingleImage'

class SingleProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug : this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = ProjectContext;

    render() { 
        const {getProject} =this.context;
        const project = getProject(this.state.slug)
        console.log(project)
        if (!project){
            return(
                <div className='error'>npm 
                    <h3>no such project could be found...</h3>
                    <Link to='/projects' className='btn-primary'>
                        Back To Projects
                    </Link>
                </div>
            )
        }
        const {name, description, kind, size, year,extras,
                sketch, render, images} = project
        const [mainImg, ...defaultImg] = images
        return ( 
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                        <Banner title={`${name} project`}>
                            <Link to='/projects' className='btn-primary' >
                                Back To Projects
                            </Link>
                        </Banner>
                </StyledHero>

                <section className="single-project">
                    <div className="single-project-images">
                        {defaultImg.map((item, index) => (
                        /*<img key={index} src={item} alt={name} id={name} />*/
                        <SingleImage key={index} src={item} alt={name} id={name} />
                        )
                        )}
                    </div>
                    <div className="single-project-info">
                        <article className='desc'>
                            <h4>details</h4>
                            <p>{description}</p>
                        </article>
                        <article className="info"> 
                            <h6>year: {year}</h6>
                            <h6>size: {size} Sq m</h6>
                            <h6>
                                Class : {""}
                                {kind}
                            </h6>
                            <h6>
                                {render?"render: ✓":"no renders"}
                            </h6>
                            <h6>
                                {sketch? "sketch: ✓":"no sketches"}
                            </h6>
                        </article>
                    </div>
                </section>

                <section className="project-extras">
                    <h4>Spaces</h4>
                    <ul className='extras'>
                        {extras.map((item, index) =>{
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
         );
    }
}
 
export default SingleProject;