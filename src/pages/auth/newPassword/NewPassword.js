import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import logo from "../../../assets/logo.png";
import * as actions from "../../../store/action-creators/index";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import classes from "./newPassword.module.scss";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
const NewPassword = () => {
  const { t } = useTranslation(["login"]);

  //Data
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const [state, setState] = useState(initialValues);
  const [Valide, setValide] = useState(null);
  //password validation
  const lowercaseRegEx = /(?=.*[a-z])/;
  const uppercaseRegEx = /(?=.*[A-Z])/;
  const numericRegEx = /(?=.*[0-9])/;
  const lengthRegEx = /(?=.{8,})/;
  const specialsRegEx = /[^A-Za-z 0-9]/g;
  const p = document.querySelector("p");

  //validation schema
  let validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")

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
      .matches(specialsRegEx, "Must contain one special caracter")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log(values, " values");
    dispatch(actions.newPassword(values, navigate));
  };

  // useEffect( async(values) => {
  //   console.log('valuesa', values);
  //   const IsValide = await validationSchema.isValid(values);
  //   console.log("IsValide", IsValide);
  //   setValide(IsValide)

  // }, [])

  // console.log('Valide', Valide);
  return (
    <div className={classes.newPass_login}>
      <div className={classes.newPass_container}>
        <div className={classes.newPass_logo}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "270px", height: "152px", marginTop: "5px" }}
          />
        </div>
        <div className={classes.newPass_form}>
          <div className={classes.newPass_title}>{t("titleNewPassword")}</div>

          <div className={classes.newPass_enter_Password}>
            {t("textNewPassword")}
          </div>
          <div className={classes.newPass_reset_Password}>
            {t("textNewPasswordDetails")}
          </div>
          <Formik
            initialValues={state}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmit(values)}
          >
            {(formik) => {
              console.log("isValid !!", formik);
              return (
                <Form className="" autoComplete="on" style={{ margin: 40 }}>
                  <Field
                    className={classes.textField}
                    variant="standard"
                    id="password"
                    label={t("password")}
                    name="password"
                    value={formik.values.password}
                    type="password"
                    component={TextField}
                  />
                  <div className={classes.newPass_text_security}>
                    {formik.errors.length >= 0 && t("securityOfPassword")}

                    {!formik.isValid && formik.errors.password
                      ? t("securityOfPassword")
                      : formik.values.password && t("securityOfPassword")}

                    {!formik.errors.length == 0 && (
                      <span style={{ color: "green" }}>Fort</span>
                    )}

                    {!formik.isValid && formik.errors.password ? (
                      <span style={{ color: "red" }}>Faible</span>
                    ) : (
                      formik.values.password && (
                        <span style={{ color: "green" }}>Fort</span>
                      )
                    )}
                  </div>
                  <Field
                    className={classes.textField}
                    variant="standard"
                    id="confirmPassword"
                    label={t("confirmPassword")}
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    type="password"
                    component={TextField}
                  />
                  <br />
                  <Button
                    className={classes.newPass_button}
                    variant="outlined"
                    type="submit"
                    style={{
                      color: "#26B965",
                      border: "2px solid #26B965",
                      marginTop: 35,
                    }}
                  >
                    {t("register")}
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;

// const testedResult = validationSchema.password;
// const createPasswordLabel = () => {
//   let score = 0
//   let regexPositive = ["[A-Z]","[a-z]","[0-9]","\\W",]
//   regexPositive.forEach((regex, index) => {
//     if (new RegExp(regex).test(testedResult)) {
//       score +=1
//     }
//   })
//   switch (score) {
//     case 0:
//       return ({
//         value: 0,
//         info: "",
//       });
//     case 1:
//       return ({
//         value: 1,
//         info: "Weak",
//       });
//     case 2:
//       return ({
//         value: 2,
//         info: "Fair",
//       });
//     case 3:
//       return ({
//         value: 3,
//         info: "Good",
//       });
//     case 4:
//       return ({
//         value: 4,
//         info: "Strong",
//       });
//     default:
//       return null
//   }

// }

// const validate=(values)=>{

// }
// console.log('validationSchema', validationSchema);
