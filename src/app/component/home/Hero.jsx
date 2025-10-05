import React from 'react'
import { FaRing, FaCouch, FaHotel, FaGraduationCap, FaKey, FaHospital, FaHelmetSafety, FaPaw, FaHouseUser, FaDumbbell, FaMoneyBillWave, FaCalendarDays, FaCarSide, FaBoxesPacking, FaTruckFast, FaListUl } from 'react-icons/fa6'

const categories = [
  { title: 'Wedding Planning', Icon: FaRing },
  { title: 'Home Decor', Icon: FaCouch },
  { title: 'Hotels', Icon: FaHotel },
  { title: 'Education', Icon: FaGraduationCap },
  { title: 'Rent & Hire', Icon: FaKey },
  { title: 'Hospitals', Icon: FaHospital },
  { title: 'Contractors', Icon: FaHelmetSafety },
  { title: 'Pet Shops', Icon: FaPaw },
  { title: 'Estate Agent', Icon: FaHouseUser },
  { title: 'Gym', Icon: FaDumbbell },
  { title: 'Loans', Icon: FaMoneyBillWave },
  { title: 'Event Organisers', Icon: FaCalendarDays },
  { title: 'Driving Schools', Icon: FaCarSide },
  { title: 'Packers & Movers', Icon: FaBoxesPacking },
  { title: 'Courier Service', Icon: FaTruckFast },
  { title: 'Popular Categories', Icon: FaListUl },
];

const Hero = () => {
  return (
      <section className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-7">
        {categories.map(({ title, Icon }) => (
          <div key={title} className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl border bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center transition-transform duration-200 hover:-translate-y-1">
              <Icon className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="mt-3 text-center text-sm leading-tight text-gray-800 font-medium">
              {title}
            </p>
          </div>
        ))}
      </div>
      </section>
      
  )
}

export default Hero