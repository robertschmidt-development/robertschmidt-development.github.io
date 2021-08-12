import React, {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import { Menu } from './enums/menunames'
import ServiceBeraterFunctions from './components/ServiceBerater/ServiceBeraterFunctions'
import SchwerpunkteFunctions from './components/Schwerpunkte/SchwerpunkteFunctions'
import {useDispatch, useSelector} from 'react-redux'
import { getFehlerDataAction } from './actions/fehler'
import { getServiceBerater } from './actions/berater'

const AdminRoutes = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFehlerDataAction())
        dispatch(getServiceBerater())
    }, [dispatch])

    const fehlerData = useSelector(state => state.fehlerReducer)
    const beraterData = useSelector(state => state.beraterReducer)

    return (
        <Switch>
            <Route path={'/' + Menu.SCHWERPUNKTE} component={() => (<SchwerpunkteFunctions data={fehlerData}/>)} />
            <Route path={'/' + Menu.SERVICE_BERATER} component={() => (<ServiceBeraterFunctions data={beraterData}/>)} />
        </Switch>
    )
}

export default AdminRoutes