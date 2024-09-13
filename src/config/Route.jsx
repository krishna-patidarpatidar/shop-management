import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../screens/Login.jsx';
import WithoutLogin from '../component/WithoutLogin.jsx';
import AdminPage from '../screens/AdminPage.jsx';
import Contact from '../screens/Contact.jsx';
import Registration from '../screens/Registration.jsx';
import Vendors from '../screens/Vendors.jsx';
import Billing from '../screens/Billing.jsx';
import AddCustomer from '../screens/AddCustomer.jsx';
import AddVendors from '../screens/AddVendors.jsx';
import ShowTransaction from '../screens/ShowTransaction.jsx';
import AddTransaction from '../screens/AddTransaction.jsx';
import AddBill from '../screens/AddBill.jsx';
import ShowBill from '../screens/ShowBill.jsx';
import PamentIn from '../screens/PamentIn.jsx';
import DeshBord from '../screens/DeshBord.jsx';
import AddProducts from '../screens/AddProducts.jsx';
import ShowProducts from '../screens/ShowProducts.jsx';
import NameUpdate from '../screens/NameUpdate.jsx';
import PasswordUpdate from '../screens/PasswordUpdate.jsx';
import Auth from '../component/Auth.jsx';
import EditCustomer from '../screens/EditCustomer.jsx';

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
        element:<Auth><AdminPage /></Auth> ,
        children: [
            {
                path: 'deshBord',
                element: <DeshBord />,
            },
            {
                path: 'add-product',
                element: <AddProducts />,
            },
            {
                path: 'show-products',
                element: <ShowProducts/>,
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
                        path: 'edit-contact/:contectId',
                        element: <EditCustomer />,
                    },
                    {
                        path: 'show-transaction',
                        element: <ShowTransaction />,
                    },
                   
                ]
            },

            {
                path: 'vendors',
                element: <Vendors />,
               children: [
                    {
                        path: 'add-vendors',
                        element: <AddVendors />,
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
            {
                path:'update-name',element: <NameUpdate/>
            },
            {
                path:'update-password',element: <PasswordUpdate/>
            },





        ],
    },
]);

export default router;
