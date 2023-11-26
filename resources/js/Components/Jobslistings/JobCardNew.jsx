import React, { useState } from "react";

import {
    Card,
    Typography,
    Button,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

function JobCardNew({ filteredJobs, highlightedJobId, handleJobClick }) {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentJobs = filteredJobs.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    return (
        <Card className="w-full h-full mt-4 rounded-none">
            <CardBody className="flex items-center justify-center">
                <table className="w-full mx-auto text-left">
                    {currentJobs.map((jobitems) => (
                        <tbody key={jobitems.id}>
                            <tr>
                                <td
                                    className={`p-2 w-full border-blue-gray-50 cursor-pointer ${
                                        highlightedJobId === jobitems.id
                                            ? "border-4 border-blue-600"
                                            : "border"
                                    }`}
                                    onClick={() => handleJobClick(jobitems)}
                                >
                                    <div className="flex items-center">
                                        <div className="flex flex-col ">
                                            <Typography
                                                variant="h5"
                                                color="blue"
                                                className="font-normal uppercase cursor-pointer "
                                            >
                                                {jobitems.job_name}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                className="font-bold text-gray-900 opacity-80"
                                            >
                                                {jobitems.user.name}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal opacity-70"
                                            >
                                                {jobitems.location}
                                            </Typography>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between p-4 border-blue-gray-50">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    Page {currentPage} of {totalPages}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant="outlined"
                        size="sm"
                        disabled={currentPage === 1}
                        onClick={handlePreviousPage}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outlined"
                        size="sm"
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}
                    >
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default JobCardNew;
