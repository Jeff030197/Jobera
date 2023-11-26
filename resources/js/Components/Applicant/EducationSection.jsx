import React from 'react'

function EducationSection() {
  return (
    <div>
       <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <EducationEditButton/> */}
                        <div className="container ">
                            <div className="flex flex-col md:flex-row">
                                <div className="border-solid flex-1 basis-4/12 border-r-2 border-t-2">
                                    <div className="flex items-center justify-between mt-3 mb-5">
                                    <img class="w-20 h-20 rounded-full ml-10 mt-2 mb-2" src="https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo-Meaning-history.jpg" alt="Large avatar"/>
                                    <b className='text-2xl  text-blue-900'>School</b>
                                    <b className='text-2xl mr-10  text-blue-900'>2020-2023</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default EducationSection