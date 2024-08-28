import React from 'react'
import AdminPage from './AdminPage'
import { Link } from 'react-router-dom'

const ShowTransaction = () => {
    return (
        <div>
            <AdminPage />


            <div className='max-w-[85%] mx-auto'>

                <div className='flex justify-between '>
                    <h1>ShowTransaction</h1>
                    <Link to={'/add-transaction'}>Add transactions</Link>
                </div>
                <table className='border w-[80%]'>
                    <thead>
                        <tr>
                            <th className='border'>s.no</th>
                            <th className='border'>date</th>
                            <th className='border'>amount</th>
                            <th className='border'>remark</th>
                            <th className='border'>action</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border'>1</td>
                            <td className='border'>11-11-1997</td>
                            <td className='border'>5000</td>
                            <td className='border'>ram</td>
                            <td className='border gap-2 flex'>

                                <button >delete</button>
                                <button >Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default ShowTransaction