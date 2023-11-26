import {
    Button,
    Input,
    Typography,
    input,
    Alert,
} from "@material-tailwind/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

function SampleApp({onClose}) {
    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);

    const { data, setData, reset } = useForm({
        job_title: "",
        phone_number: "",
        city_street: "",
        email: "",
        gender: "",
    });
    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        axios
            .post("applicants", data)
            .then((response) => {
                const successMsg = response.data;
                setSuccess(successMsg);
                setErrors(null);
                reset();
                console.log(response);
                onClose();
                window.location.reload();
            })
            .catch((error) => {
                const errorMsg = error.response.data;
                setErrors(errorMsg);
                console.error(error.response.data);
            });
    };

    return (
        <>
            <h1 className="text-center text-white">Add Applicant profile</h1>

            <div className="flex justify-center p-4 mx-auto bg-white w-96">
                <form action="" className="space-y-4 " onSubmit={submit}>
                    <Input
                        color="indigo"
                        label="Job Title"
                        name="job_title"
                        value={data.job_title}
                        onChange={handleInputChange}
                    />
                    <Input
                        color="indigo"
                        label="Phone Number"
                        name="phone_number"
                        value={data.phone_number}
                        onChange={handleInputChange}
                    />
                    <Input
                        color="indigo"
                        label="Location"
                        name="city_street"
                        value={data.city_street}
                        onChange={handleInputChange}
                    />
                    <Input
                        color="indigo"
                        label="email"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                    />
                    <Input
                        color="indigo"
                        label="gender"
                        name="gender"
                        value={data.gender}
                        onChange={handleInputChange}
                    />
                    {errors && <Alert color="red">{errors.message}</Alert>}
                    {success && <Alert color="green">{success.message}</Alert>}
                    <Button type="submit" color="blue">
                        add
                    </Button>
                </form>
            </div>
        </>
    );
}

export default SampleApp;
