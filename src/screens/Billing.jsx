import React, { useState } from 'react';

const Billing = () => {
    const [invoices, setInvoices] = useState([
        { id: 1, number: 'INV001', customer: 'Customer 1', amount: '$100', status: 'Paid' },
        { id: 2, number: 'INV002', customer: 'Customer 2', amount: '$150', status: 'Unpaid' },
        { id: 2, number: 'INV002', customer: 'Customer 2', amount: '$150', status: 'Unpaid' },
        { id: 2, number: 'INV002', customer: 'Customer 2', amount: '$150', status: 'Unpaid' },
        // Add more invoices as needed
    ]);

    const handleView = (id) => {
        // Implement navigation to the detailed view page or modal
        alert(`View details for Invoice ID: ${id}`);
    };

    const handleDelete = (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this invoice?');
        if (confirmed) {
            setInvoices(invoices.filter(invoice => invoice.id !== id));
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h2 className="text-xl font-bold">Invoices</h2>
                <button className="px-4 py-2 text-white bg-green-500 rounded-lg">
                    Create Invoice
                </button>
            </div>
            <table className="w-full mt-4 bg-white shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-2 text-left">Invoice #</th>
                        <th className="p-2 text-left">Customer</th>
                        <th className="p-2 text-left">Amount</th>
                        <th className="p-2 text-left">Status</th>
                        <th className="p-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.length > 0 ? (
                        invoices.map((invoice) => (
                            <tr key={invoice.id}>
                                <td className="p-2">{invoice.number}</td>
                                <td className="p-2">{invoice.customer}</td>
                                <td className="p-2">{invoice.amount}</td>
                                <td className="p-2">{invoice.status}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => handleView(invoice.id)}
                                        className="px-2 py-1 text-white bg-blue-500 rounded mr-2"
                                    >
                                        View
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
    );
};

export default Billing;
