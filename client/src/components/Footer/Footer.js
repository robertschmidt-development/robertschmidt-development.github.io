import React from 'react'
import { Menu } from '../../EnumMenu'
import classes from './Footer.module.sass'

const Footer = props => {

    const {setMenu} = props

    return <>
                <br/>
                <footer>
                    <p className={classes.legal}>{new Date().getFullYear()} <span className={classes.link} onClick={() => setMenu(Menu.LEGAL)}>Legal Info</span></p>
                </footer>
            </>
        
}

export default Footer