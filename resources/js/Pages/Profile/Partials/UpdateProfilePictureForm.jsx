import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function UpdateProfilePictureForm({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;
    const [imagePreview, setImagePreview] = useState(null);

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            users_image: user.users_image, // Correct key name
        });
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("users_image", file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        post(route("profile.updateImage"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Picture
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Upload your account's profile picture.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <input
                        type="file"
                        id="image"
                        className="block w-full mt-1"
                        onChange={handleImageChange}
                    />

                    <InputError className="mt-2" message={errors.image} />
                </div>
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Image Preview"
                        className="max-w-xs mt-2 rounded-md"
                    />
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Upload</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
