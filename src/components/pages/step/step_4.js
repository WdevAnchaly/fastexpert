import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {Step} from './style.js'

const step_4 = () => {
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
                      <span className="step_span">Step 4 of 4</span>
                      <div className="ui_progress_bar"><div className="ui-progress" style={{"width":'80%'}}></div></div>
                    </section>
                    <div className=" pb-4 pt-5"><h3 className="COMM-TITLE pt-4 fw-bold">What are you planning to list your property for? </h3></div>
                    <div className='step-container'>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>Under 300k</h5>
                    </div>
                    </Link>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>$300k - $450k</h5>
                    </div>
                    </Link>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>$450k - $600K</h5>
                    </div>
                    </Link>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>$600k - $900k</h5>
                    </div>
                    </Link>
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>$900k - 1.5m</h5>
                    </div>
                    </Link>  
                    <Link to='/step-4'>
                    <div className="step3 box">
                     <h5>Over $1.5m</h5>
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

export default step_4;
