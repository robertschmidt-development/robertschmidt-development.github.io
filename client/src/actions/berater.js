import * as api from '../apis/myApi'
import { Berater, Loading } from '../enums/actionnames'
import { v4 as uuidv4 } from 'uuid';

export const getServiceBerater = () => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        const response = await api.getBeraterData()
        if(response.status === 200){
            dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
            dispatch({type: Berater.LOAD_INTO_STATE, payload: response.data.data})
        }
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const createNewBeraterAction = (row) => async (dispatch) => {
    try {
        const obj = {...row, id: uuidv4()}
        await api.createNewBerater(JSON.stringify(obj))
        dispatch({type: Berater.CREATE, payload: obj})
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const updateBeraterAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Berater.UPDATE, payload: row})
        await api.updateBerater(JSON.stringify(row))
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const deleteBeraterAction = (row) => async (dispatch) => {
    try {
        dispatch({type: Berater.DELETE, payload: row.id})
        await api.deleteBerater(row.id)
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const getStandorteAction = () => async (dispatch) => {
    try {
        const response = await api.getStandorte()
        return response.data.data
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const getBeraterOfStandortAction = (standort) => async (dispatch) => {
    try {
        const response = await api.getBeraterOfStandort(standort)
        return response.data.data
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const getUserInfoAction = (id) => async (dispatch) => {
    try {
        const response = await api.getUserInfo(id)
        return response.data.data
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}




