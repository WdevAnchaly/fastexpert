import React from 'react';
import { Step } from './style.js';
const Thankyou = () => {
    return (
        <>
            <Step>
                <section className="mainpage bg-step thank_msg" id="HoverBTN">
                    <div className="main_container">
                        <section className="mainpage">
                            <div id="slider">
                                <div className="fw-bold text-center pt-5"><h3 className="text-dark pt-4">We’re sending the top agents in Greensboro your way!</h3> </div>
                                <div className="MailSect">
                                    <p className="TEXTPHONEDTL agents">Please check your inbox for our email for a list of agents who<br /> will help you buy your new home!</p>
                                </div>
                                <p className="TEXTPHONEDTL" >If you don’t see it, please check your spam folder or give us a call<br /> at <a href="tel:(800) 319-0511" className='callnuber'>(800) 319-0511</a> to speak to a customer representative.</p>
                                <a className="thankmoment" href="https://www.fastexpert.com">Return to our home page.</a>
                            </div>
                        </section>

                    </div>
                </section>
            </Step>
        </>
    );
};
export default Thankyou;