import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaHome, FaUsers, FaUserCircle, FaBriefcase } from "react-icons/fa";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BiSolidLogOut, BiSolidCategoryAlt } from "react-icons/bi";
import HomeDashBoard from "./HomeDashBoard";
import Category from "./Category";
import { Users } from "@/DATA/Users";
import { Applicants } from "@/DATA/Applicants";
import { Employers } from "@/DATA/Employers";
import Accounts from "./Accounts";
import Employer from "./Employer";

import { typeOfWork, location, jobCategory } from "@/DATA/Category";
import Applicant from "./Applicant";
import Job_Posted from "./Job_Posted";
import Applications from "./Applications";

function SideBar({ users, applicants, employer, job_posted, applications }) {
    console.log(job_posted);
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex max-w-full">
            <div className="flex flex-col h-screen gap-2 px-4 py-4 uppercase bg-gray-200 border w-60">
                <Typography
                    variant="h6"
                    className={`px-2 py-1 flex gap-1 items-center cursor-pointer  ${
                        activeTab === "tab1"
                            ? " text-white bg-blue-400 border-blue-900 border-2 rounded-xl"
                            : "text-gray-600"
                    }`}
                    onClick={() => handleTabClick("tab1")}
                >
                    <FaHome />
                    <span className="hidden lg:inline">Home</span>
                </Typography>
                <Typography
                    variant="h6"
                    className={`px-2 py-1 flex gap-1 items-center cursor-pointer   ${
                        activeTab === "tab2"
                            ? " text-white bg-blue-400 border-blue-900 border-2 rounded-xl"
                            : "text-gray-600"
                    }`}
                    onClick={() => handleTabClick("tab2")}
                >
                    <FaUserCircle />
                    <span className="hidden lg:inline">Accounts</span>
                </Typography>
                <Typography
                    variant="h6"
                    className={`px-2 py-1 flex gap-1 items-center cursor-pointer  ${
                        activeTab === "tab3"
                            ? " text-white bg-blue-400 border-blue-900 border-2 rounded-xl"
                            : "text-gray-600"
                    }`}
                    onClick={() => handleTabClick("tab3")}
                >
                    <FaUsers />
                    <span className="hidden lg:inline">Applicants</span>
                </Typography>
                <Typography
                    variant="h6"
                    className={`px-2 py-1 flex gap-1 items-center cursor-pointer  ${
                        activeTab === "tab4"
                            ? " text-white bg-blue-400 border-blue-900 border-2 rounded-xl"
                            : "text-gray-600"
                    }`}
                    onClick={() => handleTabClick("tab4")}
                >
                    <FaBriefcase />
                    <span className="hidden lg:inline">Employers</span>
                </Typography>
                <Typography
                    variant="h6"
                    className={`px-2 py-1 flex gap-1 items-center cursor-pointer  ${
                        activeTab === "tab5"
                            ? " text-white bg-blue-400 border-blue-900 border-2 rounded-xl"
                            : "text-gray-600"
                    }`}
                    onClick={() => handleTabClick("tab5")}
                >
                    <BsFillClipboardCheckFill />
                    <span className="hidden lg:inline">Job Posting</span>
                </Typography>
                <Typography
                    variant="h6"
                    className={`px-2 py-1 flex gap-1 items-center cursor-pointer  ${
                        activeTab === "tab6"
                            ? " text-white bg-blue-400 border-blue-900 border-2 rounded-xl"
                            : "text-gray-600"
                    }`}
                    onClick={() => handleTabClick("tab6")}
                >
                    <BiSolidCategoryAlt />
                    <span className="hidden lg:inline">Applications</span>
                </Typography>
                <Typography
                    variant="h5"
                    color="red"
                    className="flex items-center text-left cursor-pointer mt-[43rem]"
                >
                    <BiSolidLogOut />
                    <span className="hidden lg:inline">log out</span>
                </Typography>
            </div>
            <div className="w-full max-h-screen mx-auto overflow-scroll">
                {activeTab === "tab1" && (
                    <div>
                        <HomeDashBoard
                            users={users}
                            applicants={applicants}
                            employer={employer}
                            job_posted={job_posted}
                            applications={applications}
                        />
                    </div>
                )}
                {activeTab === "tab2" && (
                    <div>
                        <Accounts users={users} />
                    </div>
                )}
                {activeTab === "tab3" && (
                    <div>
                        <Applicant applicants={applicants} />
                    </div>
                )}

                {activeTab === "tab4" && (
                    <div>
                        <Employer employer={employer} />
                    </div>
                )}
                {activeTab === "tab5" && (
                    <div>
                        <Job_Posted job_posted={job_posted} />
                    </div>
                )}
                {activeTab === "tab6" && (
                    <div>
                        <Applications applications={applications} />
                    </div>
                )}
                {/* {activeTab === "tab6" && (
                    <div>
                        <Category
                            typeOfWork={typeOfWork}
                            location={location}
                            jobCategory={jobCategory}
                        />
                    </div>
                )} */}
            </div>
        </div>
    );
}

export default SideBar;
