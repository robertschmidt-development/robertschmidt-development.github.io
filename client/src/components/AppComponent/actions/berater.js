import { Berater, Loading } from '../enums/actionnames'
import { v4 as uuidv4 } from 'uuid';

export const getServiceBerater = () => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
        const data = []
        dispatch({type: Berater.LOAD_INTO_STATE, payload: data})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const createNewBeraterAction = (row) => async (dispatch) => {
    try {
        const obj = {...row, id: uuidv4()}
        dispatch({type: Berater.CREATE, payload: obj})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const updateBeraterAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Berater.UPDATE, payload: row})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const deleteBeraterAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Berater.DELETE, payload: row.id})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const getStandorteAction = () => async (dispatch) => {
    try {
        const data = []
        return data
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const getBeraterOfStandortAction = (standort) => async (dispatch) => {
    try {
        const data = []
        return data
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const getUserInfoAction = (id) => async (dispatch) => {
    try {
        const data = []
        return data
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}




