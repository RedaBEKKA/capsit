import React from 'react';
import { SnackbarAlert } from '../componenets/snackbar/snackbar'
import { useDispatch } from 'react-redux'
import * as action from '../store/action-creators'
import axios from 'axios'
import { useTranslation } from "react-i18next";


const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        const { t } = useTranslation(['common', 'home','login'])
        const dispatch = useDispatch()
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
        axios.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            if (error.response) {
                const { status } = error.response
                switch (status) {
                    case 400: {
                        dispatch(action.openSnackBar('succes message', 'error'));
                    }
                        break;
                    case 401:
                        dispatch(action.openSnackBar('errorMessage401', 'error'));
                        break;
                    case 403:
                        dispatch(action.openSnackBar('errorMessage403', 'error'));
                        break;
                    case 404:
                        dispatch(action.openSnackBar(t('errorMessage404'), 'error'));
                        break;
                    case 500:
                        dispatch(action.openSnackBar('errorMessage500', 'error'));
                        break;
                    case 502:
                        dispatch(action.openSnackBar('errorMessage502', 'error'));
                        break;
                    case 504:
                        dispatch(action.openSnackBar('errorMessage504', 'error'));
                        break;
                    default:
                        break;
                }



            }
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });



        return (
            <>
                <SnackbarAlert />
                <WrappedComponent {...props} />
            </>
        );

    }
}

export default withErrorHandler;


