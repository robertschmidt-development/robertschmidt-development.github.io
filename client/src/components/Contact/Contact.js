import React from 'react'
import { Menu } from '../../EnumMenu'

const Contact = props => {

    const {setMenu} = props
    return <h1 onClick={() => setMenu(Menu.INIT)}>Hi from Contact</h1>
}

export default Contact