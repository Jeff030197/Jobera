import React from "react";

const UserProfile = ({ auth }) => {

    console.log(auth)

    return (
        <div>
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-300 overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-6 text-blue-900 text-2xl">
                            <b>Personal Information</b>
                        </div>
                        <div className="container">
                            <div className="flex flex-col md:flex-row">
                                <div className="border-solid flex-1 basis-2/12 h-96 border-r-2 border-t-2">
                                    <br />
                                    <div className="mt-3 flex justify-center">
                                        <img
                                            className="rounded-full w-36 h-36 hover:cursor-pointer"
                                            src={auth.user.users_image}
                                            alt="Extra large avatar"
                                        ></img>
                                    </div>

                                    <div className="ml-8 mt-8">
                                        <div className="flex flex-row-2 gap-x-4">
                                            <ul>
                                                <li className="uppercase text-sm font-bold">
                                                    Name
                                                </li>
                                                <li className="uppercase text-sm mt-2 font-bold">
                                                    phone number
                                                </li>
                                                <li className="uppercase text-sm mt-2 font-bold">
                                                    lives in
                                                </li>
                                                <li className="uppercase text-sm mt-2 font-bold">
                                                    gender
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className=" text-sm ">
                                                    {auth.user.name}
                                                </li>
                                                <li className=" text-sm mt-2">
                                                    09675524754
                                                </li>
                                                <li className=" text-sm mt-2 w-20 h-5">
                                                    <p className="truncate">
                                                        Lorem Ipsum is simply
                                                        dummy text of the
                                                        printing and typesetting
                                                        industry. Lorem Ipsum
                                                        has been the industry's
                                                        standard dummy text ever
                                                        since the 1500s, when an
                                                        unknown printer took a
                                                        galley of type and
                                                        scrambled it to make a
                                                        type specimen book. It
                                                        has survived not only
                                                        five centuries, but also
                                                        the leap into electronic
                                                        typesetting, remaining
                                                        essentially unchanged.
                                                        It was popularised in
                                                        the 1960s with the
                                                        release of Letraset
                                                        sheets containing Lorem
                                                        Ipsum passages, and more
                                                        recently with desktop
                                                        publishing software like
                                                        Aldus PageMaker
                                                        including versions of
                                                        Lorem Ipsum.
                                                    </p>
                                                </li>
                                                <li className=" text-sm mt-2">
                                                    Male
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 basis-8/12">
                                    <div className=" border-t-2 h-52">
                                        <h1 className="ml-1 mt-1 uppercase font-semibold">
                                            general Information
                                        </h1>
                                        <div className="px-8 py-6">
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versions of Lorem Ipsum.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t-2 mt-2" />
                                    <div className="ml-1 mt-1">
                                        <b>Company</b>
                                    </div>

                                    <div className="flex ml-16 mt-3">
                                        <span className="hover:bg-orange-500 hover:text-white bg-orange-400 border-spacing-x-28 px-1 py-1 rounded-lg mr-1 text-sm">
                                            JavaScript
                                        </span>
                                        <span className="hover:bg-blue-500 hover:text-white bg-blue-400 border-spacing-x-28 px-1 py-1 rounded-lg text-sm mr-1">
                                            PHP
                                        </span>
                                        <span className="hover:bg-green-500 hover:text-white bg-green-400 border-spacing-x-28 px-1 py-1 rounded-lg text-sm">
                                            MySQL
                                        </span>
                                    </div>

                                    <table className="table-auto border border-slate-800 w-full mt-16">
                                        <thead className="bg-gray-500">
                                            <tr>
                                                <th className="border border-gray-900 py-4">
                                                    Jobs Applied
                                                </th>
                                                <th className="border border-gray-900">
                                                    Jobs Saved
                                                </th>
                                                <th className="border border-gray-900">
                                                    Profile Views
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-gray-200">
                                            <tr>
                                                <td className="border border-gray-700 py-4">
                                                    #jobs applied
                                                </td>
                                                <td className="border border-gray-700">
                                                    #jobs saved
                                                </td>
                                                <td className="border border-gray-700">
                                                    #profile views
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
