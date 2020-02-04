import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './Styles/Global'
import Header from './Components/Header/Header'
import Routes from './routes'

export default function src() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

