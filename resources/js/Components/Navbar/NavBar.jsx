import React from "react";

import { BiLinkAlt, BiUserCircle } from "react-icons/bi";
import { Link } from "@inertiajs/react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Select,
    Option,
} from "@material-tailwind/react";
import PrimaryButton from "../PrimaryButton";

function NavBar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <>
            <Navbar className="max-w-full px-8 py-2 mx-auto rounded-none lg:py-4 bg-blue-gray-200">
                <div className="flex items-center mx-auto ">
                    <Link href="/">
                        <h1 className="flex text-6xl font-bold text-blue-900">
                            J
                            <span className="text-green-800">
                                <BiUserCircle />
                            </span>
                            B <span className="text-yellow-800">ERA</span>
                        </h1>
                    </Link>

                    <div className="flex justify-end w-full gap-4 text-blue-gray-900">
                        <Link href={route("login")}>
                            <PrimaryButton className="hidden px-4 py-2 tracking-widest uppercase transition duration-150 ease-in-out border border-transparent lg:inline-block focus:outline-none focus:ring-2 focus:ring-offset-2">
                                Login
                            </PrimaryButton>
                        </Link>
                        <Link href={route("register")}>
                            <button className="items-center hidden px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-green-800 border border-transparent rounded-md lg:inline-block hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                Register
                            </button>
                        </Link>

                        <IconButton
                            variant="text"
                            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>

                <Collapse open={openNav}>
                    <div className="container py-4 mx-auto">
                        <Link href={route("login")}>
                            <Button
                                variant="gradient"
                                color="blue"
                                size="sm"
                                fullWidth
                                className="mb-2"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link href={route("register")}>
                            <Button
                                variant="gradient"
                                color="green"
                                size="sm"
                                fullWidth
                                className="mb-2"
                            >
                                Register
                            </Button>
                        </Link>
                    </div>
                </Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;
