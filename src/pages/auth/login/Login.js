import React, { useState } from "react";
import { Button} from "@mui/material";

import { Link } from "react-router-dom";

// import ImageConnexion from "../../../assets/ImageConnexion.png";
import logo from "../../../assets/logo.png";
import classes from './login.module.scss';

import * as actions from '../../../store/action-creators/index';
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik,Form, Field} from "formik";
import { TextField } from "formik-material-ui"
import * as Yup from "yup"

const Login = () => {
  const { t } = useTranslation(['login'])
  let dispatch = useDispatch()
 
  //Data
  const initialValues = {
    email: "",
    password: "",
    
  }

  const [state, setState] = useState(initialValues);
  
  //password validation
  const lowercaseRegEx = /(?=.*[a-z])/
  const uppercaseRegEx = /(?=.*[A-Z])/
  const numericRegEx = /(?=.*[0-9])/
  const lengthRegEx = /(?=.{8,})/
  const specialsRegEx = /[^A-Za-z 0-9]/g;
  //validation schema
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(
        lowercaseRegEx,
        "Must contain one lowercase alphabetical character!"
      )
      .matches(
        uppercaseRegEx,
        "Must contain one uppercase alphabetical character!"
      )
      .matches(numericRegEx, "Must contain one numeric character!")
      .matches(lengthRegEx, "Must contain at least 8 characters!")
      .matches(specialsRegEx,"Must contain one special caracter")
      .required("Password is required"),
  })

  const onSubmit = (values) => {
      // console.log(values,' values')
      dispatch(actions.auth(values))
   }
   
    
  return (
    <div className={classes.login}>

      <div className={classes.login_container}>
        <div>
          <img 
            className={classes.login_image}
            src={logo}
            alt="logo"
            
          />
        </div>
         <div
          className={classes.login_form}
        >
        
          <div
            className={classes.login_title}
          >
            {t('title')}
          </div>
          <Formik 
            initialValues={state}
            validationSchema={validationSchema}
            onSubmit={(values) =>onSubmit(values)}
          >
          {({ values}) => {
            
          return (
          <Form  autoComplete="on" style={{ margin: 40 }}>
            <Field
              className={classes.textField}
              variant="standard"
              id="email"
              label={t('email')}
              name="email"
              value={values.email}
              type="email"
              component={TextField}
              />
            <br />
            <Field
              className={classes.textField}
              variant="standard"
              id="password"
              label={t('password')}
              name="password"
              value={values.password}
              type="password"
              component={TextField}
              
            />
            <br />

            <Link
              to="/forgot_password"
              className={classes.login_link_forgot_password}
            >
              {t('forgotPassword')}
            </Link>
            <br />
            <Button 
              variant="outlined"
              className={classes.button_login}
              type="submit"
              >
              {t('signin')}
            </Button>
            <br />
            <div
              className={classes.login_compte}
            >
              {t('account')}
              <Link
                to="/register"
                className={classes.login_link_signup}
               
              >
                {t('signup')}
              </Link>
            </div>

            
          </Form>
          )
          }}
          </Formik>
        </div> 

      </div>

    </div>
  );
};

export default Login;
