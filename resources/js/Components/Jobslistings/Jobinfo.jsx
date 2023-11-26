import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    List,
    ListItem,
} from "@material-tailwind/react";
import PrimaryButton from "../PrimaryButton";

function Jobinfo({ selectedJob, auth }) {
    const [userType, setUserType] = useState("");
    useEffect(() => {
        if (auth.user && auth.user.user_type) {
            setUserType(auth.user.user_type);
        }
    }, [auth.user]);

    const user = auth.user;

    return (
        <div className="">
            {selectedJob && (
                <Card className="w-full h-screen overflow-scroll border rounded-none">
                    <CardHeader
                        floated={false}
                        className="w-full mx-auto mt-0 rounded-none h-52"
                    >
                        <img
                            src={selectedJob.user.users_image}
                            alt="profile-picture"
                            className="object-contain w-full h-full "
                        />
                    </CardHeader>
                    <CardBody className="">
                        <Typography variant="h4" color="blue" className="mb-2">
                            {selectedJob.job_name}
                        </Typography>

                        <Typography
                            color="blue-gray"
                            variant="small"
                            className="font-medium"
                        >
                            {selectedJob.location}
                        </Typography>
                        <Typography
                            color="blue-gray"
                            variant="small"
                            className="font-medium"
                        >
                            Posted on 22-Sep-23
                        </Typography>
                        <br />
                        <Typography className="font-bold">
                            Job Description:
                        </Typography>
                        <Typography className="ml-4">
                            {selectedJob.job_description}
                        </Typography>
                        <br />
                        <Typography className="font-bold">
                            Qualifications:
                        </Typography>
                        {selectedJob.qualifications.map((qualification) => (
                            <ul
                                key={qualification.id}
                                className="ml-4 list-disc list-inside"
                            >
                                <li>{qualification.description}</li>
                            </ul>
                        ))}

                        <br />
                        <Typography className="font-bold">
                            Additional Information:
                        </Typography>
                        <Typography className="ml-4">
                            Salary: {selectedJob.salary}
                        </Typography>
                        <Typography className="ml-4">
                            Work Type: {selectedJob.type_of_work}
                        </Typography>
                        <Typography className="ml-4">
                            Work Schedule: {selectedJob.work_schedule}
                        </Typography>
                        <Typography className="ml-4">
                            Hours per Week: {selectedJob.hours_per_week}
                        </Typography>

                        <br />
                        <Link href={`/jobinfo/${selectedJob.id}`}>
                            {user === null ? (
                                <Link href={route("register")}>
                                    <button className="items-center hidden px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-green-800 border border-transparent rounded-md lg:inline-block hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                        Register to Apply
                                    </button>
                                </Link>
                            ) : null}
                            <PrimaryButton
                                className={
                                    userType === "applicant"
                                        ? "px-4 py-2 tracking-widest uppercase transition duration-150 ease-in-out border border-transparent lg:inline-block focus:outline-none focus:ring-2 focus:ring-offset-2"
                                        : "hidden"
                                }
                            >
                                Apply Now
                            </PrimaryButton>
                        </Link>
                    </CardBody>
                </Card>
            )}
        </div>
    );
}

export default Jobinfo;
