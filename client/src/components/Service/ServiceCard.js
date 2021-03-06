import React from 'react'
import { Menu } from '../../EnumMenu';
import service from'./service.jpg';
import classes from '../../components/Card.module.sass'

const ServiceCard = props => {

    const {setMenu} = props

    return <div className={`card ${classes.clickable}`} onClick={() => setMenu(Menu.SERVICE)}>
                <div className="card-body">
                    <h4 className="card-title">Service</h4>
                    <p className="card-text">What I can offer you? Click and find out!</p>
                </div>
                <img className="card-img-top" alt="pic of service" src={service}/>
            </div>
}

export default ServiceCard