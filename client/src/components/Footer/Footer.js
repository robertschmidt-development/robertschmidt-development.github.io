import React from 'react'
import classes from './Footer.module.sass'

const Footer = () => {

    return <>
                <br/>
                <footer>
                    <p className={classes.legal}>&copy; {new Date().getFullYear()}</p>
                </footer>
            </>
        
}

export default Footer