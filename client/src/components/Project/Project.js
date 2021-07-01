import React from 'react'
import { Menu } from '../../EnumMenu'

const Project = props => {

    const {setMenu} = props
    return <h1 onClick={() => setMenu(Menu.INIT)}>Hi from Project</h1>
}

export default Project