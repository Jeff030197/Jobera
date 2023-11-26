import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Alert } from "@material-tailwind/react";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/Navbar/NavBar";

export default function Login({ status, canResetPassword }) {
    const [loginErrors, setLoginErrors] = useState(null);
    const [loginSuccess, setLoginSuccess] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        axios
            .post(route("login"), data)
            .then((response) => {
                const successMsg = response.data;
                setLoginSuccess(successMsg);
                setLoginErrors(null);
                reset();
                console.log("tae", response.data);

                if (response.data.message === "Login Successful!") {
                    window.location.href = "/dashboard";
                }
            })
            .catch((error) => {
                const errorMsg = error.response.data;
                setLoginErrors(errorMsg);
                console.error(errorMsg.message);
                // Log any errors
            });
    };

    return (
        <div className="bg-blue-gray-100">
            <NavBar />
            <GuestLayout>
                {/* {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )} */}

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="block w-full mt-1"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full mt-1"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="block mt-4">
                        {loginErrors && (
                            <Alert color="red" className="mb-4">
                                {loginErrors.message}
                            </Alert>
                        )}
                        {loginSuccess && (
                            <Alert color="green" className="mb-4">
                                {loginSuccess.message}
                            </Alert>
                        )}

                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>{" "}
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        {/* {success && <Alert color="green">{loginSuccess}</Alert>}  */}

                        <PrimaryButton className="ml-4" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
            </GuestLayout>
            <Footer />
        </div>
    );
}
