import React from 'react';
import { Link } from 'react-router-dom';
import { Step } from './style.js'
import { useSelector, useDispatch } from 'react-redux'

import { property } from '../../../actions/index.js';

const Step_2 = () => {
  const buySellValue = useSelector((state) => {
    return state;
  })
  const dispatch = useDispatch();
  var buySel = buySellValue.buySell.sellerType;
  return <>
    <Step>
      <section className="mainpage bg-step" id="HoverBTN">
        <div className="main_container">
          <form id="landing" name="landing" action="" method="post">

            <section className="mainpage">
              <div id="slider">
                <ul>
                  <li className="go20form">
                    <section className="work_progress">
                      <span className="step_span">Step 2 of 4</span>
                      <div className="ui_progress_bar"><div className="ui-progress" style={{ "width": '40%' }}></div></div>
                    </section>
                    <div className="mt_40"><h3 className="COMM-TITLE">What are you looking to {buySel}?</h3>
                    </div><p>
                      These questions will help us narrow down which agents will best suit your needs.
                    </p>
                    <div className='container'>
                      <div className='row justify-content-center'>
                        <div className='col-lg-10 col-sm-6'>
                          <div className='row justify-content-center'>

                            <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 '>
                              <Link to="/budget">
                                <div className='card-wapper pt-5 pb-5' onClick={() => { dispatch(property('single-family')) }}>
                                  <img src={`${process.env.PUBLIC_URL}/assets/single-family.svg`} alt="Single Family" />
                                  <h6 className='step2-txt'>Single Family</h6>
                                </div>
                              </Link>
                            </div>

                            <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 '>
                              <Link to="/budget">
                                <div className='card-wapper pt-5 pb-5' onClick={() => { dispatch(property('multi-family')) }}>
                                  <img src={`${process.env.PUBLIC_URL}/assets/multi-family.svg`} alt="multi Family" />
                                  <h6 className='step2-txt'>Multi Family</h6>
                                </div>
                              </Link>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 '>
                              <Link to="/budget">
                                <div className='card-wapper pt-5 pb-5' onClick={() => { dispatch(property('Condo')) }}>
                                  <img src={`${process.env.PUBLIC_URL}/assets/condo.svg`} alt="Condo " />
                                  <h6 className='step2-txt'>Condo</h6>
                                </div>
                              </Link>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 '>
                              <Link to="/budget">
                                <div className='card-wapper pt-5 pb-5' onClick={() => { dispatch(property('town-home')) }}>
                                  <img src={`${process.env.PUBLIC_URL}/assets/town-home.svg`} alt="Town home " />
                                  <h6 className='step2-txt'>Town Home</h6>
                                </div>
                              </Link>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 '>
                              <Link to="/budget">
                                <div className='card-wapper pt-5 pb-5' onClick={() => { dispatch(property('mobile-home')) }}>
                                  <img src={`${process.env.PUBLIC_URL}/assets/mobile-home.svg`} alt="Mobile home" />
                                  <h6 className='step2-txt'>Mobile Home</h6>
                                </div>
                              </Link>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 hover-div border rounded mx-1 mt-2 '>
                              <Link to="/budget">
                                <div className='card-wapper pt-5 pb-5' onClick={() => { dispatch(property('commercial')) }}>
                                  <img src={`${process.env.PUBLIC_URL}/assets/commercial.svg`} alt="Commercial" />
                                  <h6 className='step2-txt'>Commercial</h6>
                                </div>
                              </Link>
                            </div>
                          </div>
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
    </Step>
  </>;
};

export default Step_2;
