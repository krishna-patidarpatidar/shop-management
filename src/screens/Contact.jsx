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

        <div className="p-4">
          <h1>Customer List</h1>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Customers</h2>
            <button className="px-4 py-2 text-white bg-green-500 rounded-lg">
              <Link to={'add-contact'}>Add Customer</Link>
            </button>
          </div>
          <table className="w-full mt-4 bg-white shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Number</th>
                <th className="p-2 text-left">Address</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.length > 0 ? customers.map((customer, index) => (
                <tr key={index}>
                  <td className="p-2">{customer.name}</td>
                  <td className="p-2">{customer.number}</td>
                  <td className="p-2">{customer.address}</td>
                  <td className="p-2">
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
