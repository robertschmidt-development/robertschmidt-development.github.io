import React from 'react'
import AppComponent from '../AppComponent/AppComponent'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import allReducers from '../AppComponent/reducers'
import { BrowserRouter } from "react-router-dom";

const store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a))

const Project = () => {

    return <>
            <br/>
                <p style={{textAlign:'center'}}>This is a stripped down project I did for a client. It had a full backend and database working as well. (English only)</p>
                <a href="https://github.com/robertschmidt-development" target="_blank" rel="noreferrer" type="button" class="btn btn-primary btn-block">See Code of this Project</a>
                <Provider store={store}>
                    <BrowserRouter>
                        <AppComponent/>
                    </BrowserRouter>
                </Provider>
            </>
}

export default Project