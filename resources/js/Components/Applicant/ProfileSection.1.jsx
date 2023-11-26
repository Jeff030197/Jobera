import React from "react";

export function ProfileSection({ applicants }) {
    console.log(applicants);

    return (
        <div>
            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-2xl text-blue-900">
                            <b>Personal Information</b>
                        </div>
                        <div className="container ">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 border-t-2 border-r-2 border-solid basis-4/12">
                                    <br />
                                    <div className="flex justify-center mt-3">
                                        <img
                                            className="rounded-full w-36 h-36 hover:cursor-pointer"
                                            src="https://www.slashfilm.com/img/gallery/one-piece-film-red-showcases-luffys-new-transformation-for-the-first-time/l-intro-1667316814.jpg"
                                            alt="Image"
                                        />
                                    </div>

                                    <h1 className="flex justify-center mt-3 text-blue-500 card-title">
                                        Raja Jeff Edward
                                    </h1>

                                    <p className="flex justify-center mb-5 ">
                                        {applicants && applicants.length > 0
                                            ? applicants[0].email === undefined
                                                ? "hi"
                                                : applicants[0].email
                                            : "No applicants"}
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
                                                : "No applicants"}
                                        </b>
                                        <b>
                                            {applicants && applicants.length > 0
                                                ? applicants[0].city_street ===
                                                  undefined
                                                    ? "hi"
                                                    : applicants[0].city_street
                                                : "No applicants"}
                                        </b>
                                        <b>
                                            {applicants && applicants.length > 0
                                                ? applicants[0].gender ===
                                                  undefined
                                                    ? "hi"
                                                    : applicants[0].gender
                                                : "No applicants"}
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
                                    <div className="flex justify-around py-2 mt-2 ml-auto">
                                        <b>Jobs Applied</b>
                                        <b>Jobs Saved</b>
                                        <b>Profile Views</b>
                                    </div>
                                    <div className="flex justify-around mb-5 ml-auto text-blue-500">
                                        <b>#jobs applied</b>
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
