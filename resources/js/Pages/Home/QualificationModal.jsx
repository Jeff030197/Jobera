import { Card, Textarea, Button } from "@material-tailwind/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import axios from "axios";

function QualificationModal({ isOpen, onClose, selectedJob, works }) {
    const { data, setData, reset } = useForm({
        description: "",
        qualification_id: 1,
        id: selectedJob.id,
    });

    useEffect(() => {}, [works, selectedJob.id, reset]);

    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        axios
            .post("/qualifications", data)
            .then((response) => {
                console.log(response);
                // Handle success, if needed
            })
            .catch((error) => {
                console.error(error);
                // Handle error, if needed
            })
            .finally(() => {
                onClose();
            });
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-blue-gray-200">
            <div className="p-8 bg-blue-200">
                <Card className="w-96">
                    <form className="p-4 space-y-4" onSubmit={submit}>
                        <textarea
                            className="w-full h-32 p-2 border rounded"
                            name="description"
                            value={data.description}
                            onChange={handleInputChange}
                        />
                        <div className="flex justify-between">
                            <Button type="submit" color="blue">
                                add
                            </Button>
                            <Button color="blue" onClick={onClose}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default QualificationModal;
