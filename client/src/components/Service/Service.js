import React from 'react'
import { Menu } from '../../EnumMenu'

const Service = props => {

    const {setMenu} = props

    return <>
                <h1>Hi from Service</h1>
                <button type="button" className="btn btn-outline-danger" onClick={() => setMenu(Menu.INIT)}>Back</button>
            </>
}

export default Service