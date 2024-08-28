import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Route from './config/Route';


const App = () => {
  return (
    <div>
      <RouterProvider router={Route} />
      <ToastContainer />

    </div>
  )
}

export default App
