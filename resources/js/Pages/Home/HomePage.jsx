import Hero from "@/Components/Hero";

import JobListingsNew from "@/Components/Jobslistings/JobListingsNew";
import AuthNavBar from "@/Components/Navbar/AuthNavBar";
import NavBar from "@/Components/Navbar/NavBar";

import React from "react";

function HomePage({ auth, jobs }) {
    console.log("aled", jobs);
    const user = auth.user;

    return (
        <>
            <div className="w-full ">
                {user === null ? (
                    <div>
                        <div className="mx-auto ">
                            <NavBar />
                            <Hero />
                            <JobListingsNew auth={auth} jobs={jobs} />
                        </div>
                    </div>
                ) : (
                    <div>
                        <AuthNavBar auth={auth} />
                        <div>
                            <Hero />
                        </div>
                        <div className="mx-auto ">
                            <JobListingsNew auth={auth} jobs={jobs} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default HomePage;
