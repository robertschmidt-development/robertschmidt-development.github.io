import React from 'react'
import { Menu } from '../../EnumMenu'

const Testimonials = props => {

    const {setMenu} = props
    return <h1 onClick={() => setMenu(Menu.INIT)}>Hi from Testimonials</h1>
}

export default Testimonials