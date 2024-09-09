import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Route from './config/Route';
import { AnotherExample } from './component/Print';


const App = () => {
  return (
    <div>
      {/* <AnotherExample/> */}
      <RouterProvider router={Route} />
      <ToastContainer />
    </div>
  )
}

export default App
