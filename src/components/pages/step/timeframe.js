import React from 'react';

import { Link } from 'react-router-dom';
import { Step } from './style.js'
import { useDispatch } from 'react-redux'

import { timeFrame } from '../../../actions/index.js';

const Step_4 = () => {
  const dispatch = useDispatch();
  return <>

    <Step>


      <section className="mainpage bg-step" id="HoverBTN">
        <div className="main_container">
          <form id="landing" name="landing" action="" method="post">

            <section className="mainpage ">
              <div id="slider">
                <ul>
                  <li className="go20form">
                    <section className="work_progress">
                      <span className="step_span">Step 3 of 4</span>
                      <div className="ui_progress_bar"><div className="ui-progress" style={{ "width": '80%' }}></div></div>
                    </section>
                    <div className=" pb-4 pt-5"><h3 className="COMM-TITLE pt-4 fw-bold">What are you planning to list your property for? </h3></div>
                    <div className='step-container'>
                      <Link to='/address'>
                        <div className="step3 box" onClick={() => { dispatch(timeFrame('under-300k')) }}>
                          <h5>Under 300k</h5>
                        </div>
                      </Link>
                      <Link to='/address'>
                        <div className="step3 box" onClick={() => { dispatch(timeFrame('$300k-$450k')) }}>
                          <h5>$300k - $450k</h5>
                        </div>
                      </Link>
                      <Link to='/address'>
                        <div className="step3 box" onClick={() => { dispatch(timeFrame('$450k-$600K')) }}>
                          <h5>$450k - $600K</h5>
                        </div>
                      </Link>
                      <Link to='/address'>
                        <div className="step3 box" onClick={() => { dispatch(timeFrame('$600k-$900k')) }}>
                          <h5>$600k - $900k</h5>
                        </div>
                      </Link>
                      <Link to='/address'>
                        <div className="step3 box" onClick={() => { dispatch(timeFrame('$900k-1.5m')) }}>
                          <h5>$900k - 1.5m</h5>
                        </div>
                      </Link>
                      <Link to='/address'>
                        <div className="step3 box" onClick={() => { dispatch(timeFrame('over-$1.5m')) }}>
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
    </Step>
  </>;
};

export default Step_4;
