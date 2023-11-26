import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import NavBar from "@/Components/Navbar/NavBar";

function RegisterPage() {
    return (
        <div className="bg-blue-gray-100">
            <NavBar />
            <GuestLayout>
                <Link
                    href={route("register.applicant")}
                    className="flex justify-center w-full mb-2"
                >
                    <button className="items-center w-full py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-green-800 border border-transparent rounded-md lg:inline-block hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        Applicant
                    </button>
                </Link>

                <Link
                    href={route("register.employer")}
                    className="flex justify-center"
                >
                    <button className="items-center w-full py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-green-800 border border-transparent rounded-md lg:inline-block hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        Employer
                    </button>
                </Link>
            </GuestLayout>
        </div>
    );
}

export default RegisterPage;
