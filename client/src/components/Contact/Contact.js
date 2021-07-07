import React from 'react'
import classes from './Contact.module.sass'
import {useTranslation} from "react-i18next";

const Contact = () => {

    const {t} = useTranslation('common');

    return <div>
                <br/>
                <ul className={`list-group list-group-flush ${classes.detail}`}>
                    <li className="list-group-item"><span>{t('contact.address')}:</span> Schwalbenstr. 1, 72119 Ammerbuch, {t('contact.land')}</li>
                    <li className="list-group-item"><span>{t('contact.phone')}:</span> +49151 18637425</li>
                    <li className="list-group-item"><span>Mail:</span>  robert.schmidt89(at)gmx.de</li>
                </ul>
            </div>
}

export default Contact