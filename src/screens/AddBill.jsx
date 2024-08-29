import React from 'react';
import { Formik, FieldArray } from 'formik';

const initialValues = {
    invoiceDate: '',
    customer: {
        name: '',
        mobile: ''
    },
    bills: [{
        product: '',
        quantity: 0,
        price: 0,
        total: 0
    }],
    totalAmount: 0,
    amountReceived: 0,
    dueAmount: 0
};

const AddBill = () => {

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 className="text-3xl font-bold text-center mb-8">Add Bill</h1>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            const totalAmount = values.bills.reduce((sum, bill) => sum + bill.total, 0);
                            const dueAmount = Math.max(totalAmount - values.amountReceived, 0);
                            alert(JSON.stringify({ ...values, totalAmount, dueAmount }, null, 2));
                        }}
                    >
                        {({ values, setFieldValue, handleChange }) => (
                            <form className="space-y-6" onSubmit={event => {
                                event.preventDefault();
                                const totalAmount = values.bills.reduce((sum, bill) => sum + bill.total, 0);
                                const dueAmount = Math.max(totalAmount - values.amountReceived, 0);
                                alert(JSON.stringify({ ...values, totalAmount, dueAmount }, null, 2));
                            }}>
                                {/* Invoice Date */}
                                <div className="flex flex-col">
                                    <label className="text-lg font-semibold mb-2" htmlFor="invoiceDate">Invoice Date</label>
                                    <input
                                        name="invoiceDate"
                                        type="date"
                                        value={values.invoiceDate}
                                        onChange={handleChange}
                                        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                {/* Customer Details */}
                                <div className="flex flex-col">
                                    <label className="text-lg font-semibold mb-2" htmlFor="customer.name">Customer Name</label>
                                    <input
                                        name="customer.name"
                                        type="text"
                                        value={values.customer.name}
                                        onChange={handleChange}
                                        placeholder="Customer Name"
                                        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-lg font-semibold mb-2" htmlFor="customer.mobile">Customer Mobile</label>
                                    <input
                                        name="customer.mobile"
                                        type="text"
                                        value={values.customer.mobile}
                                        onChange={handleChange}
                                        placeholder="Customer Mobile No."
                                        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                {/* Product Details */}
                                <FieldArray name="bills">
                                    {({ remove, push }) => (
                                        <div className="space-y-4">
                                            <table className="w-full bg-white">
                                                <thead>
                                                    <tr>
                                                        <th className="py-2">Product Name</th>
                                                        <th className="py-2">Quantity</th>
                                                        <th className="py-2">Rate</th>
                                                        <th className="py-2">Total</th>
                                                        <th className="py-2">Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {values.bills.map((bill, index) => (
                                                        <tr key={index}>
                                                            <td className="py-2">
                                                                <input
                                                                    name={`bills.${index}.product`}
                                                                    type="text"
                                                                    value={bill.product}
                                                                    onChange={handleChange}
                                                                    placeholder="Product Name"
                                                                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                                />
                                                            </td>
                                                            <td className="py-2">
                                                                <input
                                                                    name={`bills.${index}.quantity`}
                                                                    type="number"
                                                                    value={bill.quantity}
                                                                    onChange={(e) => {
                                                                        const quantity = parseFloat(e.target.value || 0);
                                                                        const price = parseFloat(bill.price || 0);
                                                                        const total = quantity * price;
                                                                        setFieldValue(`bills.${index}.quantity`, quantity);
                                                                        setFieldValue(`bills.${index}.total`, total);
                                                                    }}
                                                                    placeholder="Quantity"
                                                                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                                />
                                                            </td>
                                                            <td className="py-2">
                                                                <input
                                                                    name={`bills.${index}.price`}
                                                                    type="number"
                                                                    value={bill.price}
                                                                    onChange={(e) => {
                                                                        const price = parseFloat(e.target.value || 0);
                                                                        const quantity = parseFloat(bill.quantity || 0);
                                                                        const total = quantity * price;
                                                                        setFieldValue(`bills.${index}.price`, price);
                                                                        setFieldValue(`bills.${index}.total`, total);
                                                                    }}
                                                                    placeholder="Rate"
                                                                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                                />
                                                            </td>
                                                            <td className="py-2">
                                                                <input
                                                                    name={`bills.${index}.total`}
                                                                    type="number"
                                                                    value={bill.total}
                                                                    readOnly
                                                                    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-100"
                                                                />
                                                            </td>
                                                            <td className="py-2">
                                                                <button type="button" className="text-red-600 hover:text-red-800 font-semibold" onClick={() => remove(index)}>Remove</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <button type="button" className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500" onClick={() => push({ product: '', quantity: 0, price: 0, total: 0 })}>
                                                Add Product
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>

                                {/* Total Amount */}
                                <div className="flex flex-col">
                                    <label htmlFor="totalAmount" className="text-lg font-semibold">Total Amount</label>
                                    <input
                                        name="totalAmount"
                                        type="number"
                                        value={values.bills.reduce((sum, bill) => sum + bill.total, 0)}
                                        readOnly
                                        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-100"
                                    />
                                </div>

                                {/* Amount Received */}
                                <div className="flex flex-col">
                                    <label htmlFor="amountReceived" className="text-lg font-semibold">Amount Received</label>
                                    <input
                                        name="amountReceived"
                                        type="number"
                                        value={values.amountReceived}
                                        onChange={(e) => {
                                            const receivedAmount = parseFloat(e.target.value || 0);
                                            setFieldValue("amountReceived", receivedAmount);

                                            const totalAmount = values.bills.reduce((sum, bill) => sum + bill.total, 0);
                                            const dueAmount = Math.max(totalAmount - receivedAmount, 0);
                                            setFieldValue("dueAmount", dueAmount);
                                        }}
                                        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                {/* Due Amount */}
                                <div className="flex flex-col">
                                    <label htmlFor="dueAmount" className="text-lg font-semibold">Due Amount</label>
                                    <input
                                        name="dueAmount"
                                        type="number"
                                        value={values.dueAmount}
                                        readOnly
                                        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-100"
                                    />
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">Submit</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default AddBill;
