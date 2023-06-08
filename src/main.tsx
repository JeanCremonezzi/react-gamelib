import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes } from './routes'

import {Toaster} from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
    <Toaster   position="bottom-center" reverseOrder={false}/>
  </React.StrictMode>,
)
