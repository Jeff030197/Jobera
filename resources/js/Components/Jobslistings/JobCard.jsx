import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

function JobCard(props) {
    return (
        <div className="w-full">
            <Card className="flex-row max-w-full border h-80 ">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="w-2/5 m-0 rounded-r-none shrink-0"
                >
                    <img
                        src="https://www.shutterstock.com/shutterstock/photos/2081811025/display_1500/stock-vector-employer-branding-megaphone-with-employer-branding-speech-bubble-banner-loudspeaker-label-for-2081811025.jpg"
                        alt=""
                        className="w-full h-full duration-1000 object-fit hover:scale-125"
                    />
                </CardHeader>
                <CardBody className="flex flex-col w-full">
                    <Typography
                        variant="h4"
                        color="blue"
                        className="mb-2 uppercase"
                    >
                        {props.jobname}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {props.employer}
                    </Typography>
                    <Typography color="gray" className="">
                        Job Description:
                    </Typography>
                    <Typography
                        color="gray"
                        className="flex-grow mb-4 overflow-hidden max-h-[100px]"
                    >
                        {props.jdescription}
                    </Typography>
                    <div className="flex justify-between">
                        <a
                            href="/apply"
                            className="flex text-blue-600 duration-500 hover:scale-125"
                        >
                            <button>More Info</button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </a>
                        <Typography className="text-emerald-500">
                            {props.vacancy} Vacancies
                        </Typography>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default JobCard;
