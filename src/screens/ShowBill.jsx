import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ShowBill = () => {
    const contentToPrint = useRef(null);
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });
    return (
        <>
        
        <div className='text-right'>
       <button
            onClick={() => {
                handlePrint(null, () => contentToPrint.current);
            }}> PRINT</button>
       </div>
        
        <div ref={contentToPrint} className="  mx-auto  mt-3 text-blue-950 font-semibold">
            <div className="border ml-[-81px] md:w-[900px] rounded-lg w-[450px] p-4 shadow-lg">
                <div className='flex justify-between border-b-[3px] md:pt-5 '>
                    <div className='flex items-center'>
                        <div className='w-[25px]  md:max-w-[50px] '>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Goddess_Maheshwari_%28%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80%29.png" alt="" />
                        </div>
                        <div className='text-start'>
                            <h1 className='flex gap-2 text- md:text-4xl font-semibold place-items-end'>
                                Maa Bhavani <p className='text-[10px] md:text-lg font-medium'>sare center.</p>
                            </h1>
                            <h1 className='text-[10px]'>
                                mo. 8251012924 , add:-neem chouk dasai(dhar)
                            </h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='flex gap-2 text-xl md:text-4xl font-semibold place-items-end'>Invoice</h1>
                    </div>

                </div>

                <div className="flex justify-between mt-4">
                    <div className="mb-4 md:mb-0">
                        <h1>INVOICE TO :</h1>
                        <h1 className="text-sm md:text-xl">KRISHNA PATIDAR</h1>
                        <h1 className="text-[10px] md:text-sm">Mo.No: 8251012624</h1>
                    </div>
                    <div className="text-center ">
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

                            </tr>
                            <tr>
                                <td className="p-4">1</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 text-left">iPad Pro</th>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">120000</td>

                            </tr>
                            <tr>
                                <td className="p-4">1</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 text-left">iPad Pro</th>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">120000</td>

                            </tr>
                            <tr className='border-b-2'>
                                <td className="p-4">1</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 text-left">iPad Pro</th>
                                <td className="px-6 py-4">1</td>
                                <td className="px-6 py-4">120000</td>
                                <td className="px-6 py-4">120000</td>

                            </tr>
                            <tr>
                                <td colSpan={2} className="p-4 text-center ">sub total</td>
                                <td colSpan={2} className="px-6 py-4">4</td>
                                <td className="px-6 py-4">120000</td>

                            </tr>

                        </tbody>
                    </table>
                    <table className="w-full text-sm text-center  ">
                        <thead className="text-xs text-gray-900 uppercase border  dark:text-gray-950">
                            <tr>
                                <th>totalAmount</th>
                                <th colSpan={2}>Receved Amount
                                    <p className='flex justify-around text-[10px]'>
                                        <p>online</p> <p className=''>case</p>
                                    </p>
                                </th>
                                <th>Due Amount</th>
                                <th>Pay in date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>100000</td>
                                <td><p>1000</p></td>

                                <td><p>2000</p></td>
                                <td>10000</td>
                                <td>11/11/2024</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <div className="flex flex-col md:flex-row justify-between p-6">
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
                </div> */}

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
        </>
    );
}

export default ShowBill;
