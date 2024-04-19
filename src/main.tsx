import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import Router from './Router'
import Header from './layout/Header'
import Footer from './layout/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
