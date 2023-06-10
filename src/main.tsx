import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './routes/routes'

import {Toaster} from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
    <Toaster   position="bottom-center" reverseOrder={false}/>
  </React.StrictMode>,
)
