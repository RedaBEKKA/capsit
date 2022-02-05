import React, { useState } from "react";
import { Button} from "@mui/material";
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import logo from "../../../assets/logo.png";
import classes from './forgotPassword.module.scss'

import * as actions from '../../../store/action-creators/index';
import {  useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik,Form, Field} from "formik";
import { TextField } from "formik-material-ui"
import * as Yup from "yup"

const ForgotPassword = () => {
    
  const { t } = useTranslation(['login'])
  const navigate =useNavigate()
  const handleClick = () => {
    navigate('/');
 
  }
    //Data
    const initialValues = {
      email: "",
    }
  
    const [state, setState] = useState(initialValues);
  
     //validation schema
    let validationSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required")
      
    })

  let dispatch=useDispatch()
  const onSubmit= (values) => {
    console.log(values,'values')
    dispatch(actions.forgotPassword(values))
  }

    return (
        <div
          className= {classes.forgotPass_login}
        >
        <div
          className={classes.forgotPass_container}
        >
        <div className="">
          <img
            className={classes.forgotPass_logo}
            src={logo}
            alt="logo"
          />
        </div>
        <div
          className={classes.forgotPass_form}
        >
        <ArrowBackIcon 
        className={classes.forgotPass_icon}
        onClick={() => handleClick()}  />
          <div
            className={classes.forgotPass_title}
          >
            {t('titleForgotPassword')}
          </div>

          <div  className={classes.forgotPass_email_title} >
          {t('textForgotPassword')}
          </div>
          <div
          className={classes.forgotPass_reset_password}
          > 
          {t('textForgotPasswordDetails')}
          </div>
          <Formik 
            initialValues={state}
            validationSchema={validationSchema}
            onSubmit={(values) =>onSubmit(values)}
          >
          {({ values}) => {
            
          return (
          <Form autoComplete="on" style={{margin:40}}>
            <Field
             className={classes.textField}
              variant="standard"
              id="email"
              label={t('mailAddress')}
              name="email"
              value={values.email}
              type="email"
              component={TextField}
            />
            <br/>
            <Button
              className={classes.forgotPass_button}
              variant="outlined"
              type="submit"
            >
              {t('submit')}
            </Button>
            
          </Form>
          )
          }}
          </Formik>
        </div>
       
      </div>
     
    </div>
    )
}

export default ForgotPassword
