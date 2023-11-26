import React from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

const CreateJobModal = ({ onClose }) => {
    const { data, setData, post, processing, reset } = useForm({
        job_name: "",
        vacancy: "",
        job_description: "",
        location: "",
        work_schedule: "",
        location: "",
        type_of_work: "",
        hours_per_week: "",
        location: "",
        salary: "",
    });

    const submit = (e) => {
        console.log("eto", e);
        e.preventDefault();
        post(route("createjob.store"), { onSuccess: () => reset() });
        onClose();
    };

    return (
        <>
            <form onSubmit={submit}>
                <div className="px-4">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={data.job_name}
                            type="text"
                            name="floating_first_job"
                            id="floating_first_job"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("job_name", e.target.value)
                            }
                        />
                        <label
                            for="floating_first_job"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Job Name
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={data.vacancy}
                            type="text"
                            name="floating_first_job"
                            id="floating_first_job"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => setData("vacancy", e.target.value)}
                        />
                        <label
                            for="floating_first_job"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Vacancy
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={data.work_schedule}
                            type="text"
                            name="floating_first_job"
                            id="floating_first_job"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("work_schedule", e.target.value)
                            }
                        />
                        <label
                            for="floating_first_job"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Work Schedule
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={data.location}
                            type="text"
                            name="floating_first_job"
                            id="floating_first_job"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
                        />
                        <label
                            for="floating_first_job"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Location
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={data.hours_per_week}
                            type="text"
                            name="floating_first_job"
                            id="floating_first_job"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) =>
                                setData("hours_per_week", e.target.value)
                            }
                        />
                        <label
                            for="floating_first_job"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Hours Per Week
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
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

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={data.salary}
                            type="text"
                            name="floating_first_job"
                            id="floating_first_job"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => setData("salary", e.target.value)}
                        />
                        <label
                            for="floating_first_job"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Salary
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label
                            for="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Job Description
                        </label>
                        <textarea
                            value={data.job_description}
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                            onChange={(e) =>
                                setData("job_description", e.target.value)
                            }
                        ></textarea>
                    </div>
                </div>

                <span className="px-4 py-4 mb-2">
                    <PrimaryButton disabled={processing}>Submit</PrimaryButton>
                </span>
            </form>
        </>
    );
};

export default CreateJobModal;
