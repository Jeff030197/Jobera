import React, { useState } from "react";
import CreateJobRow from "./Modal/CreateJobRow";
import CreateJobs from "./CreateJobs";

const Joblists = ({ works }) => {
    console.log("works", works);

    return (
        <>
            <div className="flex justify-end">
                <span>
                    <CreateJobs />
                </span>
            </div>
            <div className="py-4">
                <div className="w-full overflow-y-auto h-80">
                    <table className="w-full border table-auto border-slate-800">
                        <thead>
                            <th className="bg-gray-500 border border-gray-800 ">
                                Job Name
                            </th>
                            <th className="bg-gray-500 border border-gray-800">
                                Vacancy
                            </th>
                            <th className="bg-gray-500 border border-gray-800">
                                Description
                            </th>{" "}
                            <th className="bg-gray-500 border border-gray-800">
                                {" "}
                                Location
                            </th>
                            <th className="bg-gray-500 border border-gray-800">
                                Work Schedule
                            </th>
                            <th className="bg-gray-500 border border-gray-800">
                                Type of Work
                            </th>
                            <th className="bg-gray-500 border border-gray-800">
                                Salary
                            </th>
                            <th className="bg-gray-500 border border-gray-800">
                                Action
                            </th>
                        </thead>
                        <tbody>
                            {works.map((job) => (
                                <CreateJobRow
                                    key={job.id}
                                    job={job}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Joblists;


