import React from 'react'
import classes from './Contact.module.sass'
import {useTranslation} from "react-i18next";

const Contact = () => {

    const {t} = useTranslation('common');

    return <div>
                <br/>
                <ul className={`list-group list-group-flush ${classes.detail}`}>
                    <li><a href="mailto:robert.schmidt89@gmx.de" type="button" class="btn btn-primary btn-block">{t('contact.button')}</a></li>
                    <li className="list-group-item">robert.schmidt89(at)gmx.de</li>
                </ul>
            </div>
}

export default Contact