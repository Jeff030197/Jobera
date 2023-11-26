import React from "react";
import Footer from "@/Components/Footer/Footer";
import AuthNavBar from "@/Components/Navbar/AuthNavBar";

function Applications({ auth, appliedjobslist }) {
    const jobs = appliedjobslist;

    return (
        <div className=" bg-gray-900 ">
            <AuthNavBar auth={auth} />
            <div>
                <div>
                    <div>
                        <div className="flex row-auto justify-center pt-20">
                            <div className="py-2 px-32 bg-blue-gray-300 border-blue-gray-600 border">
                                Applied on
                            </div>
                            <div className="py-2 px-32 bg-blue-gray-300 border-blue-gray-600 border">
                                Applied role
                            </div>
                            <div className="py-2 px-56 bg-blue-gray-300  border-blue-gray-600 border">
                                Stages
                            </div>
                        </div>
                        <div className="pb-32">
                            <div className="flex row-auto justify-center">
                                <div className="py-14 px-32 bg-gray-200  border-blue-gray-600 border">
                                    Applied on
                                </div>
                                <div className="py-14 px-32 bg-gray-200  border-blue-gray-600 border">
                                    Applied role
                                </div>
                                <div className="py-14 px-56 bg-gray-200  border-blue-gray-600 border">
                                    Stages
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Applications;
