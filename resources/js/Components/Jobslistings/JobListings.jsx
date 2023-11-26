import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";

import {
    Checkbox,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { HiLocationMarker } from "react-icons/hi";
import { MdWorkHistory } from "react-icons/md";
import JobCard from "@/Components/Jobslistings/JobCard";
import { Jobs } from "@/DATA/Jobs";

function JobListings() {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        fullTime: false,
        partTime: false,
        hybrid: false,
        workFromHome: false,
        onSite: false,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;

    const handleCheckboxChange = (filterName) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;

    const filteredJobs = Jobs.filter((item) => {
        const lowerSearch = search.toLowerCase();
        return (
            (lowerSearch === "" ||
                item.jobname.toLowerCase().includes(lowerSearch)) &&
            ((!filters.hybrid && !filters.remote && !filters.onSite) ||
                (filters.hybrid && item.typeofwork === "Hybrid") ||
                (filters.remote && item.typeofwork === "Remote") ||
                (filters.onSite && item.typeofwork === "On-Site")) &&
            ((!filters.fullTime && !filters.partTime && !filters.freeLance) ||
                (filters.fullTime && item.worksched === "Full-Time") ||
                (filters.partTime && item.worksched === "Part-Time") ||
                (filters.freeLance && item.worksched === "Freelance"))
        );
    });
    console.log("Filter", filteredJobs);

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const renderPaginationControls = () => {
        const paginationControls = [];
        for (let page = 1; page <= totalPages; page++) {
            paginationControls.push(
                <button
                    key={page}
                    className={`${
                        currentPage === page
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    } px-3 py-1 rounded-md mx-1`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            );
        }
        return paginationControls;
    };

    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <>
            <div className="container flex items-center justify-center gap-4 mx-auto">
                <form className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="lg:block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-[280px] md:w-[720px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Jobs"
                            onChange={(e) =>
                                setSearch(e.target.value.toLowerCase())
                            }
                        />
                    </div>
                </form>

                <Popover placement="bottom">
                    <PopoverHandler className="mt-8">
                        <button>
                            <HiLocationMarker className="text-5xl text-red-600 duration-500 hover:scale-110" />
                        </button>
                    </PopoverHandler>
                    <PopoverContent className="bg-blue-800 w-52">
                        <div className="flex flex-col text-white">
                            <div className="flex items-center">
                                <Checkbox
                                    color="green"
                                    checked={filters.hybrid}
                                    onChange={() =>
                                        handleCheckboxChange("hybrid")
                                    }
                                />
                                <h1 className="text-center">Hybrid</h1>
                            </div>
                            <div className="flex items-center">
                                <Checkbox
                                    color="green"
                                    checked={filters.onSite}
                                    onChange={() =>
                                        handleCheckboxChange("onSite")
                                    }
                                />
                                <h1 className="text-center">On-Site</h1>
                            </div>
                            <div className="flex items-center">
                                <Checkbox
                                    color="green"
                                    checked={filters.remote}
                                    onChange={() =>
                                        handleCheckboxChange("remote")
                                    }
                                />
                                <h1 className="text-center">Remote</h1>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="bottom">
                    <PopoverHandler className="mt-8">
                        <button>
                            <MdWorkHistory className="text-5xl text-green-600 duration-500 hover:scale-110" />
                        </button>
                    </PopoverHandler>
                    <PopoverContent className="bg-blue-800 w-52">
                        <div className="flex flex-col text-white">
                            <div className="flex items-center ">
                                <Checkbox
                                    color="green"
                                    checked={filters.fullTime}
                                    onChange={() =>
                                        handleCheckboxChange("fullTime")
                                    }
                                />
                                <h1 className="text-center">Full-Time</h1>
                            </div>
                            <div className="flex items-center">
                                <Checkbox
                                    color="green"
                                    checked={filters.partTime}
                                    onChange={() =>
                                        handleCheckboxChange("partTime")
                                    }
                                />
                                <h1 className="text-center">Part-Time</h1>
                            </div>
                            <div className="flex items-center">
                                <Checkbox
                                    color="green"
                                    checked={filters.freeLance}
                                    onChange={() =>
                                        handleCheckboxChange("freeLance")
                                    }
                                />
                                <h1 className="text-center">Freelance</h1>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            <div className="max-w-[1440px] mx-4 lg:mx-auto grid lg:grid-cols-2 gap-4 mt-8">
                {currentJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        id={job.id}
                        jobname={job.jobname}
                        jdescription={job.jdescription}
                        employer={job.employer}
                        salary={job.salary}
                        vacancy={job.vacancy}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {renderPaginationControls()}
            </div>
        </>
    );
}

export default JobListings;
