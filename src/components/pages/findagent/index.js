import React, { Component } from 'react'
import {Find} from './styles.js'
import SearchLocationInput from './map';
export default class Index extends Component {
    render() {
        return (
            <>
                <Find>
                <div className="fastExpertbg">
                   
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
