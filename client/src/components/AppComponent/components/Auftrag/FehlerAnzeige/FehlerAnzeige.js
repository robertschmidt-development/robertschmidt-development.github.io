import React from 'react'
import { Reason} from '../../../enums/statusnames'

const FehlerAnzeige = props => {

    const {
        fehler, 
        changeAufgabeFehlerObject, 
        isAufgabeChecked, 
        isInOrdnung, 
        changeInOrdnung, 
        isNichtInOrdnung, 
        changeNichtInOrdnung, 
        isBildVid, 
        changeBildVid,
        changeNichtInOrdnungStatus,
        isNeuerTermin,
        changeAuftragsnummer,
        fehlerObject
    } = props

    return (
            <>
                <h5>{fehler.todo}</h5>
                <table>
                    <tbody>
                        <tr>
                            <td style={{paddingRight:'105px'}}>Baujahre:</td>
                            <td>{fehler.baujahre}</td>
                        </tr>
                        <tr>
                            <td>Bemerkung:</td>
                            <td>{fehler.bemerkung}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className="row">
                    <div className="col-3">
                        <input type="checkbox" style={{ width:'20px',height:'20px', verticalAlign:'middle'}} checked={isAufgabeChecked(fehler.id)} onChange={() => changeAufgabeFehlerObject(!isAufgabeChecked(fehler.id), fehler.id)}/><span>&nbsp;Aufgabe</span>
                    </div>
                     <div className="col-3">
                        <input type="checkbox" style={{ width:'20px',height:'20px', verticalAlign:'middle'}} checked={isInOrdnung(fehler.id)} onChange={() => changeInOrdnung(!isInOrdnung(fehler.id), fehler.id)}/>&nbsp;<span>In Ordnung</span>
                    </div>
                    <div className="col-3">
                        <input type="checkbox" style={{ width:'20px',height:'20px', verticalAlign:'middle'}} checked={isNichtInOrdnung(fehler.id)} onChange={() => changeNichtInOrdnung(!isNichtInOrdnung(fehler.id), fehler.id)}/>&nbsp;<span>Nicht In Ordnung</span>
                    </div>
                    
                    <div className="col-3">
                        <input type="checkbox" style={{ width:'20px',height:'20px', verticalAlign:'middle'}} checked={isBildVid(fehler.id)} onChange={() => changeBildVid(!isBildVid(fehler.id), fehler.id)}/>&nbsp;<span>Bilder/ Video gemacht</span>
                    </div>
                </div>
                {isNichtInOrdnung(fehler.id) && 
                    <>
                    <br />
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-3">
                            <select className="form-control" onChange={e => changeNichtInOrdnungStatus(fehler.id, e)} defaultValue={fehlerObject.find(el => el.fehler_id === fehler.id).reason}>
                                <option value={Reason.WIEDERVORLAGE}>Wiedervorlage</option>
                                <option value={Reason.WIRDGLEICHREPARIERT}>Wird gleich repariert</option>
                                <option value={Reason.NEUERTERMIN}>Neuer Termin</option>
                            </select>
                        </div>
                        {isNeuerTermin(fehler.id) && <div className="form-group ml-3">
                            <input type="text" className="form-control" placeholder="Auftragsnummer" onChange={e => changeAuftragsnummer(fehler.id, e)} value={fehlerObject.find(el => el.fehler_id === fehler.id).neueAuftragsnummer}/>
                            </div>}
                    </div>
                   </>
                }
                <hr />
            </>
    )
}

export default FehlerAnzeige