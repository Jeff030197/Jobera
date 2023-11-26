import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import {
    Card,
    Input,
    Textarea,
    Select,
    Option,
    Button,
} from "@material-tailwind/react";
import axios from "axios";

function EditModal({ isOpen, onClose, works, selectedJob }) {
    const { data, setData, put, reset } = useForm({
        job_name: "",
        location: "",
        vacancy: "",
        salary: "",
        hours_per_week: "",
        work_schedule: "",
        type_of_work: "",
        job_description: "",
    });

    useEffect(() => {
        if (works && works.length > 0) {
            const jobItem = works.find((item) => item.id === selectedJob.id);
            if (jobItem) {
                setData({
                    job_name: jobItem.job_name || "",
                    location: jobItem.location || "",
                    vacancy: jobItem.vacancy || "",
                    salary: jobItem.salary || "",
                    hours_per_week: jobItem.hours_per_week || "",
                    work_schedule: jobItem.work_schedule || "",
                    type_of_work: jobItem.type_of_work || "",
                    job_description: jobItem.job_description || "",
                });
            }
        }
        return () => {
            reset(
                "job_name",
                "location",
                "vacancy",
                "salary",
                "hours_per_week",
                "work_schedule",
                "type_of_work",
                "job_description"
            );
        };
    }, [works, selectedJob.id]);

    const handleInputChange = (value, fieldName) => {
        setData({ ...data, [fieldName]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log("laman", data);

        put(route("dashboard.update", { id: selectedJob.id }), data);

        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-blue-gray-200">
            <div className="p-8 bg-blue-200">
                <Card className="w-96">
                    <form className="p-4 space-y-4" onSubmit={submit}>
                        <Input
                            color="blue"
                            label="Job Name"
                            name="jobName"
                            value={data.job_name}
                            onChange={(e) =>
                                handleInputChange(e.target.value, "job_name")
                            }
                        />
                        <Input
                            color="blue"
                            label="Location"
                            name="location"
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
                        />

                        <Input
                            color="blue"
                            label="Vacancy"
                            name="vacancy"
                            value={data.vacancy}
                            onChange={(e) => setData("vacancy", e.target.value)}
                        />
                        <Input
                            color="blue"
                            label="Salary"
                            name="salary"
                            value={data.salary}
                            onChange={(e) => setData("salary", e.target.value)}
                        />
                        <Input
                            color="blue"
                            label="Hours per Week"
                            name="hrsPerWeek"
                            value={data.hours_per_week}
                            onChange={(e) =>
                                setData("hours_per_week", e.target.value)
                            }
                        />
                        <Select
                            color="blue"
                            label="Work Schedule"
                            name="workSched"
                            value={data.work_schedule}
                            onChange={(value) =>
                                handleInputChange(value, "work_schedule")
                            }
                        >
                            <Option value="Full-Time">Full-Time</Option>
                            <Option value="Part-Time">Part-Time</Option>
                        </Select>
                        <Select
                            color="blue"
                            label="Type of Work"
                            name="typeOfWork"
                            value={data.type_of_work}
                            onChange={(value) =>
                                handleInputChange(value, "type_of_work")
                            }
                        >
                            <Option value="On-Site">On-Site</Option>
                            <Option value="Hybrid">Hybrid</Option>
                            <Option value="Remote">Remote</Option>
                        </Select>
                        <Textarea
                            color="blue"
                            label="Job Description"
                            name="description"
                            value={data.job_description}
                            onChange={(e) =>
                                setData("job_description", e.target.value)
                            }
                        />
                        <div className="flex justify-between">
                            <Button type="submit" color="blue">
                                Update
                            </Button>
                            <Button color="blue" onClick={onClose}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default EditModal;
