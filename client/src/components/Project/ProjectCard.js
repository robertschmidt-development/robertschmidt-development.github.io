import React from 'react'
import { Menu } from '../../EnumMenu';
import project from'./project.jpg';
import classes from '../../components/Card.module.sass'

const ProjectCard = props => {

    const {setMenu} = props

    return <div className={`card ${classes.clickable}`}  onClick={() => setMenu(Menu.PROJECT)}>
                <div className="card-body">
                    <h4 className="card-title">Project</h4>
                    <p className="card-text">See a working example of a recent project. Including the code!</p>
                </div>
                <img className="card-img-top" alt="pic of project" src={project}/>
            </div>
}

export default ProjectCard
