import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  // This data structure mimics what would come from backend JSON
  const educationData = [
    {
      id: 1,
      type: "School",
      institution: "Shree shail Mallikarjun vidhyamandir kolgaon-samsapur",
      degree: "10th standard",
      year: "2016 - 2021",
      website: "https://www.stmarysschool.edu"
    },
    {
      id: 2,
      type: "Deploma Course ",
      institution: "Puranmal Lahoti Government polytechnic latur",
      degree: "Information technology",
      year: "2021 - 2024",
      website: "https://www.abcjuniorcollege.edu"
    },
    {
      id: 3,
      type: "Bachelor of Engineering -BE ",
      institution: "Marathwada Mitra Mandal's College of Engineering Pune",
      degree: "Computer engineering",
      year: "2024 - 2027",
      website: "https://www.xyzuniversity.edu"
    }
  ]

  return (
    <div className="w-full py-8 px-3 lg:px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            My Journey
          </h2>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line - visible on all screens */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-yellow-400"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: false, amount: 0.3 }}
              className={`relative flex items-center mb-4 lg:mb-6 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col`}
            >
              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-4' : 'lg:pl-4'} pl-10 lg:pl-0`}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 p-3 lg:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-3 border-yellow-400"
                >
                  <span className="inline-block bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-xs font-semibold mb-1">
                    {item.type}
                  </span>
                  <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-0.5">
                    {item.institution}
                  </h3>
                  <p className="text-xs lg:text-sm font-semibold text-gray-700 mb-0.5">
                    {item.degree}
                  </p>
                  <p className="text-xs text-gray-500 mb-2 font-medium">
                    {item.year}
                  </p>
                  <a 
                    href={item.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-500 px-3 py-1.5 rounded-md transition-all duration-300 transform hover:scale-105"
                  >
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Timeline dot - visible on all screens */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.08 + 0.15 }}
                viewport={{ once: false }}
                className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 border-2 border-white rounded-full shadow-sm z-10"
              ></motion.div>

              {/* Empty space for alternate layout */}
              <div className="hidden lg:block w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
          className="text-center mt-4"
        >
          <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto flex items-center justify-center shadow-sm">
            <span className="text-base">🎓</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education
