import React from 'react'
import ReactDOM from 'react-dom'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import App from './App'
import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";
import common_se from "./translations/se/common.json";


i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',                              
    resources: {
        en: {
            common: common_en               
        },
        de: {
            common: common_de
        },
        se: {
            common: common_se
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>, 
    document.getElementById('root')
)
