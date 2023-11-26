import React, { useState, useEffect } from "react";
import hero1 from "/resources/img/hero1.jpg";
import hero2 from "/resources/img/hero2.jpg";

function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const img = [hero1, hero2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((image) =>
                image === img.length - 1 ? 0 : image + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImage, img.length]);

    return (
        <div className="mx-auto">
            <div className="flex w-full">
                <img
                    src={img[currentImage]}
                    alt=""
                    className="object-cover w-full h-72"
                />
            </div>
        </div>
    );
}

export default Hero;
