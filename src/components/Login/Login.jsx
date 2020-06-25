import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../Login/login.scss";
import AuthContext from "../../AuthContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required")
});

const baseUrl =
  "https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login";

const Login = props => {
  const [isAuthorizationError, setIsAuthorizationError] = useState(false);
  const value = useContext(AuthContext);

  const addTokenToLocalStorage = token => {
    localStorage.setItem("auth_token", JSON.stringify(token));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        fetch(`${baseUrl}`, {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "content-type": "application/json" }
        })
          .then(response => {
            if (response.status >= 400 && response.status < 600) {
              throw new Error("Bad response from server");
            }
            return response.json();
          })
          .then(body => {
            addTokenToLocalStorage(body.access_token);
            value.changeAuthStatus();
            props.toggleModal(false);
          })
          .catch(error => {
            console.error(error);
            setIsAuthorizationError(true);
          });
      }}>
      {({ errors, touched }) => (
        <Form>
          <div className='login-form__item'>
            <Field
              name='email'
              className='inp login-form__input'
              type='email'
              placeholder='login'
            />
            {errors.email && touched.email && (
              <p className='alert__info alert--danger'>
                Please, input a valid email
              </p>
            )}
          </div>
          <div className='login-form__item'>
            <Field
              name='password'
              className='inp login-form__input'
              type='password'
              placeholder='password'
            />
            {errors.password && touched.password && (
              <p className='alert__info alert--danger'>
                Please, input a valid password
              </p>
            )}
            {isAuthorizationError && (
              <p className='alert__info alert--danger'>
                The data which you've entered is not correct for authorization
              </p>
            )}
          </div>
          <div className='login-form__btn-group'>
            <button type='submit' className='btn login-form__btn'>
              Ok
            </button>
            <button
              className='btn login-form__btn'
              type='button'
              onClick={() => {
                props.toggleModal(false);
              }}>
              Close
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

Login.propTypes = {
  toggleModal: PropTypes.func
};

export default Login;
