import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../screens/Login.jsx'
import Auth from '../component/Auth.jsx'
import WithoutLogin from '../component/WithoutLogin.jsx'
import AdminPage from '../screens/AdminPage.jsx'
import Contect from '../screens/Contect.jsx'
import Registration from '../screens/Registration.jsx'
import Vandors from '../screens/Vandors.jsx'
import Billing from '../screens/Billing.jsx'
import AddCustomer from '../screens/AddCustomer.jsx'
import AddVandors from '../screens/AddVandors.jsx'
import ShowTransaction from '../screens/ShowTransaction.jsx'
import AddTransaction from '../screens/AddTransaction.jsx'
import AddBill from '../screens/AddBill.jsx'
import ShowBill from '../screens/ShowBill.jsx'
import PamentIn from '../screens/PamentIn.jsx'
const Route = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/", element: <WithoutLogin><Login /></WithoutLogin>
            },
            {
                path: "/register", element: <WithoutLogin><Registration /></WithoutLogin>
            },
            {
                path: '/admin', element: <AdminPage />
            },
            {
                path: '/contect', element: <Contect />
            }
            ,
            {
                path: '/vandors', element: <Vandors />
            } ,
            {
                path: '/add-vandors', element: <AddVandors />
            } ,
            {
                path: '/bills', element: <Billing />
            },
            {
                path: '/add-bill', element: <AddBill />
            },
            {
                path: '/show-bill', element: <ShowBill />
            },
            {
                path: '/pament-in', element: <PamentIn />
            },
            {
                path:'/add-contect',element:<AddCustomer/>
            },
            {
                path:'/show-transaction',element:<ShowTransaction/>
            },
            {
                path:'/add-transaction',element:<AddTransaction/>
            }
        ]

    }
])

export default Route