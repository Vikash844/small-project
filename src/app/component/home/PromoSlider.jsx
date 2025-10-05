"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
  {
    title: 'Relaxing Body Luxury Spa',
    location: 'Tagore Garden',
    subtitle: 'Massage Offers starting at ₹599',
    image: '/spa.jpg',
  },
  {
    title: 'Qi Spa',
    location: 'Aerocity',
    subtitle: 'Premium wellness therapies',
    image: '/spa1.jpg',
  },
  {
    title: 'Deep Tissue Therapy',
    location: 'Connaught Place',
    subtitle: 'Weekend specials available',
    image: '/images.jpg',
  },
]

const nextSlides = [
  { title: 'Connaught Place', offers: 25, priceFrom: 19, image: '/images.jpg' },
  { title: 'Club Road', offers: 8, priceFrom: 59, image: '/spa.jpg' },
  { title: 'Aerocity', offers: 6, priceFrom: 129, image: '/spa1.jpg' },
  { title: 'Ramphal Chowk Road', offers: 5, priceFrom: 99, image: '/spa.jpg' },
  { title: 'GK1 M Block Market', offers: 5, priceFrom: 999, image: '/images.jpg' },
  { title: 'Vegas Mall', offers: 4, priceFrom: 79, image: '/spa1.jpg' },
]


const PromoSlider = () => {
  return (
    <>
      <section className="w-full mt-10 overflow-x-hidden">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          slidesPerView={1}
          spaceBetween={0}
          className="w-full h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.title}>
              <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

                <div className="relative z-10 h-full flex items-center pl-6 sm:pl-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-gray-700">{s.location}</p>
                    <div className="mt-2 h-[3px] w-16 bg-indigo-500 rounded-full" />
                    <p className="mt-3 text-gray-900/80 font-medium">{s.subtitle}</p>
                  </div>
                </div>

                <div className="absolute right-6 bottom-6 z-10 hidden sm:block">
                  <button className="bg-white text-gray-900 font-semibold rounded-full px-5 py-2 shadow border">BUY NOW ›</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="w-full mt-10 mb-20 overflow-x-hidden">
        <h2 className="max-w-screen-xl mx-auto px-4 text-2xl font-semibold text-gray-900 mb-4">Popular Hangouts</h2>
        <div className="max-w-screen-xl mx-auto px-4 relative">
          {/* Custom nav buttons */}
          <button
            className="hangouts-prev absolute left-0 top-1/2 -translate-y-1/2 -ml-3 z-10 bg-white text-gray-900 w-9 h-14 rounded-md shadow flex items-center justify-center border"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            className="hangouts-next absolute right-0 top-1/2 -translate-y-1/2 -mr-3 z-10 bg-white text-gray-900 w-9 h-14 rounded-md shadow flex items-center justify-center border"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: '.hangouts-prev', nextEl: '.hangouts-next' }}
            loop
            slidesPerView={1.2}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 16 },
              768: { slidesPerView: 3.2, spaceBetween: 18 },
              1024: { slidesPerView: 4.2, spaceBetween: 20 },
              1280: { slidesPerView: 5.2, spaceBetween: 20 },
            }}
            className="w-full"
          >
            {nextSlides.map((s) => (
              <SwiperSlide key={s.title}>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow">
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  {/* bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                    <p className="text-sm mt-2 opacity-90">{s.offers} Offers</p>
                    <p className="text-sm opacity-90">Starting from ₹{s.priceFrom}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>

  )
}

export default PromoSlider


