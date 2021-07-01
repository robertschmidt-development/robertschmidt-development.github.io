import React from 'react'
import { Menu } from '../../EnumMenu';
import service from'./service.jpg';
import classes from '../../components/Card.module.css'

const TestimonialsCard = props => {

    const {setMenu} = props

    return <div className={`card ${classes.clickablecard}`}  onClick={() => setMenu(Menu.TESTIMONIALS)}>
                <div className="card-body">
                    <h4 className="card-title">Testimonials</h4>
                    <p className="card-text">What can I solve for you? Click on and find out!</p>
                </div>
                <img className="card-img-top" alt="pic of service" src={service}/>
            </div>
}

export default TestimonialsCard