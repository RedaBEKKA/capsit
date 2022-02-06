import React, { useState } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import classes from './publicLayout.module.scss';
import { getCurrentLangue } from "../../../services/Storage"
import { useTranslation } from "react-i18next";

export const PublicLayout = props => {
    const [lang, setLang] = useState(getCurrentLangue() === 'fr' ?'en': 'fr');
    const { t } = useTranslation(['common'])
    const  page  = props.children.props.children.props


    const footerContent = [
        { name: t('about'), to: '/aprops' },
        { name: t('privacy'), to: '/aprops' },
        { name: t('condition'), to: '/aprops' },
        { name: t('contact'), to: '/aprops' }
    ]

    
    // console.log(props,'mes props')
    // console.log(page)

    const goTo = (to) => {
        // to do 
    }
    const changeLang = () => {
        i18next.changeLanguage(lang)
        setLang(lang==='fr'?'en':'fr');
    };



    const renderFooter = () => {
        return footerContent.map((item, index) => {
            return <div onClick={() => goTo(item.to)} className={classes.fotter_item} key={index}> {item.name}</div>

        }
        )
    }
    return (
        <div className={classes.public_layout}>
            <div className={classes.public_page_container}  >
                <div className={classes.public_header}>
                    <div> {t('back')} <span > capsit.fr</span></div>
                    <span onClick={()=>changeLang()}> {lang === 'fr' ? 'EN' : 'FR'}</span>
                </div>

                <div className={classes.public_page_content}>
                    {props.children}
                </div>
                <div className={classes.public_footer}>
                    {renderFooter()}
                </div>


            </div >

        </div>
    );
};

PublicLayout.propTypes = {

};

