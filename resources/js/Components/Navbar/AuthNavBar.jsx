import React from "react";

import { BiLinkAlt, BiUserCircle } from "react-icons/bi";
import { Link } from "@inertiajs/react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
} from "@material-tailwind/react";

function AuthNavBar({ auth, children }) {
    console.log(auth);
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const isApplicant = auth.user.user_type === "applicant";

    return (
        <>
            <Navbar className="max-w-full px-8 py-2 mx-auto rounded-none lg:py-4 bg-blue-gray-200">
                <div className="flex items-center mx-auto gap-4">
                    <Link href="/">
                        <h1 className="flex text-6xl font-bold text-blue-900">
                            J
                            <span className="text-green-800">
                                <BiUserCircle />
                            </span>
                            B <span className="text-yellow-800">ERA</span>
                        </h1>
                    </Link>

                    {isApplicant ? (
                        <>
                            <Link href="/applicant/career">
                                <b className="hover:underline ml-10 text-black">
                                    Applications
                                </b>
                            </Link>
                        </>
                    ) : null}

                    <div className="flex items-center justify-end w-full text-blue-gray-900">
                        <Menu>
                            <MenuHandler className="hidden cursor-pointer lg:inline-block">
                                <Typography>
                                    {auth.user.name}
                                    <Avatar
                                        variant="circular"
                                        alt=""
                                        className="ml-4 border-x-2 border-y-2 border-gray-400"
                                        src={auth.user.users_image}
                                    />
                                </Typography>
                            </MenuHandler>
                            <MenuList className="hover:border-none">
                                <MenuItem className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <Typography
                                        variant="small"
                                        className="font-normal"
                                    >
                                        <Link href={route("dashboard")}>
                                            My Profile
                                        </Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <Typography
                                        variant="small"
                                        className="font-normal"
                                    >
                                        <Link href={route("profile.edit")}>
                                            Settings
                                        </Link>
                                    </Typography>
                                </MenuItem>

                                <hr className="my-2 border-blue-gray-50" />

                                <MenuItem className="flex items-center gap-2 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                                        />
                                    </svg>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        <Typography
                                            variant="small"
                                            className="font-normal"
                                        >
                                            Sign Out
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>

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
                    <div className="py-4">
                        <Typography color="blue-gray">
                            {auth.user.name}
                        </Typography>
                        <Typography color="blue-gray">
                            <Link href={route("dashboard")}>My Profile</Link>
                        </Typography>
                        <Typography color="blue-gray">
                            <Link href={route("profile.edit")}>Settings</Link>
                        </Typography>
                        <Typography color="red" size="sm" className="my-2">
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Sign Out
                            </Link>
                        </Typography>
                    </div>
                </Collapse>
            </Navbar>
            <div>{children}</div>
        </>
    );
}

export default AuthNavBar;
