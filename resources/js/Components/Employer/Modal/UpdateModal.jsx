import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";

const UpdateModal = ({ onClose, job }) => {
    console.log('jobses', job)
    const { data, setData, put, reset, errors } = useForm({

        job_name: job.job_name,
        vacancy: job.vacancy,
        job_description: job.job_description,
        work_schedule: job.work_schedule,
        location: job.location,
        type_of_work: job.type_of_work,
        hours_per_week: job.hours_per_week,
        salary: job.salary,
    });

    useEffect(() => {
        reset(data);
    }, [job]);

    const submit = async (e) => {
        e.preventDefault();
    
            const jobId = job.id;
    
            const updatedJob = {
                ...data,
                id: jobId,
            };
            console.log("updatedjob", jobId);
            return put(route("createjob.update", { id: jobId }, { onSuccess: () => reset() }), updatedJob);
           
    };

    return (
        <>
            <div className="w-full h-fit px-8 py-8">
                    <form onSubmit={submit}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                Job Name
                            </label>
                            <input
                                value={data.job_name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                onChange={(e) =>
                                    setData("job_name", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                vacancy
                            </label>
                            <input
                                value={data.vacancy}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                onChange={(e) =>
                                    setData("vacancy", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                Job Description
                            </label>
                            <input
                                value={data.job_description}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                onChange={(e) =>
                                    setData("job_description", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                lcoation
                            </label>
                            <input
                                value={data.location}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                            />
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                Work Schedule
                            </label>
                            <select
                                value={data.type_of_work}
                                onChange={(e) =>
                                    setData("type_of_work", e.target.value)
                                }
                                className="w-full"
                            >
                                <option value="">Type of Work</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="On-site">On-site</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                Hours Per Week
                            </label>
                            <input
                                value={data.hours_per_week}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                onChange={(e) =>
                                    setData("hours_per_week", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                salary
                            </label>
                            <input
                                value={data.salary}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                onChange={(e) =>
                                    setData("salary", e.target.value)
                                }
                            />
                        </div>
                        <span className="flex justify-end mt-4">
                            <span className="px-4">
                                <button
                                    onClick={onClose}
                                    type="submit"
                                    className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm-w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
                                >
                                    Submit
                                </button>
                            </span>
                            <button
                           
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Close
                            </button>
                        </span>
                    </form>
            </div>
        </>
    );
};

export default UpdateModal;
