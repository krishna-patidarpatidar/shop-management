import React from 'react';
import { Formik, FieldArray } from 'formik';
import { useCreateBillMutation } from '../Redux/serviec';

const initialValues = {
    invoiceDate: '',
    dueDate: '',

    customer: {
        name: '',
        address: '',
        mobile: ''
    },
    products: [{
        name: '',
        quantity: '',
        price: '',
        total: '',
    }],
    onlineAmount: '',
    cashAmount: '',
    discount: ''  // discount in rupee
};

const AddBill = () => {
    const [createBill] = useCreateBillMutation();
    const token = localStorage.getItem("auth");

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Invoice</h1>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log(values);
                        createBill({ billData: values, token })
                            .then((res) => {
                                console.log(res)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }}
                >
                    {({ values, handleSubmit, setFieldValue, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            {/* Invoice Date */}
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
                                    <label className="block text-lg font-semibold">Customer Address</label>
                                    <input
                                        name="customer.address"
                                        type="text"
                                        value={values.customer.address}
                                        onChange={handleChange}
                                        placeholder="Customer Address"
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
                            <FieldArray name="products">
                                {({ remove, push }) => (
                                    <div className="mb-4">
                                        <table className="w-full table-auto border-collapse bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="border py-2 px-4">Product</th>
                                                    <th className="border py-2 px-4">quantity</th>
                                                    <th className="border py-2 px-4">price</th>
                                                    <th className="border py-2 px-4">Total</th>
                                                    <th className="border py-2 px-4">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {values.products.map((product, index) => (
                                                    <tr key={index}>
                                                        <td className="border p-2">
                                                            <input
                                                                name={`products.${index}.name`}
                                                                type="text"
                                                                value={product.name}
                                                                onChange={handleChange}
                                                                className="w-full px-2 py-1 border rounded-md"
                                                                placeholder="Product Name"
                                                            />
                                                        </td>
                                                        <td className="border p-2">
                                                            <input
                                                                name={`products.${index}.quantity`}
                                                                type="number"
                                                                value={product.quantity}
                                                                onChange={(e) => {
                                                                    const quantity = parseFloat(e.target.value || 0);
                                                                    const price = parseFloat(product.price || 0);
                                                                    setFieldValue(`products.${index}.quantity`, quantity);
                                                                    setFieldValue(`products.${index}.total`, quantity * price);
                                                                }}
                                                                className="w-full px-2 py-1 border rounded-md"
                                                            />
                                                        </td>
                                                        <td className="border p-2">
                                                            <input
                                                                name={`products.${index}.price`}
                                                                type="number"
                                                                value={product.price}
                                                                onChange={(e) => {
                                                                    const price = parseFloat(e.target.value || 0);
                                                                    const quantity = parseFloat(product.quantity || 0);
                                                                    setFieldValue(`products.${index}.price`, price);
                                                                    setFieldValue(`products.${index}.total`, quantity * price);
                                                                }}
                                                                className="w-full px-2 py-1 border rounded-md"
                                                            />
                                                        </td>
                                                        <td className="border p-2">
                                                            <input
                                                                name={`products.${index}.total`}
                                                                type="number"
                                                                value={product.total}
                                                                readOnly
                                                                className="w-full px-2 py-1 border rounded-md bg-gray-100"
                                                            />
                                                        </td>
                                                        <td className="border p-2 text-center">
                                                            <button type="button" onClick={() => remove(index)} className="text-red-600">
                                                                Remove
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className='flex justify-between'>
                                            <button
                                                type="button"
                                                onClick={() => push({ name: '', quantity: 0, price: 0, total: 0 })}
                                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                                            >
                                                Add Product
                                            </button>
                                            <span>
                                                <label htmlFor="dueDate">dueDate</label>
                                                <input
                                                    name='dueDate'
                                                    type="date"
                                                    value={values.dueDate}
                                                    onChange={handleChange}
                                                    className='border py-1 px-2 m-3' />
                                            </span>
                                        </div>

                                    </div>
                                )}
                            </FieldArray>

                            {/* Payment Details */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block text-lg font-semibold">Online Received</label>
                                    <input
                                        name="onlineAmount"
                                        type="number"
                                        value={values.onlineAmount}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-semibold">Cash Received</label>
                                    <input
                                        name="cashAmount"
                                        type="number"
                                        value={values.cashAmount}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-semibold">discount</label>
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
                                    <label className="block text-lg font-semibold">Total Amount (Before discount)</label>
                                    <input
                                        name="totalAmount"
                                        value={values.products.reduce((sum, product) => sum + product.total, 0)}
                                        readOnly
                                        className="w-full px-3 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-semibold">discounted Total</label>
                                    <input
                                        name="discountedTotal"
                                        value={
                                            (values.products.reduce((sum, product) => sum + product.total, 0) - (values.discount))
                                        }
                                        readOnly
                                        className="w-full px-3 py-2 border rounded-md bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-semibold">Due Amount</label>
                                    <input
                                        name="dueAmount"
                                        value={Math.max(

                                            (values.products.reduce((sum, product) => sum + product.total, 0) - (values.discount)) -
                                            (parseFloat(values.onlineAmount) + parseFloat(values.cashAmount)), 0)}
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
