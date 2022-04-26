import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {Step} from './style.js'

const step_1 = () => {
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
                      <span className="step_span">Step 1 of 4</span>
                      <div className="ui_progress_bar"><div className="ui-progress" style={{"width":'20%'}}></div></div>
                    </section>
                    <div className="mt_40"><h3 className="COMM-TITLE">Are you buying or selling? </h3></div>
                    <Link to='/step-2'>
                    <div className="clickbtn NOMARGIN TOPPADDING50 SELLBUYBTN">
                      <input type="radio" value="Seller" name="property_type" className="property_type" id="sell" />
                        <label htmlFor="radio2">I am selling</label>
                    </div>
                    </Link>
                    <Link to='/step-2'>
                    <div className="clickbtn NOMARGIN SELLBUYBTN">
                      <input type="radio" value="Buyer" name="property_type" className="property_type" id="buy" />
                        <label htmlFor="radio2" className="sell">I am buying</label>
                    </div>
                    </Link>
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

export default step_1;
