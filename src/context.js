import React, { Component } from 'react'
//import items from './data'
import Client from './contentful'


const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state={
        projects: [],
        sortedProjects: [],
        featuredProjects: [],
        loading: true,
        type:"all",
        kind: "all",
        year:0,
        minYear:2003,
        maxYear:0,
        minSize:0,
        maxSize:0,
        sketch: false,
        render: false
    }

    getdata = async () => {
        try{
            let response = await Client.getEntries({
                content_type : "myFolio",
                //order: 'sys.createdAt'
                order: '-fields.year'
            })
            let projects = this.formatData(response.items)
        let featuredProjects = projects.filter(project => project.featured === true)
        let maxYear = Math.max(...projects.map(item => item.year))
        let maxSize = Math.max(...projects.map(item => item.size))
        this.setState({
            projects, 
            featuredProjects, 
            sortedProjects: projects,
            loading: false,
            maxYear: maxYear,
            maxSize: maxSize,
        })
        }
        catch(error){
            console.log(error)
        }
    }


    componentDidMount(){
        this.getdata()
    }
    formatData(items){
        let tempItems = items.map(item => {
            let id= item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
                
            let project= {...item.fields, images, id}
            return project
        })
        return tempItems;
    }

    getProject =(slug) =>{
        let tempProjects = [...this.state.projects]
        const project = tempProjects.find((project) => project.slug === slug)
        return project
    }

    handleChange = event => {
        const target = event.target
        const value = target.type ==="checkbox"? target.checked: target.value;
        const name = event.target.name
        this.setState({
            [name]:value
        }, this.filterProjects)
    }

    filterProjects = () => {
        let {projects, type, kind, year, minSize, maxSize, sketch, render}
     = this.state
     let tempProjects = [...projects]

     /*alternative = parseInt(alternative)
     year = parseInt(year);*/

     if(type !== 'all'){
         tempProjects = tempProjects.filter(project => project.type === type)
     }

     if(kind !== 'all'){
         tempProjects = tempProjects.filter(project => project.kind === kind)
     }

     tempProjects = tempProjects.filter(project => project.year >= year)
     tempProjects = tempProjects.filter( project => project.size <= maxSize && project.size >= minSize )

     if(sketch){
         tempProjects = tempProjects.filter( project => project.sketch === true )
     }
     if(render){
         tempProjects = tempProjects.filter(project => project.render === true)
     }

     this.setState({
         sortedProjects:tempProjects
     })
    }

    render(){
        return(
            <ProjectContext.Provider 
            value={{...this.state,
                    getProject: this.getProject,
                    handleChange:this.handleChange
            }}>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}
const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext}