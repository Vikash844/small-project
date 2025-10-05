import React from 'react';

const Header = () => {
    return (
        <div className="bg-white border-b border-gray-300">
            {/* Top Location + Menu Bar */}
            <div className="bg-gray-100 h-10">
                <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4">
                    {/* Left - Location Selector */}
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-gray-500 text-sm">Select Location</span>
                        <div className="bg-white border border-gray-300 rounded px-3 py-1 flex items-center gap-1">
                            <span className="text-black text-sm">New Delhi</span>
                            <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Right - Menu Items */}
                    <div className="flex items-center gap-4">
                        <span className="text-red-500 text-sm">We're hiring!</span>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <span className="text-gray-500 text-sm">How it Works</span>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <span className="text-gray-500 text-sm">List your Business</span>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-gray-500 text-sm">Login / Sign Up</span>
                    </div>
                </div>
            </div>

            {/* Main Header: Logo + Search */}
            <div className="bg-white h-20">
                <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4">
                    {/* Left - Logo */}
                    <div className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Noida Super Bazaar Logo"
                            className="h-40 w-60 object-contain"
                        />
                    </div>

                    {/* Right - Search */}
                    <div className="flex items-center">
                        <div className="flex">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search restaurants, spa, events"
                                    className="w-80 h-12 px-4 pr-12 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <svg
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <button className="bg-blue-800 text-white font-bold px-6 h-12 rounded-r-lg hover:bg-blue-700 transition-colors">
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
