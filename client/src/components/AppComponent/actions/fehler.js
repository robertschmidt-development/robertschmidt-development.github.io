import { Fehler, Loading } from '../enums/actionnames'
import { v4 as uuidv4 } from 'uuid';

export const getFehlerDataAction = () => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        const data = [
            {id: '27e005dd-c53c-4318-a0c9-67f58557f831', todo: 'Bremstrommeln auf Oxidation prüfen', baureihen: 'W453', baujahre: 'ab Baujahr 11/2014', bemerkung: 'Werden sofern kein el. Fehler im System hinterlegt...'},
            {id: '27e005dd-c53c-4318-a0c9-67f58557f832', todo: 'Was anderes', baureihen: 'W123', baujahre: 'Baujahr 11/2015', bemerkung: 'check check check'}
        ]
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
        dispatch({type: Fehler.LOAD_INTO_STATE, payload: data})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const createNewFehlerAction = (row) => async (dispatch) => {
    try {
        const obj = {...row, id: uuidv4()}
        dispatch({type: Fehler.CREATE, payload: obj})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const updateFehlerAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Fehler.UPDATE, payload: row})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const deleteFehlerAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Fehler.DELETE, payload: row.id})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}
