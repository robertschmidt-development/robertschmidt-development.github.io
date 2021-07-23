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
                            <td style={{paddingRight:'105px'}}>Years:</td>
                            <td>{fehler.baujahre}</td>
                        </tr>
                        <tr>
                            <td>Notice:</td>
                            <td>{fehler.bemerkung}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className="row">
                    <div className="col-3">
                        <input type="checkbox" style={{ width:'20px',height:'20px', verticalAlign:'middle'}} checked={isAufgabeChecked(fehler.id)} onChange={() => changeAufgabeFehlerObject(!isAufgabeChecked(fehler.id), fehler.id)}/><span>&nbsp;Job</span>
                    </div>
                     <div className="col-3">
                        <input type="checkbox" style={{ width:'20px',height:'20px', verticalAlign:'middle'}} checked={isInOrdnung(fehler.id)} onChange={() => changeInOrdnung(!isInOrdnung(fehler.id), fehler.id)}/>&nbsp;<span>OK</span>
                    </div>
                    <div className="col-3">
                        <input type="checkbox" style={{ width:'20px',height:'20px', verticalAlign:'middle'}} checked={isNichtInOrdnung(fehler.id)} onChange={() => changeNichtInOrdnung(!isNichtInOrdnung(fehler.id), fehler.id)}/>&nbsp;<span>Not OK</span>
                    </div>
                    
                    <div className="col-3">
                        <input type="checkbox" style={{ width:'20px',height:'20px', verticalAlign:'middle'}} checked={isBildVid(fehler.id)} onChange={() => changeBildVid(!isBildVid(fehler.id), fehler.id)}/>&nbsp;<span>Pics / Video made</span>
                    </div>
                </div>
                {isNichtInOrdnung(fehler.id) && 
                    <>
                    <br />
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-3">
                            <select className="form-control" onChange={e => changeNichtInOrdnungStatus(fehler.id, e)} defaultValue={fehlerObject.find(el => el.fehler_id === fehler.id).reason}>
                                <option value={Reason.WIEDERVORLAGE}>See again later</option>
                                <option value={Reason.WIRDGLEICHREPARIERT}>Do now</option>
                                <option value={Reason.NEUERTERMIN}>New Date with costumer</option>
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