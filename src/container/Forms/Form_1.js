import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { Button, Input } from 'reactstrap';

function Form_1(props) {
    const [userform, setuserform] = useState("Form_1");

    let Form_1 = {
        name: yup.string().required("please enter your name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        subject: yup.string().required("please enter your subject"),
    }

    let schema, initialVal;

    schema = yup.object().shape(Form_1);
    initialVal = {
        name: "",
        email: "",
        subject: ""
    }

    const formik = useFormik({
        initialValues: initialVal,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if (userform === "Form_1") {
                console.log("Successfully Send Message");
            }
            resetForm()
        },
    });
    console.log(formik.errors.name);
    console.log(formik.errors.email);
    console.log(formik.errors.subject);

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
                                            <Input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={formik.handleChange} />
                                            {
                                                formik.errors.name ?
                                                <p>{formik.errors.name}</p> : null
                                            }
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <Input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={formik.handleChange} />
                                            {
                                                formik.errors.email ? 
                                                <p>{formik.errors.email}</p> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={formik.handleChange} />
                                        {
                                                formik.errors.subject ? 
                                                <p>{formik.errors.subject}</p> : null
                                            }
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows={5} placeholder="Message" onChange={formik.handleChange} defaultValue={""} />
                                        
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><Button type="submit" onClick={() => setuserform("Form_1")}>Send Message</Button></div>
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