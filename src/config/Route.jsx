import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../screens/Login.jsx';
import WithoutLogin from '../component/WithoutLogin.jsx';
import AdminPage from '../screens/AdminPage.jsx';
import Contact from '../screens/Contact.jsx';
import Registration from '../screens/Registration.jsx';
import Vandors from '../screens/Vandors.jsx';
import Billing from '../screens/Billing.jsx';
import AddCustomer from '../screens/AddCustomer.jsx';
import AddVandors from '../screens/AddVandors.jsx';
import ShowTransaction from '../screens/ShowTransaction.jsx';
import AddTransaction from '../screens/AddTransaction.jsx';
import AddBill from '../screens/AddBill.jsx';
import ShowBill from '../screens/ShowBill.jsx';
import PamentIn from '../screens/PamentIn.jsx';
import DeshBord from '../screens/DeshBord.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <WithoutLogin>
                <Login />
            </WithoutLogin>
        )
    },
    {
        path: '/register',
        element: (
            <WithoutLogin>
                <Registration />
            </WithoutLogin>
        )
    },

    {
        path: '/admin',
        element: <AdminPage />,
        children: [
            {
                path: 'deshBord',
                element: <DeshBord />,
            },
            {
                path: 'bills',
                element: <Billing />,
                children: [
                    {
                        path: 'add-bill',
                        element: <AddBill />
                    },
                    {
                        path: 'show-bill',
                        element: <ShowBill />
                    },
                    {
                        path: 'payment-in',
                        element: <PamentIn />
                    },
                ],
            },
            {
                path: 'contact',
                element: <Contact />,
                children: [
                    {
                        path: 'add-contact',
                        element: <AddCustomer />,
                    },
                    {
                        path: 'show-transaction',
                        element: <ShowTransaction />,
                    },
                   
                ]
            },

            {
                path: 'vandors',
                element: <Vandors />,
               children: [
                    {
                        path: 'add-vandors',
                        element: <AddVandors />,
                    },
                    {
                        path: 'show-transaction',
                        element: <ShowTransaction />,
                    },
                    {
                        path: 'add-transaction',
                        element: <AddTransaction />,
                    },
                ]
            },





        ],
    },
]);

export default router;
