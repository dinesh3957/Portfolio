import React from 'react'
import profileImage from '../assets/myphoto22.png'

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center py-20 px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group cursor-pointer">
            {/* Yellow accent bars */}
            <div className="absolute -left-8 top-1/4 w-12 h-64 bg-yellow-400 transition-all duration-500 group-hover:h-80 group-hover:bg-yellow-500 group-active:h-80 group-active:bg-yellow-500"></div>
            <div className="absolute -right-8 top-1/4 w-12 h-64 bg-yellow-400 transition-all duration-500 group-hover:h-80 group-hover:bg-yellow-500 group-active:h-80 group-active:bg-yellow-500"></div>
            
            {/* Black border frame */}
            <div className="border-8 border-black p-4 bg-white relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-active:scale-105 group-active:shadow-2xl">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover transition-all duration-500 group-hover:brightness-110 group-active:brightness-110"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm Dinesh 
            </h1>
          </div>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-xl">
            A curious learner who enjoys creating simple, meaningful things and growing step by step.
          </p>

          <p className="text-lg text-gray-600 max-w-xl">
            Welcome to my personal space on the internet.
          </p>

          <div className="pt-6">
            <a href="/contact" className="btn bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
