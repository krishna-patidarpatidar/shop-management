import react from 'react';
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import { Outlet } from 'react-router-dom'
const AdminPage = () => {
  return (
    <div className=''>
      <div className='md:w-full'>
        <Header />
      </div>
      <div className='md:flex '>
        <div>
          <SideBar />
        </div>
        <main className='flex-1 '>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminPage