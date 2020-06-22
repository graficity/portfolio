import React, {Component} from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title';

export default class Services extends Component {
    state={
        services : [
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "that is wonderfull experince in all my life"
            },
            {
                icon: <FaHiking/>,
                title: "endless hiking",
                info: "that is wonderfull experince in all my life"
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle",
                info: "that is wonderfull experince in all my life"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: "that is wonderfull experince in all my life"
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
