import React, { useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';

function Appo(props) {
    const [userType, setuserType] = useState("Appointment");
    const history = useHistory;

    const handleInsert=()=>{
        history.push("/ListAppoinment")
    }
    let Appo = {
        name: yup.string().required("please Enter your Name"),
        email: yup.string().email("please enter valid email").required("please enter your email"),
        phone: yup.string().required("please enter your phone"),
        date: yup.string().required("please enter date"),
        message: yup.string().required("please enter your message"),
        department: yup.string().required("please select department")
    }

    let schema, initiValue;

    if (userType === "Appointment") {
        schema = yup.object().shape(Appo);
        initiValue = {
            name: "",
            email: "",
            phone: "",
            date: "",
            message: "",
            department: ""
        }
    }

    const formik = useFormik({
        initialValues: initiValue,
        validationSchema: schema,
        onSubmit: (values, { reset }) => {
            if (userType === "Appointment") {
                console.log("Successfully Appointment");
            }
            reset()
        }
    });

    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Book Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className='row text-center mb-4'>
                        <div className='col-md-6'>
                            <NavLink to={"/apponmemt"} activeClassName='aptNav'>Book Appointment</NavLink>
                        </div>
                        <div className='col-md-6'>
                            <NavLink to={"/ListAppoinment"} activeClassName='aptNav'>List Appointment</NavLink>
                        </div>
                    </div>
                    <Formik value={formik}>
                        <Form action method="post" role="form" className="php-email-form" onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={formik.handleChange} />
                                    {
                                        formik.errors.name ?
                                            <p>{formik.errors.name}</p> : null
                                    }
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={formik.handleChange} />
                                    {
                                        formik.errors.email ?
                                            <p>{formik.errors.email}</p> : null
                                    }
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={formik.handleChange} />
                                    {
                                        formik.errors.phone ?
                                            <p>{formik.errors.phone}</p> : null
                                    }
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={formik.handleChange} />
                                    {
                                        formik.errors.date ?
                                            <p>{formik.errors.date}</p> : null
                                    }
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="department" id="department" className="form-select">
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                        {
                                        formik.errors.department ?
                                            <p>{formik.errors.department}</p> : null
                                    }
                                    </select>
                                    
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} onChange={formik.handleChange} />
                                {
                                    formik.errors.message ?
                                        <p>{formik.errors.message}</p> : null
                                }
                                <div className="validate" />
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit" onClick={() => handleInsert()}>Make an Appointment</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Appo;