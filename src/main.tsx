import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import Router from './Router'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>,
)
