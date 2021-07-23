import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Menu } from '../../enums/menunames'
import { useSelector } from 'react-redux'
import { Status } from '../../enums/statusnames'

const NavUser = () => {

    const data = useSelector(state => state.dataReducer)
    
    const offeneAuftraege = data.filter(el => el.status === Status.OFFEN)
    const erledigt = data.filter(el => el.status === Status.ERLEDIGT || el.status === Status.ERLEDIGT_NEUER_TERMIN || el.status === Status.ERLEDIGT_WIRD_GLEICH_REPARIERT)
    // const neuerTermin = data.filter(el => el.status === Status.NEUER_TERMIN)
    const aufgabe = data.filter(el => el.status === Status.AUFGABE)

    const location = useLocation()

    const activeTab = (name) => {
        let loc = location.pathname
        if (loc.slice(-1) === '/') loc = loc.substring(0, loc.length - 1);
        return loc === process.env.REACT_APP_ROUTERLINKS + name ? 'nav-link active' : 'nav-link'
    }

    return (
        <ul className="nav nav-tabs nav-justified" role="tablist">
             <li className="nav-item">
                <Link to={process.env.REACT_APP_ROUTERLINKS + Menu.OFFENE_AUTRAEGE} className={activeTab(Menu.OFFENE_AUTRAEGE)}><h5>Open Jobs <span className="badge badge-pill badge-light">{offeneAuftraege.length}</span></h5></Link>
            </li>
            {/* <li className="nav-item">
                <Link to={process.env.REACT_APP_ROUTERLINKS + Menu.NEUER_TERMIN} className={activeTab(Menu.NEUER_TERMIN)}><h5>Neuer Termin <span className="badge badge-pill badge-secondary">{neuerTermin.length}</span></h5></Link>
            </li> */}
            <li className="nav-item">
                <Link to={process.env.REACT_APP_ROUTERLINKS + Menu.AUFGABE} className={activeTab(Menu.AUFGABE)}><h5>To Do <span className="badge badge-pill badge-light">{aufgabe.length}</span></h5></Link>
            </li>
            <li className="nav-item">
                <Link to={process.env.REACT_APP_ROUTERLINKS + Menu.ERLEDIGT} className={activeTab(Menu.ERLEDIGT)}><h5>Done <span className="badge badge-pill badge-light">{erledigt.length}</span></h5></Link>
            </li>
      </ul>
    )
}

export default NavUser


















