import React, { useState } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';


const Contect = () => {
  const [customers, setCustomers] = useState(JSON.parse(localStorage.getItem("AddCustomer")) || []);
  const navigate = useNavigate();
  const location = useLocation()
  const handleDelete = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
    localStorage.setItem("AddCustomer", JSON.stringify(updatedCustomers));
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

        <div className="p-4 max-w-[70%] mx-auto">
          <h1>Customer List</h1>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Customers</h2>
            <button className="px-4 py-2 text-white bg-green-500 rounded-lg">
              <Link to={'add-contact'}>Add Customer</Link>
            </button>
          </div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Number</th>
                <th scope="col" class="px-6 py-3">Address</th>
                <th scope="col" class="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody >
              {customers.length > 0 ? customers.map((customer, index) => (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                       <td class="px-6 py-4">{customer.name}</td>
                       <td class="px-6 py-4">{customer.number}</td>
                       <td class="px-6 py-4">{customer.address}</td>
                       <td class="px-6 py-4">
                    <button onClick={() => handleEdit(index)} className="px-2 py-1 text-white bg-blue-500 rounded">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(index)} className="px-2 py-1 text-white bg-red-500 rounded">
                      Delete
                    </button>
                    <button className="px-2 py-1 text-white bg-blue-500 rounded">
                      <Link to={'show-transaction'}> show transactions</Link>
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" className="p-2 text-center">No customers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>)
      }
    </div>
  )
}

export default Contect;
