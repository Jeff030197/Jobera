import React, { useState } from "react";
import { Card, Textarea, Button } from "@material-tailwind/react";
import EditModal from "./EditModal";
import QualificationModal from "./QualificationModal";
import { useForm } from "@inertiajs/react";

function SampleEmp({ works }) {
    console.log("trabaho", works);

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [qualificationModalOpen, setQualificationModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const handleOpenEditModal = (id) => {
        const selectedJob = works.find((job) => job.id === id);
        if (selectedJob) {
            console.log("Selected Job Data:", selectedJob);
            setSelectedJob(selectedJob);
            setEditModalOpen(true);
        } else {
            // Handle the case where no job is found for the given id
            console.error(`Job not found for id: ${id}`);
        }
    };

    const handleOpenQualificationModal = (id) => {
        const selectedJob = works.find((job) => job.id === id);
        console.log("Clicked job id:", selectedJob);
        if (selectedJob) {
            setSelectedJob(selectedJob);
            setQualificationModalOpen(true);
        } else {
            // Handle the case where no job is found for the given id
            console.error(`Job not found for id: ${id}`);
        }
    };

    const handleCloseModals = () => {
        setEditModalOpen(false);
        setQualificationModalOpen(false);
    };
    return (
        <div className="p-4 bg-blue-600">
            <Card
                className={`container w-full h-full mx-auto rounded-none ${
                    editModalOpen || qualificationModalOpen ? "hidden" : ""
                }`}
            >
                <h1 className="flex justify-center w-full">JOBS</h1>
                <table>
                    <tbody className="border">
                        {works.map((job) => (
                            <tr key={job.id}>
                                <td>{job.job_name}</td>
                                <td className="w-32">
                                    <button
                                        onClick={() =>
                                            handleOpenEditModal(job.id)
                                        }
                                    >
                                        <Button color="blue">Edit</Button>
                                    </button>
                                </td>
                                <td className="w-56">
                                    <button
                                        onClick={() =>
                                            handleOpenQualificationModal(job.id)
                                        }
                                    >
                                        <Button color="blue">
                                            Add Qualification
                                        </Button>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>

            {editModalOpen && (
                <EditModal
                    isOpen={editModalOpen}
                    onClose={handleCloseModals}
                    selectedJob={selectedJob}
                    works={works}
                />
            )}
            {qualificationModalOpen && (
                <QualificationModal
                    isOpen={handleOpenQualificationModal}
                    onClose={handleCloseModals}
                    selectedJob={selectedJob}
                />
            )}
        </div>
    );
}

export default SampleEmp;
