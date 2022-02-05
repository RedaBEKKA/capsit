import React from 'react';
import PropTypes from 'prop-types';
import classes from './privateLayout.module.scss'
import {Sidebar} from '../../sidebar/sidebar'
import { Header } from '../../header/Header'




const PrivateLayout = props => {
    let open = false

    const openSidebar = () => {
      
        open = !open
        const sidebar =document.getElementById('sidebar')
        open ? sidebar.classList.remove(classes.close) : sidebar.classList.add(classes.close);

    }

    return (
        <div className={classes.private_page_container}>
            <Sidebar  openSidebar={openSidebar} open={open} />
            < div className={classes.page_container}>
                <Header />
                <div className={classes.page_content}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};
export default PrivateLayout;