import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Menu } from '../../enums/menunames'

const NavAdmin = () => {

    const location = useLocation()

    const activeTab = (name) => {
        let loc = location.pathname
        return loc === '/' + name ? 'nav-link active' : 'nav-link'
    }

    return (
        <ul className="nav nav-tabs nav-justified" role="tablist">
             <li className="nav-item">
                <Link to={Menu.SCHWERPUNKTE} className={activeTab(Menu.SCHWERPUNKTE)}>Job-Details</Link>
            </li>
            <li className="nav-item">
                <Link to={Menu.SERVICE_BERATER} className={activeTab(Menu.SERVICE_BERATER)}>Workers</Link>
            </li>
      </ul>
    )
}

export default NavAdmin

