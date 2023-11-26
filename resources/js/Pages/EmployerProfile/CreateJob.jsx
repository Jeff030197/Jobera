import React from "react";

import CreateJobs from "@/Components/Employer/CreateJobs";
import AuthNavBar from "@/Components/Navbar/AuthNavBar";

const CreateJob = ({ auth }) => {
    return (
        <div>
            <CreateJobs auth={auth} />
        </div>
    );
};

export default CreateJob;
