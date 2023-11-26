import React from "react";
import { usePage } from "@inertiajs/react";

import EmployerUser from "@/Components/Employer/EmployerUser";

const EmployerProfile = ({ auth, works, applied }) => {
    return (
        <div>

            <EmployerUser auth={auth} works={works} applied={applied} />
        </div>

    );
};

export default EmployerProfile;
