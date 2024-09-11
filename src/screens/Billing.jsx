import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Billing = () => {
    const location = useLocation();
    const [invoices, setInvoices] = useState([
        { id: 1, number: 'INV001',date:'01/01/2024', customer: 'Customer 1', amount: '100', status: 'Paid' },
        { id: 2, number: 'INV002',date:'02/01/2024', customer: 'Customer 2', amount: '150', status: 'Unpaid' },
        { id: 3, number: 'INV003',date:'03/01/2024', customer: 'Customer 3', amount: '150', status: 'Unpaid' },
        { id: 4, number: 'INV004',date:'04/01/2024', customer: 'Customer 4', amount: '150', status: 'Unpaid' },
        // Add more invoices as needed
    ]);

    const handleDelete = (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this invoice?');
        if (confirmed) {
            setInvoices(invoices.filter(invoice => invoice.id !== id));
        }
    };

    return (
        <div className=" max-w-[70%] mt-40 mx-auto">
            {/* Conditionally render either the Outlet or the Invoice list */}
            {location.pathname !== '/admin/bills' ? (
                <Outlet />
            ) : (
                <div className=' text-4xl'>
                    <div className="flex text-4xl justify-between">

                        <h2 className="font-bold">Invoices</h2>

                        <button className="px-4 py-2 flex gap-2 text-white  rounded-lg">
                            <input className='border p-2 text-stone-900' type="text" placeholder='search hear' />
                            <Link className='bg-green-500  p-2 font-bold' to={'add-bill'}>Create Invoice</Link>
                        </button>
                    </div>
                    <table className="w-full mt-4 bg-white shadow">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2 text-left">Invoice </th>
                                <th className="p-2 text-left">date</th>
                                <th className="p-2 text-left">Customer</th>
                                <th className="p-2 text-left">Amount</th>
                                <th className="p-2 text-left">Status</th>
                                <th className="p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.length > 0 ? (
                                invoices?.map((invoice) => (
                                    <tr key={invoice.id} className='border'>
                                        <td className="p-2">{invoice.number}</td>
                                        <td className="p-2">{invoice.date}</td>
                                        <td className="p-2">{invoice.customer}</td>
                                        <td className="p-2">{invoice.amount}</td>
                                        <td className="p-2">{invoice.status}</td>
                                        <td className="p-2 flex gap-1">
                                            <button className='px-2 py-1 text-white bg-green-600 rounded'>
                                                <Link to={'payment-in'}>Pay In</Link>
                                            </button>
                                            <button className="px-2 py-1 text-white bg-blue-500 rounded">
                                                <Link to={'show-bill'}>View</Link>
                                            </button>
                                            <button className='px-2 py-1 text-white bg-gray-700 rounded'>
                                                <Link to={'add-bill'}>Edit</Link>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(invoice.id)}
                                                className="px-2 py-1 text-white bg-red-500 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="p-2 text-center">No invoices found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Billing;
