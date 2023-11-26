import React from "react";
import ProfileSection from "@/Components/Applicant/ProfileSection";
import EducationSection from "@/Components/Applicant/EducationSection";
import ResumeSection from "@/Components/Applicant/ResumeSection";
import PreviousJobSection from "@/Components/Applicant/PreviousJobSection";
import Footer from "@/Components/Footer/Footer";

function ApplicantPage({ auth, applicants, works }) {
    console.log(applicants);
    console.log(auth);
    return (
        <>
            <div className="bg-gray-900 ">
                {/* PROFILE SECTION  */}
                <ProfileSection
                    auth={auth}
                    applicants={applicants}
                    works={works}
                />

                {/* RESUME SECTION */}
                <ResumeSection />
                {/* EDUCATION SECTION */}
                <EducationSection />

                {/* PREVIOUS JOBS SECTION */}
                <PreviousJobSection />
                <Footer></Footer>
            </div>
        </>
    );
}

export default ApplicantPage;
