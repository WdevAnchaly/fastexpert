import React from 'react';

import { Link } from 'react-router-dom';
import { Step } from './style.js'
import { useDispatch } from 'react-redux'
import { budget } from '../../../actions/index.js';

const Step_3 = () => {
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
                      <div className="ui_progress_bar"><div className="ui-progress" style={{ "width": '60%' }}></div></div>
                    </section>
                    <div className=" pb-4 pt-5"><h3 className="COMM-TITLE pt-4 fw-bold">How soon are you looking to list?</h3></div>
                    <div className='step-container'>
                      <Link to='/timeframe'>
                        <div className="step3 box" onClick={() => { dispatch(budget('less-than-2-week')) }}>
                          <h5>Less than 2 week</h5>
                        </div>
                      </Link>
                      <Link to='/timeframe'>
                        <div className="step3 box" onClick={() => { dispatch(budget('2-4-week')) }}>
                          <h5>2 - 4 weeks</h5>
                        </div>
                      </Link>
                      <Link to='/timeframe'>
                        <div className="step3 box" onClick={() => { dispatch(budget('1-2-months')) }}>
                          <h5>1 - 2 months</h5>
                        </div>
                      </Link>
                      <Link to='/timeframe'>
                        <div className="step3 box" onClick={() => { dispatch(budget('2-4-months')) }}>
                          <h5>2 - 4 months</h5>
                        </div>
                      </Link>
                      <Link to='/timeframe'>
                        <div className="step3 box" onClick={() => { dispatch(budget('4-6-months')) }}>
                          <h5>4 - 6 months</h5>
                        </div>
                      </Link>
                      <Link to='/timeframe'>
                        <div className="step3 box" onClick={() => { dispatch(budget('6-months')) }}>
                          <h5>More than 6 months</h5>
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

export default Step_3;
