import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';

function ListAppo(props) {
    const [userType, setuserType] = useState("Appointment");

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
                        <h2>Make an Appointment</h2>
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
                   
                </div>
            </section>
        </main>

    );
}

export default ListAppo;