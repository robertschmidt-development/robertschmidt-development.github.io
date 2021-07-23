import { Fehler, Loading } from '../enums/actionnames'
import { v4 as uuidv4 } from 'uuid';

export const getFehlerDataAction = () => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        const data = []
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
