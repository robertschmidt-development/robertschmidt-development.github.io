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
                <p style={{textAlign:'center'}}>This is a project I did for a client to keep track of very special jobs. It had a full backend working as well with automatic email forwarding on certain events.</p>
                <a href="https://github.com/robertschmidt-development/robertschmidt-development.github.io/tree/main/client/src/components/AppComponent" target="_blank" rel="noreferrer" type="button" class="btn btn-primary btn-block">See Code of this Project</a>
                <Provider store={store}>
                    <BrowserRouter>
                        <div style={{border:'1px solid rgba(0, 0, 0, 0.5)', padding:'10px', marginTop:'10px'}}>
                            <AppComponent/>
                        </div>
                    </BrowserRouter>
                </Provider>
            </>
}

export default Project