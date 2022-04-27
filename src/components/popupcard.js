import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataService } from '../services/data.service';
var FA = require('react-fontawesome')

const Popupcard = () => {
    const [datalist, setlist] = useState([]);
    const addDetails = useSelector((state) => {
        return state.combine.useraddress;
    })
    useEffect(() => {
        dataService.getloctionData(addDetails)
            .then(
                res => {
                    // console.log(res.pros_users.data);
                    res.pros_users.data=== undefined?
                    
                    setlist([])
                   : setlist(res.pros_users.data)
                    

                },
                error => {
                    console.error("Something went wrong Api Data !!");
                }
            )

    }, [addDetails]);

    return (
        <> {datalist.length === 0 ?
            <div className='row justify-content-center' >
                <div className='spiner-height'>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className='row popuplist'>
                {datalist.map((popup, key) => (
                    <div className='col-lg-4 col-sm-6 col-12 pt-3  d-flex' key={key}>
                        <div className='card bordered shadow'>
                            <div className='card-body d-flex'>
                                <div className=''> <span className='right_count'>#{key + 1}</span></div>
                                <div className='w-32'>
                                    <img className='rounded-circle w-75' src={popup.user_image} alt={popup.agent_name} />
                                    {popup.subscr_type === 'Featured' ?
                                        <div className="feature-banner">
                                            <div className="featured-inner">
                                                <img src={`${process.env.PUBLIC_URL}/assets/featured-pink-stiker.png`} alt={popup.agent_name} className="img-fluid" />
                                            </div>
                                        </div>
                                        : ""}

                                </div>
                                <div className='w-75'>
                                    <Link to={popup.agent_url} target="_blank"><h6><span>{popup.agent_name}</span> {popup.agent_profile_video === "" ? "" : <FA name="youtube-play" className='text-danger' />}</h6></Link>
                                    <h6>{popup.company}</h6>
                                    <span className='review'><FA name="star" className='text-warning' /> <FA name="star" className='text-warning' /> <FA name="star" className='text-warning' /> <FA name="star" className='text-warning' /> <FA name="star" className='text-warning' /> <Link to={popup.agent_url + '?review'} target="_blank">( {popup.agent_ranking} )</Link></span> <br />
                                    <Link to={popup.agent_url} target="_blank">{popup.sales_uploaded_city + ' Sales in ' + popup.search_city + ' , ' + popup.search_state}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }


            </div>
        }

        </>
    )
}
export default Popupcard