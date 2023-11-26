import React from "react";

function Tabs(props) {
    return (
        <div>
            <h1 className="flex justify-center mt-5 text-4xl">
                <strong>Skills Required</strong>
            </h1>
            <br></br>

            <div className="mt-5 text-center container mx-auto border-4 border-light-blue-500 border-opacity-50 rounded-md p-4 ">
               {
                props.desc
               }
            </div>
        </div>
    );
}

export default Tabs;
