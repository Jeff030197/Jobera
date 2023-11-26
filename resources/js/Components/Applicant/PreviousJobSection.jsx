import React from 'react'

function PreviousJobSection() {
  return (
    <div>
            <div className="py-5">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-5">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex justify-between p-6 text-2xl text-blue-900">
                            <b>Previous Work Experience</b>
                            {/* <PreviousJobsEditButton/> */}
                        </div>
                        <div className="container">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 border-t-2 border-r-2 border-solid basis-4/12">
                                    <div className="flex mt-3 mb-5 mr-3">
                                        <b className="ml-5 mr-1 text-lg">
                                            Date of work:
                                        </b>
                                        <p className="text-lg text-blue-500">
                                            2020-2023
                                        </p>
                                        <b className="ml-10 mr-1 text-lg">
                                            Name of job:
                                        </b>
                                        <p className="text-lg text-blue-500">
                                            Software Developer
                                        </p>
                                    </div>
                                    <div className="mb-5">
                                        <b className="ml-5 text-lg">
                                            Job Description
                                        </b>
                                    </div>
                                    <div className="mb-5 p-5">
                                        <b className="ml-32">
                                            Responsible for the development of web and mobile application.
                                        </b>
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

export default PreviousJobSection