import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import './config/ReactotronConfig'

import GlobalStyles from './Styles/Global'
import Header from './Components/Header/Header'
import Routes from './routes'

import store from './store/index'

export default function src() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes/>
        <GlobalStyles/>
    </BrowserRouter>
    </Provider>
  );
}

