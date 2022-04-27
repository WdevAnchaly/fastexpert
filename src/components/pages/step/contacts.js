import React, { useState } from 'react';
import { Step } from './style.js'
import { useDispatch } from 'react-redux'
import { contacts } from '../../../actions/index.js';
import { useNavigate } from 'react-router-dom';





function Contacts() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('');
    
    const [formData, setFormData] = useState({firstname: "", lastname: "", email: "" });
    const submituserRegistrationForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (!formData.firstname) {
            errors["firstname"] = "Please enter your  firstname.";
        }
        if (!formData.lastname) {
            errors["lastname"] = "Please enter your lastname.";
        }
        if (!formData.email) {
            errors["email"] = "Please enter your email.";
        }

        setErrors(errors);
        if (formData.firstname && formData.lastname && formData.email) {
            dispatch(contacts(formData));
            navigate(`/phone`);
        }
    }
    const contactform = ({ target: { name, value } }) => {
        setFormData({...formData, hasChanged: true, [name]: value });
    };
    return (<Step>
        <section className="mainpage bg-step" id="HoverBTN">
            <div className="main_container">
                <section className="mainpage pt-5">
                    <div id="slider ">
                        <div className="fw-bold text-center pt-5 "><h3 className="text-dark">Your list is ready! Where should we send it?</h3>
                            <p className='font-weight-light'>We’ll email you a list of agents that we feel fit your needs and  <br />
                                you choose which one to work with.</p>
                        </div>

                        <div className='container pb-5'>
                            <div className='row d-flex justify-content-center pt-5 pb-5'>
                                <div className='col-lg-7 col-sm-7'>
                                    <form onSubmit={submituserRegistrationForm} method="post">
                                        <div className="form-group ">
                                            <div className='row'>
                                                <div className='col-lg-6 col-sm-6 col-6'>
                                                    <label htmlFor="firstname">First Name</label>
                                                    <input type="text" className={errors.firstname ? "form-control bd-red" : "form-control"} id="firstname" name="firstname" onChange={contactform} />
                                                    
                                                </div>
                                                <div className='col-lg-6 col-sm-6 col-6'>
                                                    <label htmlFor="lastname">Last Name</label>
                                                    <input type="text" className={errors.lastname ? "form-control bd-red" : "form-control"} id="lastname" name="lastname" onChange={contactform} />
                                                    
                                                </div>

                                            </div>

                                        </div>

                                        <div className="form-group pt-3">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className={errors.email ? "form-control bd-red" : "form-control"} id="email" name="email" onChange={contactform} />
                                           
                                        </div>

                                        <div className='text-center'>
                                            <button type="submit" className="btn btn-primary rounded-pill add-btn" >NEXT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </section>
    </Step>)
};

export default Contacts;

