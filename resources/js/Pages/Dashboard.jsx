import React, { useState, useEffect } from "react";
import EmployerProfile from "./EmployerProfile/EmployerProfile";
import AuthNavBar from "@/Components/Navbar/AuthNavBar";
import ApplicantPage from "./Applicant/ApplicantPage";
import { usePage } from "@inertiajs/react";

export default function Dashboard({
    auth,
    works,
    applicants,
    userId,
    applied,
}) {
    console.log("ako", applied);

    const [userType, setUserType] = useState("");

    useEffect(() => {
        if (auth.user && auth.user.user_type) {
            setUserType(auth.user.user_type);
        }
    }, [auth.user]);

    console.log(works);
    console.log(auth);

    return (
        <>
            <AuthNavBar auth={auth} />
            <div className="mx-auto ">
                {userType === "employer" ? (
                    <EmployerProfile
                        auth={auth}
                        works={works}
                        applied={applied}
                    />
                ) : userType === "applicant" ? (
                    <ApplicantPage
                        auth={auth}
                        applicants={applicants}
                        works={works}
                    />
                ) : null}
            </div>
        </>
    );
}
