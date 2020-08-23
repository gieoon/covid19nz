import React from 'react';
import {IssueOpenedIcon} from '@primer/octicons-v2-react';

import {useTranslation} from 'react-i18next';

export default function TopTitle({

}){
    const {t} = useTranslation();

    const style = {
        color: "#6c757d",
        marginBottom: ".75rem",
        fontSize: ".75rem",
        display: "block",
    };

    return(
        <div className="TopTitle alert">
            <IssueOpenedIcon size={24} />
            <div className="alert-right" style={{width:"initial"}}>
                <label className="fadeInUp" style={style}>{t('Auckland is currently at Alert Level 3')}</label>
                <label className="fadeInUp" style={style}>{t('The rest of New Zealand is currently at Alert Level 2')}</label>
                <label><a className="fadeInUp" style={{fontSize:".75rem"}} href="https://covid19.govt.nz/assets/resources/tables/COVID-19-alert-levels-summary.pdf?fbclid=IwAR1Sb7wHiGeTZOAnTWBTR7wPFoQqSmNP5nCJWGa72euYOIDmKBBDPYCNoUQ" target="_blank" rel="noopener noreferrer">
                    {t('Covid-19 Alert Level system')}
                </a></label>
            </div>
        </div>
    )
}