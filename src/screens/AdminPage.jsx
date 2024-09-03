import react from 'react';
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import { Link, Outlet } from 'react-router-dom'

const AdminPage = () => {


  return (
    <div>

      <div className='flex'>
        <div className=''>
          <SideBar />
        </div>
        <div className='flex flex-col flex-1 '>
          <Header />
          <main>
            <Outlet />
          </main>

        </div>
      </div>





    </div>
  )
}

export default AdminPage