import React, { useState } from 'react'
import AdminPage from './AdminPage'
import { Link, useNavigate } from 'react-router-dom';

const Vandors = () => {
    const [vandors, setVandors] = useState(JSON.parse(localStorage.getItem("AddVandors")) || []);
    const navigate = useNavigate()
  console.log(vandors)
    const handleDelete = (index) => {
        const updatedVandors = vandors.filter((_, i) => i !== index);
        setVandors(updatedVandors);
        localStorage.setItem("AddVandors", JSON.stringify(updatedVandors));
    };

    const handleEdit = (index) => {
        const vandorToEdit = vandors[index];
        navigate('/add-vandors', { state: { vandor: vandorToEdit, index } });
    };
    return (
        <div>
            <AdminPage />
            <h1>Vendor List</h1>
            <div className="p-4">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold">Vendors</h2>
                    <button className="px-4 py-2 text-white bg-green-500 rounded-lg">
                        <Link to={'/add-vandors'}>Add Vendor</Link>
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
                        {vandors.length > 0 ? vandors.map((vandor, index) => (
                            <tr key={index}>
                                <td className="p-2">{vandor.name}</td>
                                <td className="p-2">{vandor.number}</td>
                                <td className="p-2">{vandor.address}</td>
                                <td className="p-2">
                                    <button onClick={() => handleEdit(index)} className="px-2 py-1 text-white bg-blue-500 rounded">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(index)} className="px-2 py-1 text-white bg-red-500 rounded">
                                        Delete
                                    </button>
                                    <button  className="px-2 py-1 text-white bg-blue-500 rounded">
                                        <Link to={'/show-transaction'}> show transactions</Link>
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" className="p-2 text-center">No vandors found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default Vandors