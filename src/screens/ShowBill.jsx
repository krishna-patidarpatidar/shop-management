import React from 'react';

const ShowBill = () => {
    return (
        <div className="container mx-auto px-4 mt-3 text-blue-950 font-semibold">
            <div className="border max-w-full md:max-w-[960px] mx-auto p-4 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row justify-between border-b-[3px] py-4">
                    <div className="flex items-center">
                        <div className="w-[50px]">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/10/Goddess_Maheshwari_%28%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80%29.png"
                                alt="Logo"
                                className="w-full"
                            />
                        </div>
                        <div className="ml-4">
                            <h1 className="text-2xl md:text-4xl font-semibold">
                                Maa Bhavani <span className="text-lg md:text-xl font-medium">Saree Center</span>
                            </h1>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <h1 className="text-2xl md:text-4xl font-semibold">Invoice</h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between mt-4">
                    <div className="mb-4 md:mb-0">
                        <h1>INVOICE TO :</h1>
                        <h1 className="text-xl">KRISHNA PATIDAR</h1>
                        <h1 className="text-sm">Mo.No: 8251012624</h1>
                    </div>
                    <div className="text-center mb-4 md:mb-0">
                        <p>Date: 11/11/2024</p>
                        <p>Invoice No: 32145695</p>
                    </div>
                    <div className="text-right">
                        <h1>TOTAL DUE :</h1>
                        <h1>INR: ₹ 1,500</h1>
                    </div>
                </div>

                <div className="relative overflow-x-auto border-b-2 py-5">
                    <table className="w-full text-sm">
                        <thead className="text-xs text-gray-700 uppercase bg-blue-900 dark:text-gray-400">
                            <tr className="text-left">
                                <th scope="col" className="p-4">S.No</th>
                                <th scope="col" className="px-6 py-3">Product name</th>
                                <th scope="col" className="px-6 py-3">Qty</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Total</th>
                                <th scope="col" className="px-6 py-3">Received</th>
                                <th scope="col" className="px-6 py-3">Due</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example Rows */}
                            <tr>
                                <td className="p-4">1</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 text-left">iPad Pro</th>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">100000</td>
                                <td className="px-6 py-4">20000</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 hover:underline ml-3">Remove</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">1</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 text-left">iPad Pro</th>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">100000</td>
                                <td className="px-6 py-4">20000</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 hover:underline ml-3">Remove</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">1</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 text-left">iPad Pro</th>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">100000</td>
                                <td className="px-6 py-4">20000</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 hover:underline ml-3">Remove</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">1</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 text-left">iPad Pro</th>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">100000</td>
                                <td className="px-6 py-4">20000</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 hover:underline ml-3">Remove</a>
                                    </div>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col md:flex-row justify-between p-6">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-[20px] text-green-900">Payment Method</h1>
                        <h1>Bank Name: XYZ</h1>
                        <h1>Ac. No.: 321456987455</h1>
                    </div>
                    <div className="text-right">
                        <h2>Sub-total:  1500000</h2>
                        <h1>Tax:  50000</h1>
                        <h1>Total:  1550000</h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between pb-1 px-5">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-[17px] text-green-900">Terms and conditions</h1>
                        <p className="text-xs">
                            Please send payment within 30 days of receiving this invoice. There will be a 10% interest charge per month on late invoices.
                        </p>
                    </div>
                    <div className="text-right">
                        <h1 className="text-[18px]">Krishna Patidar</h1>
                        <p className="border-b-2">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowBill;
