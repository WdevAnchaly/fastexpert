import React, { useState } from 'react';
import { Step } from './style.js'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addressSave } from '../../../actions/index.js';

function Address() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('');
    const location = useSelector((state) => {
        return state.combine.useraddress;
    })
    const [formData, setFormData] = useState({ ...location, streetAdd: "", city: location.city, state: location.state, zipcode: location.postal_code });

    const submituserRegistrationForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (!formData.streetAdd) {
            errors["streetAdd"] = "Please enter your street address.";
        }
        if (!formData.city) {
            errors["city"] = "Please enter your city.";
        }
        if (!formData.state) {
            errors["state"] = "Please enter your state.";
        }
        if (!formData.zipcode) {
            errors["zipcode"] = "Please enter your zipcode.";
        }
        setErrors(errors);
        if (formData.streetAdd && formData.city && formData.state && formData.zipcode) {
            dispatch(addressSave(formData));
            navigate(`/contacts`);
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        //setFormData({ ...formData, hasChanged: true, [name]: value });
        setFormData({ ...location, ...formData, hasChanged: true, [name]: value });

    };
    // useEffect(() => {
    //     setFormData({ city: location.city, state: location.state, zipcode: location.postal_code });
    // }, [location]);

    return (<Step>

        <section className="mainpage bg-step" id="HoverBTN">
            <div className="main_container">
                <section className="mainpage">
                    <div id="slider">

                        <div className="fw-bold text-center pt-5"><h3 className="text-dark pt-4">What is your property address?</h3> </div>

                        <div className='container pb-5'>
                            <div className='row d-flex justify-content-center pt-5 pb-5'>
                                <div className='col-lg-6 col-sm-6'>
                                    <form onSubmit={submituserRegistrationForm} method="post">
                                        <div className="form-group">
                                            <label htmlFor="streetAdd"> Street Address</label>
                                            <input type="text" className={errors.streetAdd ? "form-control bd-red" : "form-control"} placeholder="Street Address" defaultValue={formData.streetAdd} name="streetAdd" onChange={handleChange} />

                                        </div>
                                        <div className="form-group pt-3">
                                            <label htmlFor="city">City</label>
                                            <input type="text" className={errors.city ? "form-control bd-red" : "form-control"} id="City" defaultValue={formData.city} name="city" placeholder="City" onChange={handleChange} />

                                        </div>
                                        <div className="form-group pt-3">
                                            <div className='row'>
                                                <div className='col-lg-8 col-sm-8 col-8'>
                                                    <label htmlFor="state">State</label>
                                                    <input type="text" className={errors.state ? "form-control bd-red" : "form-control"} id="State" defaultValue={formData.state} name="state" placeholder="State" onChange={handleChange} />

                                                </div>
                                                <div className='col-lg-4 col-sm-4 col-4'>
                                                    <label htmlFor="zipcode">Zipcode</label>
                                                    <input type="text" className={errors.zipcode ? "form-control bd-red" : "form-control"} id="Zipcode" defaultValue={formData.zipcode} name="zipcode" placeholder="Zipcode" onChange={handleChange} />

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
    </Step>);
};

export default Address;

