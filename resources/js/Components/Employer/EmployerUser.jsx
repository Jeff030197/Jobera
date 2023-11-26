import React from "react";
import Joblists from "./Joblists";
import ApplicantList from "./ApplicantList";


const EmployerUser = ({ auth, works, applied }) => {
    const totalApplied = applied;

    console.log("damo", totalApplied);

    const uniqueApplicantIds = new Set(
        applied.map((application) => application.applicant_id)
    );

    const applicantIdLength = uniqueApplicantIds.size;
    const createjobsCount = works?.length ?? 0;

    return (
        <>
            <div>
                <div className="w-full px-6 py-8 mx-auto">
                    <div className="grid grid-cols-3 gap-x-48">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-6xl mb-8">
                                    {totalApplied.length}
                                </div>
                                <p class="text-gray-700 text-center ">
                                    {" "}
                                    Applied Jobs
                                </p>
                            </div>
                        </div>

                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-6xl mb-8">
                                    {applicantIdLength}
                                </div>
                                <p class="text-gray-700 text-center ">
                                    Applicants
                                </p>
                            </div>
                        </div>

                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <div class="px-6 py-4">
                                <div class="font-bold text-6xl mb-8">
                                    {createjobsCount}
                                </div>
                                <p class="text-gray-700 text-center ">
                                    Save Jobs
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Joblists works={works} />
                        <div className="w-full p-4 border">
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-collapse">
                                    <thead className="bg-gray-500">
                                        <tr>
                                            <th className="p-2 border border-gray-600">
                                                Applicant Name
                                            </th>
                                            <th className="p-2 border border-gray-600">
                                                Job Name
                                            </th>
                                            <th className="p-2 border border-gray-600">
                                                Status
                                            </th>
                                            <th className="p-2 border border-gray-600">
                                                Date Applied
                                            </th>
                                            <th className="p-2 border border-gray-600">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applied.map((appliedjobs) => (
                                            <tr>
                                                <td className="p-2 border border-gray-400">
                                                    {
                                                        appliedjobs.applicant
                                                            .user.name
                                                    }
                                                </td>
                                                <td className="p-2 border border-gray-400">
                                                    {
                                                        appliedjobs.create_jobs
                                                            .job_name
                                                    }
                                                </td>
                                                <td className="p-2 text-green-500 border border-gray-400">
                                                    {appliedjobs.status}
                                                </td>
                                                <td className="p-2 border border-gray-400">
                                                    {new Date(
                                                        appliedjobs.created_at
                                                    ).toLocaleString()}
                                                </td>
                                                <td className="p-2 text-green-500 border border-gray-400">
                                                    {appliedjobs.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployerUser;
