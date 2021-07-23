import React, {useState} from 'react'
import SortingArrow from '../UseSortableData/SortingArrow'
import UseSortableData from '../UseSortableData/UseSortableData'
import AuftraegeRow from './AuftraegeRow/AuftraegeRow'
import styles from './style'
import TableSearch from '../UseSortableData/TableSearch'
import Auftrag from '../Auftrag/Auftrag'
import {useDispatch, useSelector} from 'react-redux'
import { changeFehlerObjectAction, changeNotizAction, changeStatusAction } from '../../actions/data';
import { Loading } from '../../enums/actionnames'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ErrorBadge from '../ErrorBadge/ErrorBadge'
import { Reason, Status } from '../../enums/statusnames'

const Auftraege = props => {
    const {data, fehlerData, erledigt } = props
    const initial = {comp: 'table', id: undefined}
    const [show, setShow] = useState(initial)

    const openAuftrag = id => {
        setShow({comp: 'auftrag', id: id})
    }

    const dispatch = useDispatch()

    const calculateStatusOfAuftrag = fehlerObject => {
        if(fehlerObject.length === 0) return Status.OFFEN
        const offen = fehlerObject.every(el => 
            el.inOrdnung === false &&
            el.nichtIO === false &&
            el.aufgabe === false
        )

        const erledigt = fehlerObject.every(el => 
            (el.inOrdnung === true) || 
            (el.nichtIO === true && el.reason === Reason.NEUERTERMIN && el.neueAuftragsnummer !== '') ||
            (el.nichtIO === true && el.reason === Reason.WIRDGLEICHREPARIERT)
        )

        if(offen) return Status.OFFEN
        if(erledigt) return Status.ERLEDIGT
        return Status.AUFGABE
    }

    const closeAuftrag = (id, notiz, fehlerObject) => {
   
        setShow(initial)
        dispatch(changeFehlerObjectAction(fehlerObject, id))
        dispatch(changeNotizAction(notiz, id))

        const status = calculateStatusOfAuftrag(fehlerObject)
        dispatch(changeStatusAction(status, fehlerObject, id))
    }

    let { items, requestSort } = UseSortableData(data)
    const keys = ['auftragsnummer', 'kennzeichen', 'fin', 'erstzulassung', 'created', 'notiz']
    let { itemsfiltered, requestSearch, searchValue } = TableSearch(data, keys)
    if(searchValue !== '') items = itemsfiltered

    const loading = useSelector(state => state.loadingReducer)

    const table = (
        <>
            <br />
            <input className="form-control" placeholder='Suche' onChange={(e) => requestSearch(e.target.value)}/>
            <br />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th onClick={() => requestSort('auftragsnummer')} style={styles.tableHeader}>Jobnumber <SortingArrow /></th>
                        <th onClick={() => requestSort('kennzeichen')} style={styles.tableHeader}>Sign <SortingArrow /></th>
                        <th onClick={() => requestSort('fin')} style={styles.tableHeader}>Largenumber <SortingArrow /></th>
                        <th onClick={() => requestSort('erstzulassung')} style={styles.tableHeader}>First Date <SortingArrow /></th>
                        <th onClick={() => requestSort('created')} style={styles.tableHeader}>Created <SortingArrow /></th>
                        <th onClick={() => requestSort('notiz')} style={styles.tableHeader}>Note <SortingArrow /></th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.map((el, index) => <AuftraegeRow key={index} row={el} openAuftrag={openAuftrag}/>)}
                </tbody>
            </table>
            </>
    )

    const auftrag = <Auftrag auftrag={data.filter(el => el.id === show.id)[0]} closeAuftrag={closeAuftrag} fehlerData={fehlerData} erledigt={erledigt}/>

    if(loading === Loading.LOADING) return <LoadingSpinner />
    if(loading === Loading.ERROR) return <ErrorBadge />
    if(loading === Loading.LOADED && show.comp === 'auftrag') return auftrag
    return table
}

export default Auftraege