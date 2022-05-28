import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { Button, Input, Label } from 'reactstrap';

function Form_1(props) {
    const [userform, setuserform] = useState("Form_1");

    let Form_1 = {
        name: yup.string().required("please enter doctorform name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        degress: yup.string().required("please enter your degress"),
    }

    let schema, initialVal;

    schema = yup.object().shape(Form_1);
    initialVal = {
        name: "",
        email: "",
        degress: ""
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
                        <h3 className='text-center mb-4 text-success'>Doctor Form</h3>
                            <Formik value={formik}>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                                <Label>Doctor Name</Label>
                                            <Input type="text" name="name" className="form-control" id="name" placeholder="Doctor Name" onChange={formik.handleChange} />
                                            {
                                                formik.errors.name ?
                                                <p>{formik.errors.name}</p> : null
                                            }
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <Label>Doctor Email</Label>
                                            <Input type="email" className="form-control" name="email" id="email" placeholder="Doctor Email" onChange={formik.handleChange} />
                                            {
                                                formik.errors.email ? 
                                                <p>{formik.errors.email}</p> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                            <Label>Doctor Degrees</Label>
                                        <Input type="text" className="form-control" name="degress" id="degress" placeholder="Degrees" onChange={formik.handleChange} />
                                        {
                                                formik.errors.degress ? 
                                                <p>{formik.errors.degress}</p> : null
                                            }
                                    </div>
                                    
                                    <div className="text-center mt-4"><Button type="submit" onClick={() => setuserform("Form_1")}>Send Message</Button></div>
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