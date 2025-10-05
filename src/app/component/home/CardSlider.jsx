'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cards = [
    {
        id: 1,
        // title: 'Get Loan Against Property',
        // description: 'At a competitive interest rate starting from 9.00% from Jio Finance Limited',
        // buttonText: 'Apply Now',
        image: '/download.jpg',
        // bg: 'bg-[#FFF3EB]',
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
    }, {
        id: 5,
        title: 'Real Estate',
        description: 'Finest Agents',
        buttonText: 'View More',
        image: '/download.jpg',
        bg: 'bg-indigo-600',
    },
];

// Slides for the big banner (first slot) - uses provided images
const bannerSlides = [
    { image: '/banner_hotels_2024.webp', alt: 'Banner 1' },
    { image: '/banner_loans_2024.webp', alt: 'Banner 2' },
    { image: '/banner_packersmovers_2024.webp', alt: 'Banner 3' },
];

const cardCategories = [
    { title: 'Buffet Deals', img: '/spa.1.jpg' },
    { title: 'Restaurant Deals', img: '/spa.1.jpg' },
    { title: 'Party Deals', img: '/spa.1.jpg' },
    { title: 'Spa Deals', img: '/spa.1.jpg' },
    { title: 'Salon Deals', img: '/spa.1.jpg' },
    { title: 'Games & Outings', img: '/spa.1.jpg' },
    { title: 'Health', img: '/spa.1.jpg' },
    { title: 'Gift Cards', img: '/spa.1.jpg' },
    { title: 'New Deals', img: '/spa.1.jpg' },
];

const CardSlider = () => {
    const [activeCard, setActiveCard] = useState(1);

    return (
        <>
            <div className="flex gap-4 p-4 max-w-screen-xl mx-auto">
                {/* Left: Big banner slider */}
                <div className="relative rounded-lg shadow-md cursor-pointer border overflow-hidden w-[600px] h-60 flex-shrink-0">
                    {/* Custom navigation buttons */}
                    <button
                        className="banner-prev cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center"
                        aria-label="Previous"
                    >
                        {/* Left chevron */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.53 19.53a.75.75 0 01-1.06 0l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 111.06 1.06L10.06 12l5.47 5.47a.75.75 0 010 1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button
                        className="banner-next cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center"
                        aria-label="Next"
                    >
                        {/* Right chevron */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M8.47 4.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L13.94 12 8.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{ prevEl: '.banner-prev', nextEl: '.banner-next' }}
                        pagination={{ clickable: true }}
                        loop
                        style={{ '--swiper-pagination-color': '#ffffff', '--swiper-pagination-bullet-inactive-color': '#ffffff', '--swiper-pagination-bullet-inactive-opacity': 0.5 }}
                        className="w-full h-full"
                    >
                        {bannerSlides.map((s, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative w-full h-full">
                                    <img src={s.image} alt={s.alt} className="absolute inset-0 w-full h-full object-cover" />
                                    <div className='' />
                                    <div className="relative z-10 h-full p-4 text-white flex flex-col">
                                        {/* <div>
                                            <h3 className="text-lg font-bold text-white">{cards[0]?.title}</h3>
                                            <p className="text-sm mt-1 text-white">{cards[0]?.description}</p>
                                        </div>
                                        <div className="mt-auto pt-4">
                                            <button className="bg-white text-black px-4 py-2 text-sm rounded hover:bg-gray-200 shadow absolute bottom-4 left-4">
                                                {cards[0]?.buttonText}
                                            </button> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right: Static cards (no slider) */}
                {cards.slice(1).map((card) => (
                    <div
                        key={card.id}
                        className="group relative rounded-lg shadow-md border overflow-hidden cursor-pointer w-[140px] h-60 flex-shrink-0"
                    >
                        <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
                        <div className="relative z-10 h-full p-4 text-white flex flex-col">
                            <div className="transition-all duration-300">
                                <h3 className="text-lg font-bold text-white transition-transform duration-300 group-hover:-translate-y-0.5">{card.title}</h3>
                                <p className="text-sm mt-1 text-white/95 transition-all duration-300 group-hover:text-white group-hover:-translate-y-0.5">{card.description}</p>
                            </div>
                            <div className="mt-auto pt-4">
                                {/* Default: round icon button */}
                                <button
                                    className="absolute bottom-4 left-4 bg-white/90 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-600 group-hover:opacity-0 group-hover:translate-x-1"
                                    aria-label="Open"
                                    title="Open"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M8.47 4.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L13.94 12 8.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {/* Hover: pill Explore button with slide/scale animation */}
                                <button
                                    className="absolute bottom-4 left-3 bg-white text-black px-3 py-1.5 text-xs font-semibold rounded-full shadow transition-all duration-300 opacity-0 translate-x-[-6px] scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
                                    aria-label="Explore"
                                    title="Explore"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <section className="max-w-screen-xl mx-auto px-4 py-10">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9 gap-7">
                    {cardCategories.map(({ title, img }) => (
                        <div key={title} className="flex flex-col items-center">
                            <div className="flex items-center justify-center transition-transform duration-200 hover:-translate-y-1">
                                <img className='w-11 h-8' src={img} alt="" />
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
