import React from 'react'
import { Menu } from '../../EnumMenu'

const Legal = props => {

    const {setMenu} = props

    return <>
                <h1>Hi from Legal</h1>
                <button type="button" className="btn btn-outline-info" onClick={() => setMenu(Menu.INIT)}>Back</button>
            </>
        
}

export default Legal