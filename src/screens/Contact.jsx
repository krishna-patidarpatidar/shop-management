import React, { useState } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useGetCustomerQuery } from '../Redux/serviec';

const Contect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("auth");
  const { data, error, isLoading } = useGetCustomerQuery({ token });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching customers.</p>;

  const customers = data?.data || []; // Check if data exists and fallback to an empty array

  const handleDelete = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    
  };

  const handleEdit = (index) => {
    const customerToEdit = customers[index];
    navigate('add-contact', { state: { customer: customerToEdit, index } });
  };

  return (
    <div>
      {location.pathname !== '/admin/contact' ? (
        <Outlet />
      ) : (
        <div className="p-4 mt-[200px] max-w-[70%] mx-auto">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Customers</h2>
            <button className="px-4 py-2 text-white bg-green-500 rounded-lg">
              <Link to={'add-contact'}>Add Customer</Link>
            </button>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Number</th>
                <th scope="col" className="px-6 py-3">Address</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.length > 0 ? (
                customers.map((customer, index) => (
                  <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">{customer.name}</td>
                    <td className="px-6 py-4">{customer.mobile}</td>
                    <td className="px-6 py-4">{customer.address}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(index)} className="px-2 py-1 text-white bg-blue-500 rounded">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(index)} className="px-2 py-1 text-white bg-red-500 rounded">
                        Delete
                      </button>
                      <button className="px-2 py-1 text-white bg-blue-500 rounded">
                        <Link to={'show-transaction'}>Show Transactions</Link>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-2 text-center">No customers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Contect;


