import React, { useState } from "react";
import AuthNavBar from "@/Components/Navbar/AuthNavBar";
import Footer from "@/Components/Footer/Footer";

const Career = ({ auth, careers, applicants }) => {
    const jobs = careers;

    return (
        <>
            <AuthNavBar auth={auth} applicants />
            <div className="w-full p-5 bg-gray-900 ">
                <div className="p-9">
                    <div className="px-10 flex justify-around">
                        <div className="h-32 text-center rounded-lg w-80 bg-blue-gray-50">
                            <h6 className="text-[60px]">{jobs.length}</h6>
                            <h1>All Jobs</h1>
                        </div>

                        <div className="h-32 text-center rounded-lg w-80 bg-blue-gray-50">
                            <h6 className="text-[60px]">{auth.user.name}</h6>
                            <h1>Applicants</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-900">
                <div className="p-10">
                    <div className="flex w-full h-fit text-center row-auto justify-center pt-10">
                        <div className="flex-1 py-5 bg-blue-gray-300 border-blue-gray-600 border">
                            Applied on
                        </div>
                        <div className="flex-1 py-5 bg-blue-gray-300 border-blue-gray-600 border">
                            Applied role
                        </div>
                        <div className="flex-1 py-5 bg-blue-gray-300  border-blue-gray-600 border">
                            Stages
                        </div>
                    </div>
                    <div className="pb-32">
                        <div className="flex flex-col justify-center">
                            {careers.map((list) => (
                                <div className="flex w-full h-fit text-center row-auto justify-center">
                                    <div className=" flex-1 bg-gray-200  border-blue-gray-600 border">
                                        {new Date(
                                            list.created_at
                                        ).toLocaleDateString()}
                                    </div>

                                    <div className="flex-1 bg-gray-200 text- border-blue-gray-600 border">
                                        {list.create_jobs.job_name}
                                    </div>

                                    <div className="flex-1 bg-gray-200  border-blue-gray-600 border">
                                        {list.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Career;
