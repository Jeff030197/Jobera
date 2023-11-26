import { BiUserCircle } from "react-icons/bi";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen sm:justify-center sm:pt-0">
                <div>
                    <Link href="/">
                        <h1 className="flex text-6xl font-bold text-blue-900">
                            J
                            <span className="text-green-800">
                                <BiUserCircle />
                            </span>
                            B <span className="text-yellow-800">ERA</span>
                        </h1>
                    </Link>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
