import React, { useState } from "react";
import Modal from "@/Components/Modal";
import UpdateModal from "@/Components/Employer/Modal/UpdateModal";

const CreateJobRow = ({ job }) => {
    console.log("jobs", job);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const handleEdit = () => {
        handleShow({
            id: job.id,
            job_name: job.job_name,
            vacancy: job.vacancy,
            job_description: job.job_description,
            location: job.location,
            work_schedule: job.work_schedule,
            type_of_work: job.type_of_work,
            salary: job.salary,
            
        });
    };


    return (
        <tr>
            <td className="border border-gray-800 ">{job.job_name}</td>
            <td className="border border-gray-800 ">{job.vacancy}</td>
            <td className="border border-gray-800 ">{job.job_description}</td>
            <td className="border border-gray-800 ">{job.location}</td>
            <td className="border border-gray-800 ">{job.work_schedule}</td>
            <td className="border border-gray-800 ">{job.type_of_work}</td>
            <td className="border border-gray-800 ">${job.salary}</td>
            <td className="flex items-center px-6 py-4 space-x-3 border border-gray-800">
                <button
                    onClick={handleEdit}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Edit
                </button>
                <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                    Remove
                </a>
            </td>
            {show && (
                <Modal show={show} onClose={handleClose}>
                    <UpdateModal
                    job={job}
                    />
                    </Modal>
                
            )}
        </tr>
    );
};

export default CreateJobRow;
