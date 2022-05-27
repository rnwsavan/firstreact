import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';


function Login(props) {
  // const [userType, setUserType] = useState('login')
  const [userType, setUserType] = useState('login')

  const login = {
    email: yup.string().email("plaese enter valid  email ").required("plz enter email id"),
    password: yup.string().required("enter filed ")
  }

  const signup = {
    name: yup.string().required("please enter your name"),
    email: yup.string(

    ).email("plaese enter valid  email ").required("plz enter email id"),
    password: yup.string().required("enter filed.....")
  }

  let schema, initval
  if (userType === 'login') {
    schema = yup.object().shape(login);
    initval = {
      email: '',
      password: ''
    }

  }
  else if (userType === 'sign-in') {
    schema = yup.object().shape(signup);
    initval = {
      name: '',
      email: '',
      password: ''
    }
  }

  const handlelogin = (values) => {
    console.log('handlelogin', values);
  }

  const handelsignup = (values) => {
    console.log('handlesignup', values);
  }

  const formik = useFormik({
    initialValues: initval,
    validationSchema: schema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      if (userType === 'login') {
        handlelogin(values);
      }
      else if (userType === 'sign-in') {
        handelsignup(values);
      }
    },
  });

  //  console.log(formik.errors.email);




  return (
    <>
      <section id="appointment" className="appointment">
        <div className="container">
          {
            userType === 'login' ?
              <div className="section-title">
                <h2> login</h2>
                <p>create new account </p>
              </div>
              :
              <div className="section-title">
                <h2> sign up </h2>
                <p>already have been account?</p>
              </div>
          }
          <Formik value={Formik}>

            <Form onSubmit={formik.handleSubmit} className="php-email-form">
              {
                userType === 'sign-in' ?
                  <div className="col-md-4 form-group">
                    <input type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"

                      onChange={formik.handleChange}
                    />

                    <div className="validate" />
                    {
                      formik.errors.email ? <p> {formik.errors.email}</p> : null
                    }
                  </div>
                  : null
              }
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email"
                  className="form-control"
                  name="email" id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  onChange={formik.handleChange} />
                <div className="validate" />
                {
                  formik.errors.email ? <p> {formik.errors.email}</p> : null
                }
              </div>
              <div className="row">
                <div className="col-md-4 form-group">
                  <input type="text"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Your password"
                    data-rule="minlen:4"
                    onChange={formik.handleChange} />
                  <div className="validate" />
                  {
                    formik.errors.password ? <p> {formik.errors.password}</p> : null
                  }
                </div>

                <div>
                  <button className="text-center" type="submit" onClick={() => setUserType('login')}>login</button></div>
                <div className="text-center"><button className="text-center" type="submit" onClick={() => setUserType('sign-in')}>sign-in</button></div>
              </div>
            </Form>
          </Formik>
        </div>
      </section>

    </>
  );
}

export default Login;