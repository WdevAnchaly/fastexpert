import React from 'react';
import { Link } from 'react-router-dom';
import { Step } from './style.js'
import { useDispatch } from 'react-redux'

import { leadType } from '../../../actions'

const Step_1 = () => {
  // const buySellValue = useSelector((state)=>{
  //      return state;
  // })
  // console.log(buySellValue);
  const dispatch = useDispatch()

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
                      <span className="step_span">Step 1 of 4</span>
                      <div className="ui_progress_bar"><div className="ui-progress" style={{ "width": '20%' }}></div></div>
                    </section>
                    <div className="mt_40"><h3 className="COMM-TITLE">Are you buying or selling? </h3></div>
                    <Link to='/property_type'>
                      <div className="clickbtn NOMARGIN TOPPADDING50 SELLBUYBTN" onClick={() => { dispatch(leadType('sell')) }}>
                        <input type="radio" value="Seller" name="property_type" className="property_type" id="sell" />
                        <label htmlFor="radio2">I am selling</label>
                      </div>
                    </Link>
                    <Link to='/property_type'>
                      <div className="clickbtn NOMARGIN SELLBUYBTN" onClick={() => { dispatch(leadType('buy')) }}>
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
    </Step>
  </>;
};

export default Step_1;
