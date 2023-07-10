import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
const data = [
    {
        name: 'Rai Raksa Muhamad',

        image: 'https://rairaksa.github.io/assets/img/rai.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        name: 'fddf Raksa Muhamad',

        image: 'https://rairaksa.github.io/assets/img/rai.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        name: ' Raksa Muhamad',

        image: 'https://rairaksa.github.io/assets/img/rai.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        name: 'dfads Raksa Muhamad',

        image: 'https://rairaksa.github.io/assets/img/rai.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    // Add more data objects if needed
];

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const { name, role, image, description } = data[currentIndex];

    return (
        <div className="w-full flex flex-col items-center gap-3 px-5 lg:px-0 mt-8 lg:mt-12">
            <h1 className="heading w-48 h-2 mx-auto text-4xl lg:text-5xl">
                Testimonials
            </h1>
            <h1 className="mt-8 lg:mt-12 text-md md:text-xl  text-gray-600 leading-relaxed lg:text-center lg:w-4/5 w-full">
                {description}
            </h1>
            <div className="flex items-center gap-2">
                <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                    <img src={image} alt={name} />
                </div>
                <div className="flex flex-col ">
                    <label className="text-gray-600 font-bold text-base">{name}</label>
                </div>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded"
                >
                    <GrFormPreviousLink />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === data.length - 1}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded"
                >
                    <GrFormNextLink />
                </button>
            </div>
        </div>
    );
};

export default App;
