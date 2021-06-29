import React, {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import { Menu } from './enums/menunames'
import OffeneAuftraege from './components/OffeneAuftraege/OffeneAuftraege'
import Erledigt from './components/Erledigt/Erledigt'
import NeuerTermin from './components/NeuerTermin/NeuerTermin'
import Aufgabe from './components/Aufgabe/Aufgabe'
import {useDispatch, useSelector} from 'react-redux'
import { getFehlerDataAction } from './actions/fehler'
import { getInitialDataAction } from './actions/data'
import { Status } from './enums/statusnames'

const UserRoutes = props => {

    const {userId} = props

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInitialDataAction(userId))
        dispatch(getFehlerDataAction())
    }, [userId])

    const data = useSelector(state => state.dataReducer)
    
    const offeneAuftraege = data.filter(el => el.status === Status.OFFEN)
    const erledigt = data.filter(el => el.status === Status.ERLEDIGT)
    const neuerTermin = data.filter(el => el.status === Status.NEUER_TERMIN)
    const aufgabe = data.filter(el => el.status === Status.AUFGABE)

    const fehlerData = useSelector(state => state.fehlerReducer)

    return (
        <Switch>
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.OFFENE_AUTRAEGE} component={() => (<OffeneAuftraege data={offeneAuftraege} fehlerData={fehlerData}/>)} />
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.NEUER_TERMIN} component={() => (<NeuerTermin data={neuerTermin} fehlerData={fehlerData}/>)} />
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.AUFGABE} component={() => (<Aufgabe data={aufgabe} fehlerData={fehlerData}/>)} />
            <Route path={process.env.REACT_APP_ROUTERLINKS + Menu.ERLEDIGT} component={() => (<Erledigt data={erledigt} fehlerData={fehlerData}/>)} />
        </Switch>
    )
}

export default UserRoutes