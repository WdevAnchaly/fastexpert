import React, { useState } from 'react';
import { Step } from './style.js'

import { useSelector, useDispatch } from 'react-redux'
import { contacts } from '../../../actions/index.js';
import { useNavigate } from 'react-router-dom';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Phone() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('');
    
    
    const contact = useSelector((state) => {
        return state.contacts.contactInfo;
    })
    const [formData, setFormData] = useState({ ...contact, phoneNumber: "" });
    const submituserRegistrationForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (!formData.phoneNumber) {
            errors["phoneNumber"] = "Please enter your phone number.";
        }
        setErrors(errors);
        if (formData.phoneNumber) {
            dispatch(contacts(formData));
            navigate(`/thankyou`);
        }
    }
   
    const handleSearchChange =(phone)=>{
        setFormData({...contact, ...formData, phoneNumber: phone})
    }
    return (<>
        <Step>
            <section className="mainpage bg-step" id="HoverBTN">
                <div className="main_container">
                    <section className="mainpage pt-5">
                        <div id="slider ">

                            <div className="fw-bold text-center pt-5 "><h3 className="text-dark">Phone for account verification (required)</h3>
                                <p className='font-weight-light'>We’ll email you a list of agents that we feel fit your needs and  <br />
                                    you choose which one to work with.</p>
                            </div>

                            <div className='container pb-5'>
                                <div className='row d-flex justify-content-center pt-5 pb-5'>
                                    <div className='col-lg-7 col-sm-7'>
                                        <form onSubmit={submituserRegistrationForm} method="post">
                                            <div className="form-group ">
                                                <div className='row pb-3'>
                                                <label htmlFor="phoneNumber">Phone Number</label>
                                                    <div className='col '>
                                                       
                                                        {/* <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" max={10} /> */}
                                                        
                                                        <PhoneInput
                                                            country={'us'}
                                                            value={formData.phoneNumber}
                                                            onlyCountries={['us']}
                                                            onChange={handleSearchChange}
                                                        />
                                                        {errors.phoneNumber}
                                                    </div>
                                                </div>
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
        </Step>
    </>);
};

export default Phone;

