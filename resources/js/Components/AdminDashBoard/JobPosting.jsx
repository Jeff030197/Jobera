import React from "react";
import NavBar from "@/Components/Navbar/NavBar";
import Footer from "@/Components/Footer/Footer";

function JobPosting() {
    return (
      
        <div>
            
                <div className="p-10">
                    <div className="flex row-auto justify-center pt-20">
                        <div className="py-2 px-56 bg-blue-gray-300 border-blue-gray-600 border">
                            Job Name
                        </div>
                        <div className="py-2 px-28 bg-blue-gray-300 border-blue-gray-600 border">
                            Employer
                        </div>
                        <div className="py-2 px-24 bg-blue-gray-300  border-blue-gray-600 border">
                            Number Applicants
                        </div>
                    </div>
                    <div className="pb-32">
                        <div className="flex row-auto justify-center">
                            <div className="py-14 px-56 bg-gray-200  border-blue-gray-600 border">
                            Job Name
                            </div>
                            <div className="py-14 px-28 bg-gray-200  border-blue-gray-600 border">
                            Employer
                            </div>
                            <div className="py-14 px-24 bg-gray-200  border-blue-gray-600 border">
                            Number Applicants
                            </div>
                        </div>
                    </div>
           
        </div>
        </div>
    );
}

export default JobPosting;
