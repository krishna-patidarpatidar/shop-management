import React, { useState } from 'react'
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';

const Vendors = () => {
    const [vendors, setVendors] = useState(JSON.parse(localStorage.getItem("AddVendors")) || []);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(vendors)
    const handleDelete = (index) => {
        const updatedVendors = vendors.filter((_, i) => i !== index);
        setVendors(updatedVendors);
        localStorage.setItem("AddVendors", JSON.stringify(updatedVendors));
    };

    const handleEdit = (index) => {
        const vendorToEdit = vendors[index];
        navigate('add-vendors', { state: { vendor: vendorToEdit, index } });
    };
    return (
        <div className='mt-[200px]'>
            {location.pathname !== '/admin/vendors' ? (
                <Outlet />
            ) : (
                <div className="p-4 max-w-[70%] mx-auto text-4xl">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">Vendors</h2>
                        <button className="px-4 py-2 text-white bg-green-500 rounded-lg">
                            <Link to={'add-vendors'}>Add Vendor</Link>
                        </button>
                    </div>
                    <table className="w-full mt-4 bg-white shadow">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2 text-left">Name</th>
                                <th className="p-2 text-left">Contact</th>
                                <th className="p-2 text-left">Address</th>

                                <th className="p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendors.length > 0 ? vendors?.map((vendor, index) => (
                                <tr key={index} className='border'>
                                    <td className="p-2">{vendor.name}</td>
                                    <td className="p-2">{vendor.number}</td>
                                    <td className="p-2">{vendor.address}</td>
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
                                    <td colSpan="4" className="p-2 text-center">No vendors found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            )}



        </div>
    )
}

export default Vendors