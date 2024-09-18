import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useDeleteInvoiceMutation, useGetBillQuery } from '../Redux/serviec';
import { formatDate } from '../config/DateHelper';

const Billing = () => {
    const DeleteBill=useDeleteInvoiceMutation()
    const token = localStorage.getItem("auth");
    const { data, isError, isLoading } = useGetBillQuery({ token });
    const location = useLocation();
    // console.log(data)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    const handleDelete = async (billId) => {
        try {
          await deleteCustomer({ INVNo: billId, token });
          console.log('Customer deleted successfully');
          // Optionally, you can refetch the customer list or remove the deleted customer from the local state
        } catch (error) {
          console.error('Error deleting customer:', error);
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
                                <th className="p-2 text-left">DueAmount</th>
                                <th className="p-2 text-left">Status</th>
                                <th className="p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.length > 0 ? (
                                data.data?.map((invoice) => (
                                    <tr key={invoice._id} className='border'>
                                        <td className="p-2">{invoice.invoiceNumber}</td>
                                        <td className="p-2">{formatDate(invoice.invoiceDate)}</td>
                                        <td className="p-2">{invoice.customerName}</td>
                                        <td className="p-2">{invoice.totalAmount}</td>
                                        <td className="p-2">{invoice.dueAmount}</td>
                                        <td className="p-2">{invoice.status}</td>
                                        <td className="p-2 flex gap-1">
                                            <button className='px-2 py-1 text-white bg-green-600 rounded'>
                                                <Link to={`payment-in/${invoice._id}`}>Pay In</Link>
                                            </button>
                                            <button className="px-2 py-1 text-white bg-blue-500 rounded">
                                                <Link to={`show-bill/${invoice.invoiceNumber}`}>View</Link>
                                            </button>
                                            <button className='px-2 py-1 text-white bg-gray-700 rounded'>
                                                <Link to={`edit-bill/${invoice._id}`}>Edit</Link>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(invoice._id)}
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
