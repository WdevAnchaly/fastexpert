import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/app';
import Findagent from './components/pages/findagent/index';
import Step1 from './components/pages/step/lead_type';
import Step2 from './components/pages/step/property_type';
import Step3 from './components/pages/step/budget';
import Step4 from './components/pages/step/timeframe';
import Address from './components/pages/step/address';
import Contacts from './components/pages/step/contacts';
import Phone from './components/pages/step/phone';
import Thankyou from './components/pages/step/thankyou';

import { history } from './services/history';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import PrivateRoute from './PrivateRoute';


class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter>
            <Layout>
              <Routes history={history}>
                <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Findagent />} />
                
                <Route path={`${process.env.PUBLIC_URL}/lead_type`} element={<PrivateRoute> <Step1 /></PrivateRoute>} />
                <Route exact path={`${process.env.PUBLIC_URL}/property_type`} element={<PrivateRoute><Step2 /></PrivateRoute>} />
                <Route exact path={`${process.env.PUBLIC_URL}/budget`} element={<PrivateRoute><Step3 /></PrivateRoute>} />
                <Route exact path={`${process.env.PUBLIC_URL}/timeframe`} element={<PrivateRoute><Step4 /></PrivateRoute>} />
                <Route exact path={`${process.env.PUBLIC_URL}/address`} element={<PrivateRoute><Address /></PrivateRoute>} />
                <Route exact path={`${process.env.PUBLIC_URL}/contacts`} element={<PrivateRoute><Contacts /></PrivateRoute>} />
                <Route exact path={`${process.env.PUBLIC_URL}/phone`} element={<PrivateRoute><Phone /></PrivateRoute>} />
                <Route exact path={`${process.env.PUBLIC_URL}/thankyou`} element={<PrivateRoute><Thankyou /></PrivateRoute>} />      
                
              </Routes>
            </Layout>
          </BrowserRouter>
        </PersistGate>
      </Provider >

    )
  }
}


ReactDOM.render(<Root />, document.getElementById("root"));