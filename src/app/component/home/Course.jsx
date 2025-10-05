"use client";

import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const allCourses = [
  { id: 1, title: 'Learning JavaScript With Imagination', tag: 'Development', author: 'David Millar', price: 15, image: '/spa.jpg' },
  { id: 2, title: 'The Complete Graphic Design for Beginners', tag: 'Design', author: 'David Millar', price: 19, image: '/images.jpg' },
  { id: 3, title: 'Learning Digital Marketing on Facebook', tag: 'Marketing', author: 'David Millar', price: 24, image: '/spa1.jpg' },
  { id: 4, title: 'Financial Analyst Training & Investing Course', tag: 'Business', author: 'David Millar', price: 12, image: '/images.jpg' },
  { id: 5, title: 'Advanced React and Next.js', tag: 'Development', author: 'David Millar', price: 21, image: '/spa.jpg' },
  { id: 6, title: 'Brand Identity Essentials', tag: 'Design', author: 'David Millar', price: 17, image: '/spa1.jpg' },
]

const tabs = ['All Courses', 'Design', 'Business', 'Development']

const Course = () => {
  const [active, setActive] = useState('All Courses')

  const shown = useMemo(() => {
    if (active === 'All Courses') return allCourses
    return allCourses.filter(c => c.tag === active)
  }, [active])

  return (
    <section className="w-full mt-10 mb-20 overflow-x-hidden relative py-10 bg-gradient-to-b from-[#f3efff] via-[#faf8ff] to-white">
      <div className="max-w-[70%] mx-auto px-4">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-indigo-300/30 blur-3xl" />
          <div className="absolute left-1/3 -top-10 h-40 w-40 rounded-full bg-fuchsia-300/25 blur-3xl" />
          <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
        </div>
        <div className="flex items-center justify-center gap-8 border-b border-gray-200 pb-3">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-3 text-sm sm:text-base font-medium ${active === tab ? 'text-gray-900' : 'text-gray-500'}`}
            >
              {tab}
              {active === tab && (
                <span className="block h-[3px] bg-indigo-500 rounded-full mt-2" />
              )}
            </button>
          ))}
        </div>

        <div className="relative mt-6">
          <button
            className="courses-prev absolute -left-10 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            className="courses-next absolute -right-10 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>

          <Swiper
            key={active}
            modules={[Navigation]}
            navigation={{ prevEl: '.courses-prev', nextEl: '.courses-next' }}
            loop
            slidesPerView={1}
            spaceBetween={18}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 18, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
              960: { slidesPerView: 3, spaceBetween: 20, slidesOffsetBefore: 12, slidesOffsetAfter: 12 },
              1280: { slidesPerView: 4, spaceBetween: 22, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
            }}
            className="w-full"
          >
            {shown.map((c) => (
              <SwiperSlide key={c.id}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 h-[360px] flex flex-col">
                  <div className="h-40 relative flex-shrink-0">
                    <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-2">{c.tag}</p>
                    <div className="min-h-[44px]">
                      <h3 className="text-[15px] font-semibold text-gray-900 leading-tight overflow-hidden">
                        {c.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 truncate">By {c.author}</p>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full">Enroll Now →</button>
                      <span className="text-indigo-600 font-semibold text-sm">${c.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Course