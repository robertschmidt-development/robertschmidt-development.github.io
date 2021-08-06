import React from 'react'
import classes from './Footer.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return <>
                <br/>
                <footer className={classes.legal}>
                    <a href="https://robertschmidt-drummer.github.io" title="I am also a drummer. Visit my page here! :)" target="_blank" rel="noreferrer" type="button"><FontAwesomeIcon icon={faDrum} size="2x"/></a>
                    <p>&copy; {new Date().getFullYear()}</p>
                </footer>
            </>
        
}

export default Footer