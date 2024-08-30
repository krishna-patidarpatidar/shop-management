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
            <div className="relative py-3 sm:max-w-4xl sm:mx-auto w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 className="text-3xl font-bold text-center mb-8">
                    <div className='flex justify-between border-b-[3px] pt-9 py-2'>
                    <div className='flex items-center'>
                        <div className='max-w-[50px] '>
                            <img className='' src="https://upload.wikimedia.org/wikipedia/commons/1/10/Goddess_Maheshwari_%28%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80%29.png" alt="" />
                        </div>
                        <div>
                            <h1 className='flex gap-2 text-4xl font-semibold place-items-end'>
                                Maa Bhavani <p className='text-lg font-medium'>sare center.</p>
                            </h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='flex gap-2 text-4xl font-semibold place-items-end'>Invoice</h1>
                    </div>

                </div>
                    </h1>
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
                               <div className='flex justify-between items-center'>
                               <div  className="text-lg font-semibold mb-2">
                                <p >Invoice No : 32145695</p>
                                </div>
                                <div className="flex flex-col items-end ">
                                    <label className="text-lg font-semibold mb-2" htmlFor="invoiceDate">Invoice Date</label>
                                    <input
                                        name="invoiceDate"
                                        type="date"
                                        value={values.invoiceDate}
                                        onChange={handleChange}
                                        className=" py-2 px-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>
                               </div>

                                {/* Customer Details */}
                               <div className='flex gap-3'>
                               <div className="flex flex-col">
                                    <label className="text-lg font-semibold mb-2" htmlFor="customer.name">Customer Name</label>
                                    <input
                                        name="customer.name"
                                        type="text"
                                        value={values.customer.name}
                                        onChange={handleChange}
                                        placeholder="Customer Name"
                                        className=" py-2 px-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                               </div>

                                {/* Product Details */}
                                <FieldArray name="bills">
                                    {({ remove, push }) => (
                                        <div className="space-y-4">
                                            <table className=" mx-auto bg-white table-auto border-collapse">
                                                <thead>
                                                    <tr className="bg-gray-200">
                                                        <th className="py-2 px-[80px] border border-gray-300 text-center">Product Name</th>
                                                        <th className="py-2 px-4 border border-gray-300 text-center">Quantity</th>
                                                        <th className="py-2 px-4 border border-gray-300 text-center">Rate</th>
                                                        <th className="py-2 px-4 border border-gray-300 text-center">Total</th>
                                                        <th className="py-2 px-4 border border-gray-300 text-center">Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {values.bills.map((bill, index) => (
                                                        <tr key={index}>
                                                            <td className="py-2 px-4 border border-gray-300 text-center">
                                                                <input
                                                                    name={`bills.${index}.product`}
                                                                    type="text"
                                                                    value={bill.product}
                                                                    onChange={handleChange}
                                                                    placeholder="Product Name"
                                                                    className="px-2 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                                                                />
                                                            </td>
                                                            <td className="py-2 px-4 border border-gray-300 text-center">
                                                                <input
                                                                    name={`bills.${index}.quantity`}
                                                                    type="text"
                                                                    value={bill.quantity}
                                                                    onChange={(e) => {
                                                                        const quantity = parseFloat(e.target.value || 0);
                                                                        const price = parseFloat(bill.price || 0);
                                                                        const total = quantity * price;
                                                                        setFieldValue(`bills.${index}.quantity`, quantity);
                                                                        setFieldValue(`bills.${index}.total`, total);
                                                                    }}
                                                                    placeholder="Quantity"
                                                                    className="px-2 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                                                                />
                                                            </td>
                                                            <td className="py-2 px-4 border border-gray-300 text-center">
                                                                <input
                                                                    name={`bills.${index}.price`}
                                                                    type="text"
                                                                    value={bill.price}
                                                                    onChange={(e) => {
                                                                        const price = parseFloat(e.target.value || 0);
                                                                        const quantity = parseFloat(bill.quantity || 0);
                                                                        const total = quantity * price;
                                                                        setFieldValue(`bills.${index}.price`, price);
                                                                        setFieldValue(`bills.${index}.total`, total);
                                                                    }}
                                                                    placeholder="Rate"
                                                                    className="px-2 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                                                                />
                                                            </td>
                                                            <td className="py-2 px-4 border border-gray-300 text-center">
                                                                <input
                                                                    name={`bills.${index}.total`}
                                                                    type="number"
                                                                    value={bill.total}
                                                                    readOnly
                                                                    className="px-2 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-100 w-full"
                                                                />
                                                            </td>
                                                            <td className="py-2 px-4 border border-gray-300 text-center">
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
<div className='flex justify-between'>
    
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
                                        type="text"
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
                                        value={values.dueAmount}
                                        readOnly
                                        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-100"
                                    />
                                </div>
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
