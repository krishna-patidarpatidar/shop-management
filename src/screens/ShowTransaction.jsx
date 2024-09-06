import React from 'react'

const ShowTransaction = () => {
    return (
        <div className='max-w-[85%] mx-auto text-4xl mt-4'>
            <div className='flex justify-between py-3  font-semibold'>
                <h1 >ShowTransaction</h1>
            </div>
            <table className='border w-[80%] text-left'>
                <thead>
                    <tr>
                        <th className='border'>s.no</th>
                        <th className='border'>date</th>
                        <th className='border'>amount</th>
                        <th className='border'>due amount</th>
                        <th className='border'>due date</th>
                        <th className='border'>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border'>1</td>
                        <td className='border'>11-11-1997</td>
                        <td className='border'>5000</td>
                        <td className='border'>5000</td>
                        <td className='border'>01/02/2024</td>
                        <td className='border gap-2 flex'>
                            <button className='border bg-red-600 rounded-lg'>delete</button>
                            <button className='border bg-blue-600 rounded-lg'>Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowTransaction