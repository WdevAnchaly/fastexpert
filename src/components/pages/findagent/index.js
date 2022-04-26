import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

import {Find} from './styles.js'
import SearchLocationInput from './map.js';
import { Link } from 'react-router-dom';
export default class Index extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>FastExpert</title>
                    <meta name="description" content="FastExpert | FastExpert" />
                </Helmet>
                <Find>
                <div className="fastExpertbg">
                    <header className="header">

                        <h1 className="logo">
                            <Link to="/">
                                <img src={`${process.env.PUBLIC_URL}/assets/FastExpert_Icon.svg`} alt='Icon'/>
                                <span>FastExpert</span>
                            </Link>
                        </h1>
                        <ul className="main-nav">
                            <li><a href="tel:8003190511">Call +1(800)319-0511</a></li>
                        </ul>

                    </header>
                    <section className="slide_section container-nhfest">
                        <div className="slider-caption">
                            <div className="caption-inner Full-WiDtH-InNR mt-5">
                                <h1 className="slider-title">Find Top Selling Realtors Near Me</h1>
                                <div className="tabs-search">
                                    <div className="section-tabs">
                                        <div className="tab-content">
                                           <SearchLocationInput />
                                        </div>
                                    </div>
                                </div>
                                <p className="slider-subtitle">No Obligation, Free Service</p>
                            </div>
                        </div>
                    </section>
                </div>
              </Find> 
            </>
        )
    }
}
