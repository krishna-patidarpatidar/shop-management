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
    onlineReceived: 0,
    cashReceived: 0,
    discount: 0,     // Discount in percentage
    dueAmount: 0
};

const AddBill = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-4">Invoice</h1>
                
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        // Total amount before discount
                        const totalAmount = values.bills.reduce((sum, bill) => sum + bill.total, 0);

                        // Discounted total amount
                        const discountAmount = totalAmount * (values.discount / 100);
                        const discountedTotal = totalAmount - discountAmount;

                        // Total received
                        const totalReceivedAmount = parseFloat(values.onlineReceived) + parseFloat(values.cashReceived);

                        // Due amount after discount
                        const dueAmount = Math.max(discountedTotal - totalReceivedAmount, 0);

                        alert(JSON.stringify({ ...values, totalAmount, discountAmount, discountedTotal, totalReceivedAmount, dueAmount }, null, 2));
                    }}
                >
                    {({ values, setFieldValue, handleChange }) => (
                        <form onSubmit={event => {
                            event.preventDefault();

                            // Total amount before discount
                            const totalAmount = values.bills.reduce((sum, bill) => sum + bill.total, 0);

                            // Discounted total amount
                            const discountAmount = totalAmount * (values.discount / 100);
                            const discountedTotal = totalAmount - discountAmount;

                            // Total received
                            const totalReceivedAmount = parseFloat(values.onlineReceived) + parseFloat(values.cashReceived);

                            // Due amount after discount
                            const dueAmount = Math.max(discountedTotal - totalReceivedAmount, 0);

                            alert(JSON.stringify({ ...values, totalAmount, discountAmount, discountedTotal, totalReceivedAmount, dueAmount }, null, 2));
                        }}>
                            <div className="mb-4">
                                <label className="block text-lg font-semibold">Invoice Date</label>
                                <input
                                    name="invoiceDate"
                                    type="date"
                                    value={values.invoiceDate}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>

                            {/* Customer Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-lg font-semibold">Customer Name</label>
                                    <input
                                        name="customer.name"
                                        type="text"
                                        value={values.customer.name}
                                        onChange={handleChange}
                                        placeholder="Customer Name"
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-semibold">Customer Mobile</label>
                                    <input
                                        name="customer.mobile"
                                        type="text"
                                        value={values.customer.mobile}
                                        onChange={handleChange}
                                        placeholder="Customer Mobile"
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Product Details */}
                            <FieldArray name="bills">
                                {({ remove, push }) => (
                                    <div className="mb-4">
                                        <table className="w-full table-auto border-collapse bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="border py-2 px-4">Product</th>
                                                    <th className="border py-2 px-4">Quantity</th>
                                                    <th className="border py-2 px-4">Price</th>
                                                    <th className="border py-2 px-4">Total</th>
                                                    <th className="border py-2 px-4">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {values.bills.map((bill, index) => (
                                                    <tr key={index}>
                                                        <td className="border p-2">
                                                            <input
                                                                name={`bills.${index}.product`}
                                                                type="text"
                                                                value={bill.product}
                                                                onChange={handleChange}
                                                                className="w-full px-2 py-1 border rounded-md"
                                                                placeholder="Product Name"
                                                            />
                                                        </td>
                                                        <td className="border p-2">
                                                            <input
                                                                name={`bills.${index}.quantity`}
                                                                type="number"
                                                                value={bill.quantity}
                                                                onChange={(e) => {
                                                                    const quantity = parseFloat(e.target.value || 0);
                                                                    const price = parseFloat(bill.price || 0);
                                                                    setFieldValue(`bills.${index}.quantity`, quantity);
                                                                    setFieldValue(`bills.${index}.total`, quantity * price);
                                                                }}
                                                                className="w-full px-2 py-1 border rounded-md"
                                                            />
                                                        </td>
                                                        <td className="border p-2">
                                                            <input
                                                                name={`bills.${index}.price`}
                                                                type="number"
                                                                value={bill.price}
                                                                onChange={(e) => {
                                                                    const price = parseFloat(e.target.value || 0);
                                                                    const quantity = parseFloat(bill.quantity || 0);
                                                                    setFieldValue(`bills.${index}.price`, price);
                                                                    setFieldValue(`bills.${index}.total`, quantity * price);
                                                                }}
                                                                className="w-full px-2 py-1 border rounded-md"
                                                            />
                                                        </td>
                                                        <td className="border p-2">
                                                            <input
                                                                name={`bills.${index}.total`}
                                                                type="number"
                                                                value={bill.total}
                                                                readOnly
                                                                className="w-full px-2 py-1 border rounded-md bg-gray-100"
                                                            />
                                                        </td>
                                                        <td className="border p-2 text-center">
                                                            <button type="button" onClick={() => remove(index)} className="text-red-600">Remove</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <button
                                            type="button"
                                            onClick={() => push({ product: '', quantity: 0, price: 0, total: 0 })}
                                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                                        >
                                            Add Product
                                        </button>
                                    </div>
                                )}
                            </FieldArray>

                            {/* Payment Details */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block text-lg font-semibold">Online Received</label>
                                    <input
                                        name="onlineReceived"
                                        type="number"
                                        value={values.onlineReceived}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-semibold">Cash Received</label>
                                    <input
                                        name="cashReceived"
                                        type="number"
                                        value={values.cashReceived}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-semibold">Discount (%)</label>
                                    <input
                                        name="discount"
                                        type="number"
                                        value={values.discount}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block text-lg font-semibold">Total Amount (Before Discount)</label>
                                    <input
                                        name="totalAmount"
                                        value={values.bills.reduce((sum, bill) => sum + bill.total, 0)}
                                        readOnly
                                        className="w-full px-3 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-semibold">Discounted Total</label>
                                    <input
                                        name="discountedTotal"
                                        value={values.bills.reduce((sum, bill) => sum + bill.total, 0) - (values.bills.reduce((sum, bill) => sum + bill.total, 0) * (values.discount / 100))}
                                        readOnly
                                        className="w-full px-3 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-semibold">Due Amount</label>
                                    <input
                                        name="dueAmount"
                                        value={Math.max((values.bills.reduce((sum, bill) => sum + bill.total, 0) - (values.bills.reduce((sum, bill) => sum + bill.total, 0) * (values.discount / 100))) - (parseFloat(values.onlineReceived) + parseFloat(values.cashReceived)), 0)}
                                        readOnly
                                        className="w-full px-3 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md">
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddBill;
