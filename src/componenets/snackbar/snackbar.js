import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import classes from "./snackBar.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/action-creators'



export const SnackbarAlert = props => {
    const dispatch = useDispatch();

    const { message, openSnackbar, snakbarType } = useSelector(
        state => state.ui
    );

    const handleClose = () => {
        dispatch(actions.closSnackBar());
    }

    const action = (
        <>

            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );
    console.log(message, openSnackbar, snakbarType)
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleClose}
                action={action}
                ContentProps={{
                    "aria-describedby": "message-id",
                    className: classes[snakbarType],
                }}
                message={
                    <span id="message-id" >
                        <div>{message}</div>
                    </span>
                }
            />

        </>
    );
};




