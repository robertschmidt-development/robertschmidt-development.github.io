import React from 'react'
import { Menu } from '../../EnumMenu';
import contact from'./contact.jpg';
import classes from '../../components/Card.module.sass'

const ContactCard = props => {

    const {setMenu} = props

    return <div className={`card ${classes.clickable}`}  onClick={() => setMenu(Menu.CONTACT)}>
                <div className="card-body">
                    <h4 className="card-title">Contact</h4>
                    <p className="card-text">Your business needs to take the next digital step? Let´s get in touch!</p>
                </div>
                <img className="card-img-top" alt="pic of contact" src={contact}/>
            </div>
}

export default ContactCard