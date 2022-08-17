import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ForgotPassword, GoogleLoginUser, LoginUser, SignupUser } from '../../Redux/Action/auth.action';



function Login(props) {
    const [userType, setUserType] = useState('Login')
    const [reset, setReset] = useState(false)

    const dispatch = useDispatch()

    const handletLogin = (values) => {
        // alert(JSON.stringify(values, null, 2));
        sessionStorage.setItem("user", "1234567")

    }

    const handleSignup = (values) => {

        const data = JSON.parse(localStorage.getItem("users"));

        console.log(data);

        if (data === null) {
            localStorage.setItem("users", JSON.stringify([values]));
        } else {
            data.push(values);
            localStorage.setItem("users", JSON.stringify(data));
        }

        data.push(values);
        console.log(data);
        localStorage.setItem("users", JSON.stringify(values));
        alert(JSON.stringify(values, null, 2));


    }
    
    const handleGoogleLogin=()=>{
        dispatch(GoogleLoginUser())
    }

    const handlepassword = (values) => {
        // alert(JSON.stringify(values.email));
        dispatch(ForgotPassword(values))
    }

    let Login = {
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }

    let Signup = {
        name: yup.string().required('please enter name'),
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }
    let Password = {
        email: yup.string().required('enter email').email('enter valid email')
    }


    let schema, initVal;

    // console.log(reset);
    if (userType === "Login" && !reset) {
        schema = yup.object().shape(Login);
        initVal = {
            email: '',
            password: ''
        }
    } else if (userType === "Signup" && !reset) {
        schema = yup.object().shape(Signup);
        initVal = {
            name: '',
            email: '',
            password: ''
        }
    } else if (reset) {
        // console.log(reset);
        schema = yup.object().shape(Password);
        initVal = {
            email: ''
        }
    }

    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if (userType === "Login" && !reset) {
                // handletLogin(values)
                dispatch(LoginUser(values))
            } else if (userType === "Signup" && !reset) {
                // handleSignup(values)
                dispatch(SignupUser(values))
            } else{
                handlepassword(values)
                // dispatch(ForgotPassword(values))
            }
            resetForm();
        }
    })


    // console.log(formik.errors);

    return (
        <section id="appointment" className="appointment d-flex">
            <div className="container">
                <div className='section-title'>
                    {
                        reset ?
                            <h2 className='centerr'>Reset Password</h2> :
                            userType === 'Login' ? <h2 className='centerr'>Login</h2> : <h2 className='centerr'>Signup</h2>
                    }
                </div>
                <div className='php-email-form'>
                    <Formik value={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            <div className='row align-items-center justify-content-center'>
                                {
                                    userType === 'Login' ? null
                                        :
                                        <div className="col-md-7 form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                onBlur={formik.handleBlur}
                                            />
                                            {
                                                formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                            }

                                            <div className="validate" />
                                        </div>
                                }
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                                    }

                                    <div className="validate" />
                                </div>
                                {
                                    reset === true ?
                                        null :
                                        <div className="col-md-7 form-group mt-3 mt-md-0">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Your Password"
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                                onBlur={formik.handleBlur}
                                            />
                                            {
                                                formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : ''
                                            }

                                            <div className="validate" />
                                        </div>
                                }
                                {
                                    reset ?
                                        <div className="text-center">
                                            <button type="submit">Forgot password</button><br></br>
                                        </div>
                                        :
                                        userType === 'Login' ?
                                            <div className="text-center">
                                                <button type="submit">Login</button><br></br>
                                            </div> :
                                            <div className="text-center">
                                                <button type="submit">signup</button>
                                            </div>
                                }
                                <button className='google-icon' onClick={() => handleGoogleLogin()}><img width={25} height={25} src='assets/img/Google-Logo-PNG-Image.png'/> Google Login</button>
                                {
                                    reset === true ?
                                        <div className='text-center mt-5'>
                                            <span>already have an account ?</span>
                                            <a onClick={() => setReset(false)}>Login</a>
                                        </div> :
                                        userType === 'Login' ?
                                            <div className='text-center mt-5'>
                                                <span>create a New account ?</span>
                                                <a onClick={() => { setUserType('Signup') }} >signup</a> <br></br>
                                                <a className='mt-3' onClick={() => { setReset(true) }}>Forget password</a>
                                            </div> :
                                            <div className='text-center mt-5'>
                                                <span>already have an account ?</span>
                                                <a onClick={() => { setUserType('Login') }} >Login</a>
                                            </div>
                                }
                            </div>
                        </Form>
                    </Formik>
                    <div>
                    </div>
                </div>
            </div>


        </section >
    );
}





export default Login;