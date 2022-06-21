import React from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';
import InputBox from '../../component/InputVal/InputBox';
import { MenuItem, TextField } from '@mui/material';

function Appoinment(props) {
    const history = useHistory();
    
    
    const handleInsert = () => {
        history.push("/ListAppoinment")
    }

    const handlesubmit = (values) => {
        // let AppoData = {
        //     name:values.name,
        //     email:values.email,
        //     phone:values.phone,
        //     date:values.date,
        //     department:values.department,
        //     message:values.message
        // }
        let BookData = JSON.parse(localStorage.getItem("appointment"));

        let data = {
            id: Math.floor(Math.random() * 1000),
            ...values
        }
    
        if (BookData == null) {
            localStorage.setItem("appointment", JSON.stringify([data]))
        } else {
            BookData.push(data)
            localStorage.setItem("appointment", JSON.stringify(BookData))
        }
        // console.log(Data);
    }

    

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phone: yup.number().required("please enter number"),
        date: yup.string().required("please select date"),
        message: yup.string().required("please enter message"),
        department: yup.string().required("please select department")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            resetForm();
            handleInsert();
            handlesubmit(values);
        },
    });

    const { handleChange, handleSubmit, handleBlur, errors, touched } = formik;

    // console.log(errors);


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
                        <Form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <InputBox type="text" name="name" className="form-control input-border" id="name" placeholder="Your Name" error={Boolean(errors.name && touched.name)}
                                        errorMessages={errors.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={formik.values.name} />
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <InputBox type="email" className="form-control input-border" name="email" id="email" placeholder="Your Email" error={Boolean(errors.email && touched.email)}
                                        errorMessages={errors.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={formik.values.email} />
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <InputBox type="tel" className="form-control input-border" name="phone" id="phone" placeholder="Your Phone" error={Boolean(errors.phone && touched.phone)}
                                        errorMessages={errors.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={formik.values.phone} />

                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox type="date" name="date" className="form-control datepicker input-border" id="date" placeholder="Appointment Date" error={Boolean(errors.date && touched.date)}
                                        errorMessages={errors.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={formik.values.date} />
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox type="select" name="department" id="department" className="form-select input-border" onChange={handleChange}
                                    onBlur={handleBlur}
                                        value={formik.values.select} 
                                        error={Boolean(errors.department && touched.department)} 
                                        errorMessages={errors.department}>
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </InputBox>

                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <InputBox type="textarea" className="form-control input-border" name="message" rows={5} placeholder="Message (Optional)" 
                                 error = {Boolean(errors.message && touched.message)}
                                    errorMessages = {errors.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={formik.values.message} />

                                <div className="validate" />
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center">
                            <button type="submit"> Make an Appointment </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Appoinment;