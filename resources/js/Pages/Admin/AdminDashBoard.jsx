import SideBar from "@/Components/AdminDashBoard/SideBar";
import React from "react";
// /mport '@/css/admin.css'

function AdminDashBoard({ users, applicants, employer, job_posted, applications }) {
    console.log(applications)

    return (
        <div>
            <SideBar users={users} applicants={applicants} employer={employer} job_posted={job_posted} applications={applications}/>
        </div>
    );
}

export default AdminDashBoard;
