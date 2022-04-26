import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {Step} from './style.js'

const step_2 = () => {
  return <>
    <Helmet>
      <title>FastExpert</title>
      <meta name="description" content="FastExpert | FastExpert" />
    </Helmet>
    <Step>
    <div className=''>
      <header className="header newHeader">
        <div className='container step'>
          <h1 className="logo">
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/assets/FastExpert_Icon.svg`} alt='Icon' />
              <span>FastExpert</span>
            </Link>
          </h1>
          <ul className="main-nav">
            <li><a href="tel:8003190511">Call +1(800)319-0511</a></li>
          </ul>
        </div>
      </header>

      <section className="mainpage bg-step" id="HoverBTN">
        <div className="main_container">
          <form id="landing" name="landing" action="" method="post">

            <section className="mainpage">
              <div id="slider">
                <ul>
                  <li className="go20form">
                    <section className="work_progress">
                      <span className="step_span">Step 2 of 4</span>
                      <div className="ui_progress_bar"><div className="ui-progress" style={{"width":'40%'}}></div></div>
                    </section>
                    <div className="mt_40"><h3 className="COMM-TITLE">What are you looking to sell?</h3>
                    </div><p>
                    These questions will help us narrow down which agents will best suit your needs.
                    </p>
                    <div className='container'>
                    <div className='row justify-content-center'>
                      
                        <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 pt-5 pb-5'>
                        <Link to="/step-3">
                           <img src={`${process.env.PUBLIC_URL}/assets/single-family.svg`} alt="Single Family" />
                            <h6 className='step2-txt'>Single Family</h6>
                            </Link>
                        </div>
                        
                        
                        <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 pt-5 pb-5'>
                        
                        <Link to="/step-3">
                          <img src={`${process.env.PUBLIC_URL}/assets/multi-family.svg`} alt="multi Family" />
                            <h6 className='step2-txt'>Multi Family</h6> 
                            </Link>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 pt-5 pb-5'>
                        <Link to="/step-3">
                          <img src={`${process.env.PUBLIC_URL}/assets/condo.svg`} alt="Condo " />
                            <h6 className='step2-txt'>Condo</h6>
                            </Link>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 pt-5 pb-5'>
                        <Link to="/step-3">
                          <img src={`${process.env.PUBLIC_URL}/assets/town-home.svg`} alt="Town home " />
                            <h6 className='step2-txt'>Town Home</h6>
                            </Link>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 pt-5 pb-5'>
                        <Link to="/step-3">
                          <img src={`${process.env.PUBLIC_URL}/assets/mobile-home.svg`} alt="Mobile home" />
                            <h6 className='step2-txt'>Mobile Home</h6>
                            </Link>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 pt-5 pb-5'>
                        <Link to="/step-3">
                          <img src={`${process.env.PUBLIC_URL}/assets/commercial.svg`} alt="Commercial" />
                            <h6 className='step2-txt'>Commercial</h6>
                            </Link>
                        </div>
                       
                    </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </form>
        </div>
      </section>

    </div>
    </Step>
  </>;
};

export default step_2;
