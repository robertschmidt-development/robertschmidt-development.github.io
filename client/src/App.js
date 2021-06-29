import React, {useState} from 'react'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import NavAdmin from './components/NavAdmin/NavAdmin'
import NavUser from './components/NavUser/NavUser'
import wackenhut from './Pdf/wackenhut.png'
import Start from './components/Start/Start'
import { Redirect } from "react-router-dom";
import { Menu } from './enums/menunames'


const App = () => {

    return <h1>Test Etrst Teswsyt</h1>

    // const [app, setApp] = useState({component: 'start'})
    // const [userInfo, setUser] = useState({id: '', kuerzel: '', standort: ''})

    // const user = <>  
    //                 <NavUser />
    //                 <UserRoutes userId={userInfo.id} />
    //                 <Redirect to={process.env.REACT_APP_ROUTERLINKS + Menu.OFFENE_AUTRAEGE} push/>
    //             </>

    // const admin = <>
    //                 <NavAdmin />
    //                 <AdminRoutes />
    //                 <Redirect to={process.env.REACT_APP_ROUTERLINKS + Menu.SCHWERPUNKTE} push/>
    //             </>

    // const loadApp = () => {
    //     if (app.component === 'start') return <>
    //                                             <Start
    //                                                 setApp={setApp} 
    //                                                 setUser={setUser}
    //                                             />
    //                                             <Redirect 
    //                                                 to={process.env.REACT_APP_ROUTERLINKS} 
    //                                                 push
    //                                             />
    //                                         </>
    //     if(app.component === 'user') return user
    //     if(app.component === 'admin') return admin
    //     return null
    // }
    

    // return (<>
    //             <div className="container">
    //                 <br />
                    
    //                 <div className="page-header pb-4" style={{borderBottom: '2px dashed grey'}}>
    //                     <h1 className="display-2"> SPC-Digital    
    //                             <img
    //                                 src={wackenhut} className="float-right pt-4"
    //                                 alt="wackenhut_logo" width="18%" height="18%" 
    //                             />
    //                     </h1>
    //                 </div>
    //                 <br />
    //                 <div className="row">
    //                     <div className="col-2">
    //                         {app.component !== 'start' ? <button className="btn btn-outline-danger btn-sm btn-block" onClick={() => setApp({component: 'start'})}>Modus wechseln</button> : null}
    //                     </div>
    //                     <div className="col-10">
    //                         {app.component === 'user' ? <button type="button" class="btn btn-info btn-sm btn-block" disabled>Aufträge verwalten: {userInfo.kuerzel} ({userInfo.standort})</button> : null}
    //                         {app.component === 'admin' ? <button type="button" class="btn btn-info btn-sm btn-block" disabled>Schwerpunkte / Service-Berater bearbeiten</button> : null}
    //                     </div>
    //                 </div>
    //                 <br />
    //                 {loadApp()}
    //             </div>
    //         </>
    // )
}

export default App