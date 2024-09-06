import React from 'react'
import { Link } from 'react-router-dom'

const DeshBord = () => {
  return (
    
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 items-start lg:grid-cols-4">
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold">Total Sales</h3>
      <p className="text-2xl">$12,345</p>
    </div>
    <div className="p-4 bg-white shadow rounded-lg">
      <Link to={'/admin/bills'}>
        <h3 className="text-xl font-semibold">New Bill</h3>
        <p className="text-2xl">50</p>
      </Link>
    </div>
    <div className="p-4 bg-white shadow rounded-lg">
      <Link to={'/admin/contact'}>
        <h3 className="text-xl font-semibold">Customers</h3>
        <p className="text-2xl">1,200</p>
      </Link>
    </div>
    <div className="p-4 bg-white shadow rounded-lg">
      <Link to={'/admin/vendors'}>
        <h3 className="text-xl font-semibold">Vendors</h3>
        <p className="text-2xl">300</p>
      </Link>
    </div>
  </div>
  )
}

export default DeshBord