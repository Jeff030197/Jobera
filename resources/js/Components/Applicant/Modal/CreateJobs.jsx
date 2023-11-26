import React, { useState } from "react";

import SampleApp from "@/Pages/Home/SampleApp";


const CreateJobs = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
              <div className="flex justify-end py-3 px-3 ">
            <div className="mt-3">
                <button
                    data-modal-target="staticModal"
                    data-modal-toggle="staticModal"
                    className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-xl font-medium transition transform hover:-translate-y-0.5"
                    type="button"
                    onClick={handleShow}
                >
                    Add Profile
                </button>

                <div
                    id="staticModal"
                    data-modal-backdrop="static"
                    tabindex="-1"
                    aria-hidden="true"
                    className={`fixed top-0 left-0 right-0 z-50 ${
                        show ? "block" : "hidden"
                    } p-4 mb-5 flex justify-center items-center min-h-screen bg-slate-900/50 `}
                >
                    <div className="relative w-full max-w-2xl max-h-full ">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Add Profile
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="staticModal"
                                    onClick={handleClose}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className="overflow-y-auto">
                                <SampleApp onClose={handleClose}></SampleApp>
                            </div>

                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="staticModal"
                                    type="button"
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    onClick={handleClose}
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                    +
                </div>
            </div>
        </div>
        </div>
      
    );
};

export default CreateJobs;
