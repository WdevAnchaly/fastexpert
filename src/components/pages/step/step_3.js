import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {Step} from './style.js'

const step_3 = () => {
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

            <section className="mainpage ">
              <div id="slider">
                <ul>
                  <li className="go20form">
                    <section className="work_progress">
                      <span className="step_span">Step 3 of 4</span>
                      <div className="ui_progress_bar"><div className="ui-progress" style={{"width":'60%'}}></div></div>
                    </section>
                    <div className=" pb-4 pt-5"><h3 className="COMM-TITLE pt-4 fw-bold">How soon are you looking to list?</h3></div>
                    <div className='step-container'>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>Less than 2 week</h5>
                    </div>
                    </Link>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>2 - 4 weeks</h5>
                    </div>
                    </Link>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>1 - 2 months</h5>
                    </div>
                    </Link>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>2 - 4 months</h5>
                    </div>
                    </Link>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>4 - 6 months</h5>
                    </div>
                    </Link>  
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>More than 6 monthsnpm z</h5>
                    </div>
                    </Link>
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

export default step_3;
