import { Data, Loading } from '../enums/actionnames'
import moment from 'moment'

export const getInitialDataAction = userId => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            const obj = [
                {id: 1, auftragsnummer: 53743, fin: 'W1K4530871J1251037', kennzeichen: 'CW-E3938', erstzulassung: '09.03.2020', status_id: 1, fehlerobject: [], nichtgeprueft: 0, notiz: "", serviceberater_id: '3731b95c-0710-4e4d-a0fe-204738fbf8e0', created: '2021-07-29 15:55:00'}
            ]
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


