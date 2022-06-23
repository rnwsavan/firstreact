import React, { useEffect, useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';
import InputBox from '../../component/InputVal/InputBox';
function Appoinment(props) {
    const history = useHistory();
    const [update, setUpdate] = useState(false);


    const handleInsert = () => {
        history.push("/ListAppoinment")
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
            if (update) {
                handleUpdate(values)
            } else {
                let undata = {
                    id: Math.floor(Math.random() * 1000),
                    ...values
                }
                let BookData = JSON.parse(localStorage.getItem("appointment"));

                if (BookData === null) {
                    localStorage.setItem("appointment", JSON.stringify([undata]))
                } else {
                    BookData.push(undata)
                    localStorage.setItem("appointment", JSON.stringify(BookData))
                }
                resetForm();
                handleInsert();
            }
        },
    });

    const EditData = () => {
        let localData = JSON.parse(localStorage.getItem('appointment'));

        if (localData !== null && props.location.state) {
            let UFilter = localData.filter((u) => u.id === props.location.state.id)
            console.log(UFilter);
            formik.setValues(UFilter[0])
            setUpdate(true)
        }
    }

    const handleUpdate = (data) => {
        console.log(data);

        let localData = JSON.parse(localStorage.getItem("appointment"));

        console.log(localData);

        // let ufd = localData.map((u) => id == id)

        let shape = localData.map((l) => {
            if (l.id == data.id) {
                return data
            } else {
                return l
            }
        })

        localStorage.setItem('appointment', JSON.stringify(shape));
        formik.resetForm()
        history.push("/ListAppoinment");

    }

    useEffect(
        () => {
            EditData();
        }, []
    )

    const { handleChange, handleSubmit, handleBlur, errors, touched, values } = formik;

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
                                        value={values.name} />
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <InputBox type="email" className="form-control input-border" name="email" id="email" placeholder="Your Email" error={Boolean(errors.email && touched.email)}
                                        errorMessages={errors.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} />
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <InputBox type="tel" className="form-control input-border" name="phone" id="phone" placeholder="Your Phone" error={Boolean(errors.phone && touched.phone)}
                                        errorMessages={errors.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone} />

                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox type="date" name="date" className="form-control datepicker input-border" id="date" placeholder="Appointment Date" error={Boolean(errors.date && touched.date)}
                                        errorMessages={errors.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.date} />
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox type="select" name="department" id="department" className="form-select input-border" onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.select}
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
                                    error={Boolean(errors.message && touched.message)}
                                    errorMessages={errors.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message} />

                                <div className="validate" />
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            {
                                update ? <div className="text-center"><button type="submit">Update an Appointment</button></div> :
                                    <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            }
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Appoinment;