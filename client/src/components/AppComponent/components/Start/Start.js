import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getStandorteAction, getBeraterOfStandortAction } from '../../actions/berater'
import { Loading } from '../../enums/actionnames'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { getUserInfoAction } from '../../actions/berater'

const Start = props => {

    const {setApp, setUser} = props

    const [show, setShow] = useState({component: 'buttonOnly'})
    const [standorte, setStandorte] = useState([])
    const [berater, setBerater] = useState([])


    const dispatch = useDispatch()
    useEffect(() => {
        async function getStandorte(){
            const response = await dispatch(getStandorteAction())
            setStandorte(response)
        }
        getStandorte()
        }, [dispatch])

    const handleChangeStandort = async e => {
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADING})
        setBerater(await dispatch(getBeraterOfStandortAction(e.target.value)))
        setShow({component: 'standortPlusBerater'})
        dispatch({type: Loading.CHANGE_STATE, payload: Loading.LOADED})
    }

    const loadDataFromUser = async e => {
        const userInfo = await dispatch(getUserInfoAction(e.target.value))
        setUser({id: e.target.value, kuerzel: userInfo[0].kuerzel, standort: userInfo[0].standort})
        setApp({component: 'user'})
    }


    const loading = useSelector(state => state.loadingReducer)

    const buttonOnly = <><button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => setApp({component: 'admin'})}>Manage Workers / Job-Details</button>
                            <br />
                        <button type="button" className="btn btn-outline-primary btn-lg btn-block" onClick={() => setShow({component: 'standort'})}>Manage Jobs</button>
                        </>

    const selectStandort = <><select className="form-control form-control-lg" onChange={handleChangeStandort} defaultValue={'select'}>
                                <option value={'select'} disabled>Location</option>
                                {standorte.map((el, index) => <option key={index}>{el.standort}</option>)}
                            </select>
                            </>

    const selectBerater = <><select className="form-control form-control-lg" onChange={loadDataFromUser} defaultValue={'select'}>
                                <option value={'select'} disabled>Worker</option>
                                {berater.map((el, index) => <option key={index} value={el.id}>({el.kuerzel}) {el.vorname} {el.name}</option>)}
                            </select>
                            </>

    if(show.component === 'buttonOnly') return buttonOnly
    if(show.component === 'standort') return <>{buttonOnly}<br />{selectStandort}{loading === Loading.LOADING && <LoadingSpinner />}</>
    if(show.component === 'standortPlusBerater') return <>{buttonOnly}<br />{selectStandort}<br />{selectBerater}</>
    return null

        
}

export default Start

