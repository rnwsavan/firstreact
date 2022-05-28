import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';


function Form_1(props) {
    const [userType, setUserType] = useState("Send Message");

    const Message = {
        name: yup.string().name("please enter valid name").required("please enter your name"),
        email: yup.string().email("please enter valid email").required("please enter your email"),
        subject: yup.string().subject("please enter valid subject").required("please venter your subject"),
        message: yup.string().textarea("please enter vaild message").required("please enter your message"),
    }
    let schema, initiValue;

    if (userType === "Message") {
        schema = yup.object().shape(Message);
        initiValue = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    }

    const formik = useFormik({
        initialValues: initiValue,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));

            if (userType === "Message") {
                console.log("Successfully message");
            }
            resetForm()
        },
    });

    console.log(formik.errors.name);
    console.log(formik.errors.email);
    console.log(formik.errors.subject);
    console.log(formik.errors.message);
    return (
        <>
            <main>
                <section className='mt-5'>
                    <div className='container'>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <Formik value={formik}>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={formik.handleChange} />
                                            {
                                                formik.errors.name ? 
                                                <p>{formik.errors.name}</p> : null
                                            }
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={formik.handleChange} />
                                            {
                                                formik.errors.email ? 
                                                <p>{formik.errors.email}</p> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={formik.handleChange} />
                                        {
                                                formik.errors.subject ? 
                                                <p>{formik.errors.subject}</p> : null
                                            }
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows={5} placeholder="Message" onChange={formik.handleChange} />
                                        {
                                                formik.errors.message ? 
                                                <p>{formik.errors.message}</p> : null
                                            }
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit" onClick={() => setUserType("Message")}>Send Message</button></div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Form_1;