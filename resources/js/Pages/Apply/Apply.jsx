import Tabs from "../../Components/Apply/Tabs";
import { useForm } from "@inertiajs/react";
import { Alert } from "@material-tailwind/react";
import axios from "axios";
import AuthNavBar from "@/Components/Navbar/AuthNavBar";
import { useState } from "react";

function Apply({ apply, id, auth }) {
    console.log("larga", id);

    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);

    const { data, setData, reset } = useForm({
        status: "processing",
        job_id: apply[0].id,
        applicant_id: id[0].id,
    });
    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        axios
            .post("appliedJobs", data)
            .then((response) => {
                const successMsg = response.data;
                setSuccess(successMsg);
                setErrors(null);
            })
            .catch((error) => {
                const errorMsg = error.response.data;
                setErrors(errorMsg);

                console.error(error);
            });
    };

    return (
        <>
            <AuthNavBar auth={auth} />
            <div
                className="text-center border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
                style={{ backgroundColor: "#004AAD" }}
            >
                <p className="pt-5 text-4xl text-white sm:text-7xl md:text-8xl lg:text-7xl sm:pt-8 md:pt-10"></p>
                <p className="pt-5 text-4xl text-white sm:text-7xl md:text-8xl lg:text-7xl sm:pt-8 md:pt-10">
                    {apply[0].job_name}
                </p>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="job_id"
                        value={data.job_id}
                        onChange={handleInputChange}
                        className="hidden"
                    />
                    <input
                        type="text"
                        name="applicant_id"
                        value={data.applicant_id}
                        onChange={handleInputChange}
                        className="hidden"
                    />
                    <button
                        type="submit"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg border  hover:bg-blue-400 hover:text-white focus:z-10 focus:ring-4 dark:hover:text-black mt-5"
                        // onClick={() => window.my_modal_2.showModal()}
                    >
                        <p className="text-3xl text-white">Apply Now</p>
                    </button>

                    {errors && <Alert color="red">{errors.message}</Alert>}
                    {success && <Alert color="green">{success.message}</Alert>}
                </form>

                <dialog id="my_modal_2" className="modal">
                    {/* <div className="container p-4 mx-auto mt-5 text-center border-4 rounded-md">
                        <form className="modal-box">
                            <p className="mt-5">Name</p>

                            <p className="py-4">
                                <input
                                    type="text"
                                    placeholder="Complete Name"
                                    className="w-full max-w-xs mb-5 input input-bordered"
                                />

                                <p>Message</p>
                                <textarea
                                    className="mb-5 textarea textarea-info"
                                    placeholder="Message..."
                                ></textarea>
                                <p className="mb-2">Cv</p>
                                <input
                                    type="file"
                                    name="resume_path"
                                    className="w-full max-w-xs input input-bordered input-primary"
                                />
                            </p>
                            <button className="mt-5 bg-green-500 rounded-md ">
                                <p className="ml-5 mr-5">Submit</p>
                            </button>
                        </form>

                        <form method="dialog" className="modal-backdrop">
                            <button className="mt-5 bg-red-500 rounded-md ">
                                <p className="ml-5 mr-5">Close</p>
                            </button>
                        </form>
                    </div> */}
                </dialog>
                <div className="text-left">
                    <div className="row">
                        <div className="flex justify-center col">
                            <p className="py-2.5 px-5 mr-2 text-sm font-medium inline-flex items-center text-white ">
                                <svg
                                    style={{ color: "#FF3131" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                                <p className="text-3xl text-white">
                                    {apply[0].type_of_work}
                                </p>
                            </p>
                            <p className="py-2.5 px-5 mr-2 text-sm font-medium inline-flex items-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        style={{ color: "yellow" }}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p className="text-3xl text-white">
                                    {" "}
                                    {apply[0].work_schedule}
                                </p>
                            </p>
                            <p className="py-2.5 px-5 mr-2 text-sm font-medium inline-flex items-center text-white ">
                                PHP
                                <p className="text-3xl text-white">
                                    {" "}
                                    {apply[0].salary}
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Tabs desc={apply[0].job_description} />
        </>
    );
}

export default Apply;
