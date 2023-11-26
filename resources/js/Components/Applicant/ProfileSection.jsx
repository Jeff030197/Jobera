import React from "react";
import CreateJobs from "./Modal/CreateJobs";

function ProfileSection({ applicants, auth, works }) {
    console.log(applicants);
    console.log(auth);

    return (
        <div>
            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex justify-between p-5">
                            <div className="p-6 text-2xl justify-between text-blue-900">
                                <b>Personal Information</b>
                            </div>
                            <div>
                                <CreateJobs auth={auth}></CreateJobs>
                            </div>
                        </div>
                        <div className="container ">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 border-t-2 border-r-2 border-solid basis-4/12">
                                    <br />
                                    <div className="flex justify-center mt-3">
                                        <img
                                            className="rounded-full w-36 h-36 hover:cursor-pointer border-y-2 border-x-2"
                                            src={auth.user.users_image}
                                            alt=""
                                        />
                                    </div>

                                    <h1 className="flex justify-center mt-3 text-blue-500 card-title text-2xl">
                                        {auth.user.name}
                                    </h1>

                                    <p className="flex justify-center mb-2 ">
                                        {applicants && applicants.length > 0
                                            ? applicants[0].email === undefined
                                                ? "hi"
                                                : applicants[0].email
                                            : "Please add information"}
                                    </p>
                                    <p className="flex justify-center mb-5 text-2xl">
                                        {applicants && applicants.length > 0
                                            ? applicants[0].job_title ===
                                              undefined
                                                ? "hi"
                                                : applicants[0].job_title
                                            : "Please add information"}
                                    </p>
                                </div>
                                <div className="flex-1 basis-8/12">
                                    <div className="flex justify-between border-t-2">
                                        <h1 className="mt-3 ml-3 card-title">
                                            About
                                        </h1>

                                        {/* <AboutEditButton
                                /> */}
                                    </div>
                                    <div className="mt-2 border-t-2" />
                                    <div className="flex justify-around py-2 mt-2">
                                        <b>Phone Number</b>
                                        <b>Lives in</b>
                                        <b>Gender</b>
                                    </div>
                                    <div className="flex justify-around text-blue-500">
                                        <b>
                                            {applicants && applicants.length > 0
                                                ? applicants[0].phone_number ===
                                                  undefined
                                                    ? "hi"
                                                    : applicants[0].phone_number
                                                : "Please add information"}
                                        </b>
                                        <b>
                                            {applicants && applicants.length > 0
                                                ? applicants[0].city_street ===
                                                  undefined
                                                    ? "hi"
                                                    : applicants[0].city_street
                                                : "Please add information"}
                                        </b>
                                        <b>
                                            {applicants && applicants.length > 0
                                                ? applicants[0].gender ===
                                                  undefined
                                                    ? "hi"
                                                    : applicants[0].gender
                                                : "Please add information"}
                                        </b>
                                    </div>
                                    <div className="mt-2 border-t-2" />
                                    <div className="flex py-2 mt-2 ml-24">
                                        <b>Skills</b>
                                    </div>
                                    <div className="flex py-2 ml-24">
                                        <span className="px-1 py-1 mr-1 text-sm bg-orange-400 rounded-lg hover:bg-orange-500 hover:text-white border-spacing-x-28">
                                            JavaScript
                                        </span>
                                        <span className="px-1 py-1 mr-1 text-sm bg-blue-400 rounded-lg hover:bg-blue-500 hover:text-white border-spacing-x-28">
                                            PHP
                                        </span>
                                        <span className="px-1 py-1 text-sm bg-green-400 rounded-lg hover:bg-green-500 hover:text-white border-spacing-x-28">
                                            MySQL
                                        </span>
                                    </div>
                                    <div className="mt-2 border-t-2" />
                                    <div className="flex justify-evenly py-2 mt-2 ml-auto">
                                        <b>Jobs Applied</b>
                                        <b>Jobs Saved</b>
                                        <b>Profile Views</b>
                                    </div>
                                    <div className="flex justify-evenly mb-5 text-blue-500 ml-20">
                                        <b>{works.length}</b>
                                        <b>#jobs saved</b>
                                        <b>#profile views</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;
