import React from 'react'
import { Menu } from '../../EnumMenu'
import classes from './Head.module.sass'
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Head = props => {

    const {setMenu} = props
    const {i18n} = useTranslation('common');

    return <>
                <div>
                    <div className="row">
                        <div className="col-11">
                            <h1 className={`display-4 ${classes.link}`} onClick={() => setMenu(Menu.INIT)}>Robert Schmidt Development</h1>
                        </div>
                        
                        <div className="col-1">
                            <br/>
                            <div className="dropdown dropleft">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><FontAwesomeIcon icon={faGlobe}/></button>
                                <div className={`dropdown-menu ${classes.link}`}>
                                    <button className="dropdown-item" onClick={() => i18n.changeLanguage('en')}>English</button>
                                    <button className="dropdown-item" onClick={() => i18n.changeLanguage('de')}>German</button>
                                    <button className="dropdown-item" onClick={() => i18n.changeLanguage('se')}>Swedish</button>
                                </div>
                            </div>
                            
                        </div>
                            
                        
                    </div>
                    <code style={{fontSize:'x-large'}}>{'<> '}Programming(){'{ ...Solutions }'}{' </>'}</code>
                </div>
                <br/><br/><br/>
            </>
}

export default Head