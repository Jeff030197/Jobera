import { useState } from 'react'
import './admin.css'
import Header from '@/Components/Admin/Header'

import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import Home from './mainAdmin'
function adminPage() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    const [active, setActive] = useState("Dashboard")

    console.log(active)


    const handleItemClick = (item) => {
        setActive(item);
      };
  return (
    <div className='grid-container'>
         <Header OpenSidebar={OpenSidebar}/>

                        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
                        <div className='sidebar-title'>
                            <div className='sidebar-brand'>
                              JOBERA
                            </div>
                            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
                        </div>

                        <ul className='sidebar-list'>
                            <li className='sidebar-list-item'>
                                <a href="" className='flex gap-2' onClick={() => handleItemClick("Dashboard")}>
                                    <BsGrid1X2Fill className='icon h-5 w-5' /> Dashboard
                                </a>
                            </li>
                            <li className='sidebar-list-item'>
                                <a  onClick={() => handleItemClick("job-posted")} className='flex gap-2'>
                                    <BsFillArchiveFill className='icon h-5 w-5' /> Job Posted
                                </a>
                            </li>
                            <li className='sidebar-list-item'>
                                <a onClick={() => handleItemClick("categories")} className='flex gap-2'>
                                    <BsFillGrid3X3GapFill className='icon h-5 w-5' /> Categories
                                </a>
                            </li>
                            <li className='sidebar-list-item'>
                                <a onClick={() => handleItemClick("applicants")} className='flex gap-2'>
                                    <BsPeopleFill className='icon h-5 w-5' /> Applicants
                                </a>
                            </li>
                            <li className='sidebar-list-item'>
                                <a onClick={() => handleItemClick("employer")} className='flex gap-2'>
                                    <BsListCheck className='icon h-5 w-5'/> Employer
                                </a>
                            </li>
                            <li className='sidebar-list-item'>
                                <a onClick={() => handleItemClick("job-posted")} className='flex gap-2'>
                                    <BsMenuButtonWideFill className='icon h-5 w-5'/> Accounts
                                </a>
                            </li>
                            <li className='sidebar-list-item'>
                                <a onClick={() => handleItemClick("job-posted")} className='flex gap-2'>
                                    <BsFillGearFill className='icon h-5 w-5'/> Setting
                                </a>
                            </li>
                        </ul>
                    </aside>
         <Home active={active}/>
    </div>
  )
}

export default adminPage