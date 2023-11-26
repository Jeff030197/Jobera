import React, {useState} from 'react'
import { FaPlus } from 'react-icons/fa'
import Categories from './Categories'
function Category({typeOfWork, location, jobCategory}) {
  const [activeTab, setActiveTab] = useState('Location')
  console.log(typeOfWork)

  console.log(activeTab)
  const changeTab = (tab) => {

    setActiveTab(tab)
  }
  return (
    <>
    <div>
      <div className="category-1 p-4 mx-5 mt-8 flex gap-5 justify-center">
        <h3 className='bg-light-blue-800 text-white  p-2 px-4 rounded-full cursor-pointer' onClick={() =>changeTab('Location')}>Location</h3>
        <h3 className='bg-light-blue-800 text-white  p-2 px-4 rounded-full cursor-pointer' onClick={() =>changeTab('Job_Category')}>Job Category</h3>
        <h3 className='bg-light-blue-800 text-white  p-2 px-4 rounded-full cursor-pointer' onClick={() =>changeTab('Employment_Type')}>Employment Type</h3>
      </div>
    </div>


    {
 activeTab == "Location"  && (
  <>
      <div className=' mt-10 p-4 mx-5 shadow-lg'>
      <div className="title flex justify-between">
         <h3 className='text-black text-xl font-bold text-center pt-2'>Location</h3> 
         <div className="button">
          <button className='p-2 px-6 bg-blue-800 text-white flex text-center gap-3'><FaPlus className='mt-1' />Add</button>
         </div>
      </div>
    </div>
     <Categories typeOfWork={location}/>
     </>
    )
  }
  {
      activeTab == "Job_Category" && (
        <>
        <div className=' mt-10 p-4 mx-5 shadow-lg'>
        <div className="title flex justify-between">
           <h3 className='text-black text-xl font-bold text-center pt-2'>Job Category</h3> 
           <div className="button">
            <button className='p-2 px-6 bg-blue-800 text-white flex text-center gap-3'><FaPlus className='mt-1' />Add</button>
           </div>
        </div>
      </div>
       <Categories typeOfWork={jobCategory}/>
       </>
      )
  }
  {
      activeTab == "Employment_Type" && (
        <>
        <div className=' mt-10 p-4 mx-5 shadow-lg'>
        <div className="title flex justify-between">
           <h3 className='text-black text-xl font-bold text-center pt-2'>Employment Type</h3> 
           <div className="button">
            <button className='p-2 px-6 bg-blue-800 text-white flex text-center gap-3'><FaPlus className='mt-1' />Add</button>
           </div>
        </div>
      </div>
      <Categories typeOfWork={typeOfWork}/>
      </>
      )
  }
   
    </>
  )
}

export default Category 