import { Data, Loading } from '../enums/actionnames'
import moment from 'moment'

export const getInitialDataAction = userId => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            const obj = []
            obj.forEach(el => {
                el.fehlerobject = JSON.parse(el.fehlerobject)
                el.created = moment(el.created).utc().format('DD.MM.YYYY') 
            })
            dispatch({type: Data.LOAD_INTO_STATE, payload: obj})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const changeStatusAction = (status, fehlerobject, id) => async (dispatch) => {
    try { 
        dispatch({type: Data.CHANGE_STATUS, payload: {status: status, id: id}})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const changeFehlerObjectAction = (fehlerobject, id) => async (dispatch) => {
    try {
        dispatch({type: Data.CHANGE_FEHLEROBJECT, payload: {fehlerobject: fehlerobject, id: id}})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const changeNotizAction = (notiz, id) => async (dispatch) => {
    try {
        dispatch({type: Data.CHANGE_NOTIZ, payload: {notiz: notiz, id: id}})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}


