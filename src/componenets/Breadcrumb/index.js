import React from 'react';
import PropTypes from 'prop-types';
import classes from './breadcrumb.module.scss'

const index = props => {
    return (
        <div className={classes.breadcrumb}>
            {props.title}
        </div>
    );
};

index.propTypes = {
    title:PropTypes.string,

};

export default index;