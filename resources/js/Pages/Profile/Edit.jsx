import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import AuthNavBar from "@/Components/Navbar/AuthNavBar";
import UpdateProfilePictureForm from "./Partials/UpdateProfilePictureForm";
import UserProfile from "../EmployerProfile/UserProfile/UserProfile";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthNavBar auth={auth} user={auth.user}>
            <div className="py-4">
                <div className="max-w-full mx-auto space-y-6 sm:px-6 lg:px-8">                   
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <UpdateProfilePictureForm className="max-w-xl" />
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthNavBar>
    );
}
