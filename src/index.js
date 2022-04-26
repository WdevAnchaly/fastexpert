import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
//import Layout from './components/app';
import Findagent from './components/pages/findagent/index';
import Step1 from './components/pages/step/step_1';
import Step2 from './components/pages/step/step_2';
import Step3 from './components/pages/step/step_3';
import Step4 from './components/pages/step/step_4';
import { history } from './services/history';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import  store , { persistor } from "./store/store";
class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes history={history}>
              <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Findagent />} />
              <Route exact path={`${process.env.PUBLIC_URL}/step`} element={<Step1 />} />
              <Route exact path={`${process.env.PUBLIC_URL}/step-2`} element={<Step2 />} />
              <Route exact path={`${process.env.PUBLIC_URL}/step-3`} element={<Step3 />} />
              <Route exact path={`${process.env.PUBLIC_URL}/step-4`} element={<Step4 />} />

            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider >

    )
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));