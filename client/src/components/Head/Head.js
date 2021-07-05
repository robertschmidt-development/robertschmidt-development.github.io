import React from 'react'
import { Menu } from '../../EnumMenu'
import classes from './Head.module.sass'

const Head = props => {

    const {setMenu} = props
    return <>
                <div onClick={() => setMenu(Menu.INIT)} className={classes.link}>
                    <h1 className="display-4">Robert Schmidt Development</h1>
                    <code style={{fontSize:'x-large'}}>{'<> '}Programming(){'{ ...Solutions }'}{' </>'}</code>
                </div>
                <br/><br/><br/>
            </>
}

export default Head