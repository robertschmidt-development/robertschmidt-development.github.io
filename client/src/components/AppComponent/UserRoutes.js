import React, {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import { Menu } from './enums/menunames'
import OffeneAuftraege from './components/OffeneAuftraege/OffeneAuftraege'
import Erledigt from './components/Erledigt/Erledigt'
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
    }, [userId, dispatch])

    const data = useSelector(state => state.dataReducer)

    
    const offeneAuftraege = data.filter(el => el.status === Status.OFFEN)
    const erledigt = data.filter(el => el.status === Status.ERLEDIGT || el.status === Status.ERLEDIGT_WIRD_GLEICH_REPARIERT || el.status === Status.ERLEDIGT_NEUER_TERMIN)
    const aufgabe = data.filter(el => el.status === Status.AUFGABE)

    const fehlerData = useSelector(state => state.fehlerReducer)

    return (
        <Switch>
            <Route path={'/' + Menu.OFFENE_AUTRAEGE} component={() => (<OffeneAuftraege data={offeneAuftraege} fehlerData={fehlerData}/>)} />
            <Route path={'/' + Menu.AUFGABE} component={() => (<Aufgabe data={aufgabe} fehlerData={fehlerData}/>)} />
            <Route path={'/' + Menu.ERLEDIGT} component={() => (<Erledigt data={erledigt} fehlerData={fehlerData}/>)} />
        </Switch>
    )
}

export default UserRoutes