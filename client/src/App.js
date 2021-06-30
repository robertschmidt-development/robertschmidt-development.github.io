import React, {useState} from 'react'
import MyService from './components/MyService/MyService'
// import AdminRoutes from './AdminRoutes'
// import UserRoutes from './UserRoutes'
// import NavAdmin from './components/NavAdmin/NavAdmin'
// import NavUser from './components/NavUser/NavUser'
// import wackenhut from './Pdf/wackenhut.png'
// import Start from './components/Start/Start'
// import { Redirect } from "react-router-dom";
// import { Menu } from './enums/menunames'


const App = () => {

    return <div className="container">
                <h1 class="display-4">Robert Schmidt Development</h1>
                <code style={{fontSize:'x-large'}}>{'<> '}Programming(){'{ ...Solution }'}{' </>'}</code>
                <br/><br/><br/>
                <div class="card-deck">
                        <MyService />
                    <div class="card bg-warning">
                        <div class="card-body text-center">
                        <p class="card-text">Some text inside the second card</p>
                        </div>
                    </div>
                    <div class="card bg-success">
                        <div class="card-body text-center">
                        <p class="card-text">Some text inside the third card</p>
                        </div>
                    </div>
                    <div class="card bg-danger">
                        <div class="card-body text-center">
                        <p class="card-text">Some text inside the fourth card</p>
                        </div>
                    </div>
                
                </div>
            </div>


        

                
                        
   
            

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