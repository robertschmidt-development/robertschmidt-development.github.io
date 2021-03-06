import React from 'react'

const ServiceBeraterForm = props => {

    const {closeForm, saveDefinition, definition, setDefinition, validationFailed} = props

    const form = <>
                    <br />
                    <input type="text" className="form-control" placeholder="Vorname" value={definition.vorname} onChange={e => setDefinition({...definition, vorname: e.target.value})}/>
                    <br />
                    <input type="text" className="form-control" placeholder="Name" value={definition.name} onChange={e => setDefinition({...definition, name: e.target.value})}/>
                    <br />
                    <select className="form-control" value={definition.standort} onChange={e => setDefinition({...definition, standort: e.target.value})}>
                        <option value="London">London</option>
                        <option value="Munich">Munich</option>
                        <option value="Stockholm">Stockholm</option>
                    </select>
                    <br />
                    <input type="text" className="form-control" placeholder="Namenskürzel" value={definition.kuerzel} onChange={e => setDefinition({...definition, kuerzel: e.target.value})}/>
                    <br />
                    <input type="text" className="form-control"  style={validationFailed ? {border:'2px solid #d9534f'} : null} placeholder="E-Mail" value={definition.email} onChange={e => setDefinition({...definition, email: e.target.value})}/>
                    <br />
                    <div className="row">
                        <div className="col-8">
                        <button type="button" className="btn btn-success btn-block" onClick={saveDefinition}>Save</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-secondary btn-block" onClick={closeForm}>Cancel</button>
                        </div>
                    </div>
                </>

    return form
}

export default ServiceBeraterForm