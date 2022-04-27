import React, { useState } from 'react'
import Header from './common/header/header';
// import Footer from './common/footer/footer';
import Helmet from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import metaData from './common/metatag'
import ModelPopup from './modelPopup';
import { useSelector } from 'react-redux';
import exitIntent from 'exit-intent';
var FA = require('react-fontawesome')

const App = (props) => {
  const location = useLocation();
  const head_location = location.pathname;
  const hasAddDetails = useSelector((state) => {
    return state.combine.useraddress;
  })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

    const mouseEvent = e => {
        const shouldShowExitIntent = 
            !e.toElement && 
            !e.relatedTarget &&
            e.clientY < 10;
    
        if (shouldShowExitIntent) {
            setShow(true)
            window.removeEventListener('mouseout', mouseEvent);
        }
    };
    setTimeout(() => {
      window.addEventListener('mouseout', mouseEvent);
    });



  // window.addEventListener('mousemove', (event) => {
  //   console.log(event);
  // });
  // const handleLeavePage = (e)=> {
  //   const confirmationMessage = 'Some message';
  //   e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
  //   return confirmationMessage;              // Gecko, WebKit, Chrome <34
  // }
  // window.addEventListener('beforeunload', handleLeavePage);
  
  const removeExitIntent = exitIntent({
    threshold: 50,
    maxDisplays: 2,
    eventThrottle: 100,
    onExitIntent: () => {
      console.log('exit-intent triggered')
    }    
  })
  removeExitIntent()
  return (
    <>
      {
        metaData
          .filter(data => data.url === head_location)
          .map((data, key) => {
            return (

              <Helmet key={key}>
                <title>{data.metaTitle}</title>
                <meta name="description" content={data.metaDiscription} />
                <meta name="keywords" content={data.metaKey} />
              </Helmet>

            );
          })
      }

      <Header logoName="logo.png" />
      {props.children}
      {/* <Footer logoName="logo.png" /> */}


      {((hasAddDetails.lat !== undefined) &&(hasAddDetails.lat !== '') && (hasAddDetails.lng !== undefined) && (hasAddDetails.lng !== '') && (hasAddDetails.shortState !== undefined) &&(hasAddDetails.shortState !== '') && (hasAddDetails.city !== undefined) && (hasAddDetails.city !== '') && (hasAddDetails.postal_code !== '')) ?
        <Modal show={show} onHide={handleClose} className="model-popup">
          <Modal.Header closeButton>
            <h5 className='text-primary' onClick={(() => setShow(false))}><span className='popup-close'><FA name="chevron-left" /> </span>Return to submitting your customized request for top agents</h5>
          </Modal.Header>
          <Modal.Body>
            <ModelPopup />
          </Modal.Body>
        </Modal>
        : ""}

    

    </>
  )
}

export default App