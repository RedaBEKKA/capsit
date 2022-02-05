

import React from 'react';
import PropTypes from 'prop-types';
import classes from '../layouts/private-layout/privateLayout.module.scss'
import Icon from '@mui/material/Icon';
import { Link, useLocation, useMatch } from 'react-router-dom'


export const Sidebar = ({ open, openSidebar, ...props }) => {
    const location = useLocation();
    const isActive = (link) => {
        return location.pathname === link
    }

    const CapstitConextNavigation = [
        { name: 'Dashboard', to: '/dashboard', icon: 'dashboard', },
        { name: 'Machines', to: '/machines', icon: 'home' },
        { name: 'Sites', to: '/sites', icon: 'home' },
        { name: 'Recettes', to: '/recettes', icon: 'receipt' },
        { name: 'Comptes client', to: '/comptes_client', icon: 'groups' },
        { name: 'Factures', to: '/factures', icon: 'monetization_on' },
        { name: 'SAV', to: '/sAV', icon: 'monetization_on' },
    ]
    return (
        <nav id="sidebar" className={`${classes.sidebar} ${classes.close}`}>
            <header>
                <div className={`${classes.image_text}`} onClick={openSidebar}>
                    <span className={`${classes.image}`}>
                        <img src={require('../../assets/capsit_logo.png')} alt="alt" />

                    </span>

                    <div className={`${classes.text} ${classes.logo_text}`}>
                        <span className={`${classes.name}`}>Capsit</span>
                        <span className={`${classes.profession}`}>khelil tarik</span>
                    </div>
                </div>


            </header>

            <div className={classes.menu_bar}>
                <div className={classes.menu}>
                    <ul className={classes.menu_links}>
                        {CapstitConextNavigation.map((item, index) => <li key={index}>
                            <Link to={item.to}
                                className={isActive(item.to) ? classes.active : ''}>
                                <Icon className={classes.icon} > {item.icon}</Icon>

                                <span className={classes.text} >{item.name}</span>
                            </Link>
                        </li>)

                        }
                    </ul>
                </div>
            </div >
        </nav >
    );
};

Sidebar.propTypes = {

};
