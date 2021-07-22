import {Data} from '../enums/actionnames'

const dataReducer = (initialData=[], action) => {

    switch (action.type) {
        case Data.LOAD_INTO_STATE:
            return action.payload
        case Data.CHANGE_STATUS:
            return initialData.map(el => el.id === action.payload.id ? {...el, status: action.payload.status} : el)
        case Data.CHANGE_FEHLEROBJECT: 
            return initialData.map(el => el.id === action.payload.id ? {...el, fehlerobject: action.payload.fehlerobject} : el)
        case Data.CHANGE_NOTIZ:
            return initialData.map(el => el.id === action.payload.id ? {...el, notiz: action.payload.notiz} : el)
        default:
            return initialData
    }
}

export default dataReducer