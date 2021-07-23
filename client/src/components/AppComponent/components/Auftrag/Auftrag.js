import React, {useState, useEffect, useRef} from 'react'
import { Reason } from '../../enums/statusnames'
import FehlerAnzeige from './FehlerAnzeige/FehlerAnzeige'
import Pdf from '../../Pdf/Pdf'

const Auftrag = props => {

    const {auftrag, closeAuftrag, fehlerData} = props

    const [notiz, setNotiz] = useState(auftrag.notiz)
    const notizRef = useRef()
    const [fehlerObject, setFehlerObject] = useState(auftrag.fehlerobject)
    const fehlerObjectRef = useRef()

    const getFehlerOfAuftrag = () => {
        const finIdentifier = auftrag.fin.substring(3,6) 
        const arr = []

        fehlerData.forEach(a => {
            const baureihen = a.baureihen.split(",").map(item => item.trim())
            baureihen.forEach(b => {
                const baureihenIndentifier = b.substring(1,4)
                if(isNaN(baureihenIndentifier)) arr.push({id: a.id, todo: a.todo, baujahre: a.baujahre, bemerkung: a.bemerkung})
                if(baureihenIndentifier === finIdentifier) arr.push({id: a.id, todo: a.todo, baujahre: a.baujahre, bemerkung: a.bemerkung})
            })
        });

        return arr
    }

    const hasEntry = (fehlerId) => fehlerObject.some(el => el.fehler_id === fehlerId)

    const changeAufgabeFehlerObject = (checked, fehlerId) => {
        if(hasEntry(fehlerId)){
            fehlerObject.map(el => {
                if(el.fehler_id === fehlerId) el.aufgabe = checked
                return el
            })
            setFehlerObject([...fehlerObject])
        } else {
            setFehlerObject([...fehlerObject, {fehler_id: fehlerId, aufgabe: checked}])
        }
    }

    const isAufgabeChecked = (fehlerId) => {
        const obj = fehlerObject.find(el => el.fehler_id === fehlerId)
        if(obj && obj.aufgabe){
            return obj.aufgabe
        } else {
            return false
        }
    }

    const changeInOrdnung = (checked, fehlerId) => {
        if(hasEntry(fehlerId)){
            fehlerObject.map(el => {
                if(el.fehler_id === fehlerId) {
                    el.inOrdnung = checked
                    if(el.nichtIO && el.inOrdnung) el.nichtIO = false
                }
                return el
            })
            setFehlerObject([...fehlerObject])
        } else {
            setFehlerObject([...fehlerObject, {fehler_id: fehlerId, inOrdnung: checked}])
        }
    }

    const isInOrdnung = (fehlerId) => {
        const obj = fehlerObject.find(el => el.fehler_id === fehlerId)
        if(obj && obj.inOrdnung){
            return obj.inOrdnung
        } else {
            return false
        }
    }

    const changeNichtInOrdnung = (checked, fehlerId) => {
        if(hasEntry(fehlerId)){
            fehlerObject.map(el => {
                if(el.fehler_id === fehlerId) {
                    el.nichtIO = checked
                    if(el.nichtIO && el.inOrdnung) el.inOrdnung = false
                }
                return el
            })
            setFehlerObject([...fehlerObject])
        } else {
            setFehlerObject([...fehlerObject, {fehler_id: fehlerId, nichtIO: checked}])
        }
    }

    const isBildVid = (fehlerId) => {
        const obj = fehlerObject.find(el => el.fehler_id === fehlerId)
        if(obj && obj.bildVid){
            return obj.bildVid
        } else {
            return false
        }
    }

    const changeBildVid = (checked, fehlerId) => {
        if(hasEntry(fehlerId)){
            fehlerObject.map(el => {
                if(el.fehler_id === fehlerId) el.bildVid = checked
                return el
            })
            setFehlerObject([...fehlerObject])
        } else {
            setFehlerObject([...fehlerObject, {fehler_id: fehlerId, bildVid: checked}])
        }
    }

    const isNichtInOrdnung = (fehlerId) => {
        const obj = fehlerObject.find(el => el.fehler_id === fehlerId)
        if(obj && obj.nichtIO){
            return obj.nichtIO
        } else {
            return false
        }
    }

    const isNeuerTermin = (fehlerId) => {
        const obj = fehlerObject.find(el => el.fehler_id === fehlerId)
        if(obj && obj.nichtIO && obj.reason === Reason.NEUERTERMIN){
            return true
        } else {
            return false
        }
    }

    const changeNichtInOrdnungStatus = (fehlerId, e) => {
        fehlerObject.map(el => {
            if(el.fehler_id === fehlerId) {
                el.reason = e.target.value
                if(el.reason === Reason.NEUERTERMIN) el.neueAuftragsnummer = ''
            }
            return el
        })
        setFehlerObject([...fehlerObject])
    }

    const changeAuftragsnummer = (fehlerId, e) => {
        fehlerObject.map(el => {
            if(el.fehler_id === fehlerId) el.neueAuftragsnummer = e.target.value
            return el
        })
        setFehlerObject([...fehlerObject])
    }

    const createPdf = (created, auftragsnummer, kennzeichen, fin, erstzulassung, allAufgaben, fehlerObject) => {
        const pdf = new Pdf()
        pdf.createPdf(created, auftragsnummer, kennzeichen, fin, erstzulassung, allAufgaben, fehlerObject)
        pdf.savePdf(auftragsnummer)
    }

    useEffect(() => {
        notizRef.current = notiz
        fehlerObjectRef.current = fehlerObject
      }, [notiz, fehlerObject])

    const hasNoNeueAuftragsnummer = () => {
        if (fehlerObject.length === 0) return false  
        return fehlerObject.some(el => 
            el.nichtIO === true && el.reason === Reason.NEUERTERMIN && el.neueAuftragsnummer === ''
        )
    }

    const closeHandler = () => {
        if(hasNoNeueAuftragsnummer()) {
            alert("Sie müssen für diese Aktion eine valide Auftragsnummer eingeben.")
            return
        }
        closeAuftrag(auftrag.id, notizRef.current, fehlerObjectRef.current)
    }

    useEffect(() => {
        // = componentWillUnmount
        return () => {
            if(hasNoNeueAuftragsnummer()) {
                alert("Sie müssen für diese Aktion eine valide Auftragsnummer eingeben, sonst werden die Änderungen nicht in der Datenbank gespeichert.")
                return
            }
            closeAuftrag(auftrag.id, notizRef.current, fehlerObjectRef.current)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
            <div style={{borderLeft:'1px solid #dee2e6', borderRight:'1px solid #dee2e6', borderBottom:'1px solid #dee2e6', padding:'30px'}}>
                <br />
                <div className="col text-center">
                    <button type="button" className="btn btn-success btn-block" onClick={closeHandler}>Speichern und Schließen</button>
                </div>
                <br />
                <h2>Service-Auftrag am {auftrag.created}</h2>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td className="pr-5">Auftragsnummer:</td>
                            <td>{auftrag.auftragsnummer}</td>
                        </tr>
                        <tr>
                            <td>Kennzeichen:</td>
                            <td>{auftrag.kennzeichen}</td>
                        </tr>
                        <tr>
                            <td>FIN:</td>
                            <td>{auftrag.fin}</td>
                        </tr>
                        <tr>
                            <td>Erstzulassung:</td>
                            <td>{auftrag.erstzulassung}</td>
                        </tr>
                    </tbody>
                </table>
                <br /><br />
                {getFehlerOfAuftrag() && getFehlerOfAuftrag().map((el, index) => 
                    <FehlerAnzeige 
                        key={index} 
                        fehler={el} 
                        changeAufgabeFehlerObject={changeAufgabeFehlerObject}
                        isAufgabeChecked={isAufgabeChecked}
                        isInOrdnung={isInOrdnung}
                        changeInOrdnung={changeInOrdnung}
                        isNichtInOrdnung={isNichtInOrdnung}
                        changeNichtInOrdnung={changeNichtInOrdnung}
                        isBildVid={isBildVid}
                        changeBildVid={changeBildVid}
                        changeNichtInOrdnungStatus={changeNichtInOrdnungStatus}
                        isNeuerTermin={isNeuerTermin}
                        changeAuftragsnummer={changeAuftragsnummer}
                        fehlerObject={fehlerObject}
                    />
                )}
                    <textarea className="form-control" rows="2" cols="40" placeholder="Notizen" value={notiz} onChange={e => setNotiz(e.target.value)}></textarea>
                    
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-outline-success btn-block mt-3" 
                                onClick={() => createPdf(auftrag.created, auftrag.auftragsnummer, auftrag.kennzeichen, auftrag.fin, auftrag.erstzulassung, getFehlerOfAuftrag(), fehlerObject)}>
                                Download PDF with Selection
                            </button>
                        </div>
                    </div>
            </div> 
            <br />
            <br />
            </>
    )
}

export default Auftrag

