import React from 'react'
import { Menu } from '../../EnumMenu';
import testimonials from'./testimonials.jpg';
import classes from '../../components/Card.module.sass'

const TestimonialsCard = props => {

    const {setMenu} = props

    return <div className={`card ${classes.clickable}`}  onClick={() => setMenu(Menu.TESTIMONIALS)}>
                <div className="card-body">
                    <h4 className="card-title">Testimonials</h4>
                    <p className="card-text">What other costumers shouted at me...</p>
                </div>
                <img className="card-img-top" alt="pic of testimonials" src={testimonials}/>
            </div>
}

export default TestimonialsCard