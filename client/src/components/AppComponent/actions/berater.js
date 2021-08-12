import { Berater, Loading } from '../enums/actionnames'
import { v4 as uuidv4 } from 'uuid';

const data = [
    {id: '3731b95c-0710-4e4d-a0fe-204738fbf8e0', vorname: 'John' , name: 'Doe', standort: 'London', kuerzel: 'J_DOE', email: 'j.doe@company.com'},
    {id: '3731b95c-0710-4e4d-a0fe-204738fbf8e1', vorname: 'Jane' , name: 'Smith', standort: 'Munich', kuerzel: 'J_SMITH', email: 'j.smith@company.com'},
    {id: '3731b95c-0710-4e4d-a0fe-204738fbf8e2', vorname: 'Cat' , name: 'Stevens', standort: 'Stockholm', kuerzel: 'J_STEVENS', email: 'c.stevens@company.com'},
    {id: '3731b95c-0710-4e4d-a0fe-204738fbf8e3', vorname: 'Freddy' , name: 'Mercury', standort: 'London', kuerzel: 'F_MERCURY', email: 'f.mercury@company.com'},
    {id: '3731b95c-0710-4e4d-a0fe-204738fbf8e4', vorname: 'Carlos' , name: 'Santana', standort: 'Munich', kuerzel: 'C_SANTANA', email: 'c.santana@company.com'},
    {id: '3731b95c-0710-4e4d-a0fe-204738fbf8e5', vorname: 'Paul' , name: 'Desmond', standort: 'Stockholm', kuerzel: 'P_DESMOND', email: 'p.desmond@company.com'}
]

export const getServiceBerater = () => async (dispatch) => {
    try {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
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
        const data = [
            {standort: 'London'}, 
            {standort: 'Munich'}, 
            {standort: 'Stockholm'}
    ]
        return data
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const getBeraterOfStandortAction = (standort) => async (dispatch) => {
    try {
        return data.filter(el => el.standort === standort)
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}

export const getUserInfoAction = (id) => async (dispatch) => {
    try {
        return data.filter(el => el.id === id)
    } catch (error) {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.ERROR})
        console.log(error)
    }   
}




