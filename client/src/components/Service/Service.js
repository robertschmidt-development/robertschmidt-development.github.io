import React from 'react'
import { Menu } from '../../EnumMenu'

const Service = props => {

    const {setMenu} = props
    return <h1 onClick={() => setMenu(Menu.INIT)}>Hi from Service</h1>
}

export default Service