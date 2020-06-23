import React, {Component} from 'react'
import { FaAward, FaEdge, FaLaravel, FaDribbble} from 'react-icons/fa'
import Title from './Title';

export default class Services extends Component {
    state={
        services : [
            {
                icon: <FaAward/>,
                title: "Awards",
                info: "We won several well-known architectural competitions "
            },
            {
                icon: <FaEdge/>,
                title: "Fast and Accurate",
                info: "We design your project in a very short time"
            },
            {
                icon: <FaLaravel/>,
                title: "Right to choose",
                info: "we provide three different alternatives for each project"
            },
            {
                icon: <FaDribbble/>,
                title: "International",
                info: "We have offices in Europe, Uk and Middle East"
            },
        ]
    };
    render(){
        return(
            <section className="services">
                <Title title='services' />
                <div className="services-center" >
                    {this.state.services.map((item, index) => {
                        return ( <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article> )
                    })}
                </div>
            </section>
        )
    }
}
