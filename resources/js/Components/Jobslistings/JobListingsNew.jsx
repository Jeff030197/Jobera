import React, { useState } from "react";
import {
    Checkbox,
    Popover,
    PopoverHandler,
    PopoverContent,
    Typography,
} from "@material-tailwind/react";

import Jobinfo from "./Jobinfo";
import JobCardNew from "./JobCardNew";

function JobListingsNew({ auth, jobs }) {
    const [selectedJob, setSelectedJob] = useState(null);
    const [search, setSearch] = useState("");
    const [locationSearch, setLocationSearch] = useState("");
    const [highlightedJobId, setHighlightedJobId] = useState(null);
    const [filters, setFilters] = useState({
        hybrid: false,
        remote: false,
        onSite: false,
    });

    const handleJobClick = (job) => {
        setSelectedJob(job);
        setHighlightedJobId(job.id);
    };

    const handleCheckboxChange = (filterName) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    const filteredJobs = jobs.filter(
        (job) =>
            job.job_name.toLowerCase().includes(search.toLowerCase()) &&
            job.location.toLowerCase().includes(locationSearch.toLowerCase()) &&
            ((!filters.hybrid && !filters.remote && !filters.onSite) ||
                (filters.hybrid && job.type_of_work === "Hybrid") ||
                (filters.remote && job.type_of_work === "Remote") ||
                (filters.onSite && job.type_of_work === "On-site"))
    );

    return (
        <div className="px-8 mt-4 bg-white">
            <div className="items-center justify-center lg:flex ">
                <form className="px-4 py-4 ">
                    <div className="relative flex">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-blue-500 dark:text-blue-400"
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
                            className="w-full pl-10 text-sm text-gray-900 border border-gray-500 rounded-lg lg:w-96 lg:block bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Job Title"
                            onChange={(e) =>
                                setSearch(e.target.value.toLowerCase())
                            }
                        />
                    </div>
                </form>
                <form className="px-4 py-4 ">
                    <div className="relative flex">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-blue-500 dark:text-blue-400"
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
                            className="w-full pl-10 text-sm text-gray-900 border border-gray-500 rounded-lg lg:w-96 lg:block bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Job Location"
                            onChange={(e) =>
                                setLocationSearch(e.target.value.toLowerCase())
                            }
                        />
                    </div>
                </form>

                <Popover placement="bottom">
                    <PopoverHandler>
                        <button className="items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-blue-800 border border-transparent rounded-md lg:inline-block hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            SORT
                        </button>
                    </PopoverHandler>
                    <PopoverContent className="p-4 pr-8">
                        <Typography className="flex items-center w-full">
                            <Checkbox
                                color="blue"
                                checked={filters.hybrid}
                                onChange={() => handleCheckboxChange("hybrid")}
                            />
                            Hybrid
                        </Typography>
                        <Typography className="flex items-center ">
                            <Checkbox
                                color="blue"
                                checked={filters.onSite}
                                onChange={() => handleCheckboxChange("onSite")}
                            />
                            On-site
                        </Typography>
                        <Typography className="flex items-center ">
                            <Checkbox
                                color="blue"
                                size="smal"
                                checked={filters.remote}
                                onChange={() => handleCheckboxChange("remote")}
                            />
                            Remote
                        </Typography>
                    </PopoverContent>
                </Popover>
            </div>

            {/* LEFT */}
            <div className="grid gap-4 mt-4 lg:grid-cols-3">
                <div className="w-full overflow-hidden border h-[38rem] ">
                    <JobCardNew
                        filteredJobs={filteredJobs}
                        highlightedJobId={highlightedJobId}
                        handleJobClick={handleJobClick}
                    />
                </div>

                {/* RIGHT */}
                <div className="w-full lg:col-span-2">
                    <Jobinfo selectedJob={selectedJob} auth={auth} />
                </div>
            </div>
        </div>
    );
}

export default JobListingsNew;
