import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import withMT from "@material-tailwind/react/utils/withMT";

const existingConfig = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};

const newMTConfig = withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
});


const mergedConfig = {
    content: [...existingConfig.content, ...newMTConfig.content],
    theme: {
        ...existingConfig.theme,
        ...newMTConfig.theme,
    },
    plugins: [...existingConfig.plugins, ...newMTConfig.plugins],
};


export default mergedConfig;
