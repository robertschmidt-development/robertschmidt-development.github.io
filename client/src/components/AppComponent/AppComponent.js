import React, {useState} from 'react'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import NavAdmin from './components/NavAdmin/NavAdmin'
import NavUser from './components/NavUser/NavUser'
import companyLogo from './images/companylogo.jpg'
import Start from './components/Start/Start'
import { Redirect } from "react-router-dom";
import { Menu } from './enums/menunames'

const App = () => {


    const [app, setApp] = useState({component: 'start'})
    const [userInfo, setUser] = useState({id: '', kuerzel: '', standort: ''})

    const user = <>  
                    <NavUser />
                    <UserRoutes userId={userInfo.id} />
                    <Redirect to={Menu.OFFENE_AUTRAEGE} push/>
                </>

    const admin = <>
                    <NavAdmin />
                    <AdminRoutes />
                    <Redirect to={Menu.SCHWERPUNKTE} push/>
                </>

    const loadApp = () => {
        if (app.component === 'start') return <>
                                                <Start
                                                    setApp={setApp} 
                                                    setUser={setUser}
                                                />
                                                <Redirect 
                                                    to={'/'} 
                                                    push
                                                />
                                            </>
        if(app.component === 'user') return user
        if(app.component === 'admin') return admin
        return null
    }
    

    return (<>
                <div className="container">
                    <br />
                    
                    <div className="page-header pb-4" style={{borderBottom: '2px dashed grey'}}>
                        <h1 className="display-2"> JBS-Digital    
                                <img
                                    src={companyLogo} className="float-right pr-4"
                                    alt="company_logo" width="18%" height="18%" 
                                />
                        </h1>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-2">
                            {app.component !== 'start' ? <button className="btn btn-outline-danger btn-sm btn-block" onClick={() => setApp({component: 'start'})}>Change Mode</button> : null}
                        </div>
                        <br />
                        <br />
                        <div className="col-lg-10">
                            {app.component === 'user' ? <button type="button" className="btn btn-info btn-sm btn-block" disabled>Manage Jobs: {userInfo.kuerzel} ({userInfo.standort})</button> : null}
                            {app.component === 'admin' ? <button type="button" className="btn btn-info btn-sm btn-block" disabled>Manage Workers / Job-Details</button> : null}
                        </div>
                    </div>
                    <br />
                    {loadApp()}
                </div>
            </>
    )
}

export default App