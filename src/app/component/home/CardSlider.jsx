'use client';

import React, { useState } from 'react';
import { FaBowlFood, FaUtensils, FaChampagneGlasses, FaSpa, FaScissors, FaGamepad, FaHeartPulse, FaGift, FaStar } from 'react-icons/fa6';

const cards = [
    {
        id: 1,
        title: 'Get Loan Against Property',
        description: 'At a competitive interest rate starting from 9.00% from Jio Finance Limited',
        buttonText: 'Apply Now',
        image: '/download.jpg',
        bg: 'bg-[#FFF3EB]',
    },
    {
        id: 2,
        title: 'B2B',
        description: 'Quick Quotes',
        buttonText: 'View More',
        image: '/download (1).jpg',
        bg: 'bg-blue-600',
    },
    {
        id: 3,
        title: 'Repairs & Services',
        description: 'Get Nearest Vendor',
        buttonText: 'View More',
        image: '/download (2).jpg',
        bg: 'bg-blue-800',
    },
    {
        id: 4,
        title: 'Real Estate',
        description: 'Finest Agents',
        buttonText: 'View More',
        image: '/download.jpg',
        bg: 'bg-indigo-600',
    },
];

const cardCategories = [
  { title: 'Buffet Deals', Icon: FaBowlFood },
  { title: 'Restaurant Deals', Icon: FaUtensils },
  { title: 'Party Deals', Icon: FaChampagneGlasses },
  { title: 'Spa Deals', Icon: FaSpa },
  { title: 'Salon Deals', Icon: FaScissors },
  { title: 'Games & Outings', Icon: FaGamepad },
  { title: 'Health', Icon: FaHeartPulse },
  { title: 'Gift Cards', Icon: FaGift },
  { title: 'New Deals', Icon: FaStar },
];

const CardSlider = () => {
    const [activeCard, setActiveCard] = useState(1);

    return (
        <>
            <div className="flex gap-4 p-4 overflow-x-auto max-w-screen-xl mx-auto">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`relative transition-all duration-300 ease-in-out rounded-lg shadow-md border overflow-hidden cursor-pointer ${activeCard === card.id ? 'w-[900px] h-96' : 'w-[200px] h-96'
                            }`}
                    >
                        {/* Background image */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

                        {/* Foreground content */}
                        <div className="relative z-10 h-full p-4 text-white flex flex-col">
                            <div>
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="text-sm mt-1 text-white">{card.description}</p>
                            </div>

                            {/* Action area */}
                            {activeCard === card.id ? (
                                <div className="mt-auto pt-4">
                                    <button
                                        onClick={() => setActiveCard(card.id)}
                                        className="bg-white text-black px-4 py-2 text-sm rounded hover:bg-gray-200 shadow absolute bottom-4 left-4"
                                    >
                                        {card.buttonText}
                                    </button>
                                </div>
                            ) : (
                                <div className="mt-auto pt-4">
                                    <button
                                        onClick={() => setActiveCard(card.id)}
                                        className="absolute bottom-4 left-4 bg-white/90 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow"
                                        aria-label="Open"
                                        title="Open"
                                    >
                                        {/* Right arrow */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M8.47 4.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L13.94 12 8.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <section className="max-w-screen-xl mx-auto px-4 py-10">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9 gap-7">
                    {cardCategories.map(({ title, Icon }) => (
                        <div key={title} className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center transition-transform duration-200 hover:-translate-y-1">
                                <Icon className="w-8 h-8 text-indigo-600" />
                            </div>
                            <p className="mt-3 text-center text-sm leading-tight text-gray-800 font-medium">
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CardSlider;
