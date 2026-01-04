import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import profileImage from '../assets/myphoto222.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <>
  <div className="navbar bg-gray-900 text-white shadow-lg sticky top-0 z-50 w-full rounded-b-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <div className="flex items-center relative">
      <AnimatePresence mode="wait">
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0, width: 0, marginRight: 0 }}
            animate={{ opacity: 1, scale: 1, width: 48, marginRight: 12 }}
            exit={{ opacity: 0, scale: 0, width: 0, marginRight: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.4 },
              scale: { type: "spring", stiffness: 150, damping: 20 }
            }}
            className="overflow-hidden lg:hidden"
          >
            <div className="w-12 h-12 border-2 border-yellow-400 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ x: scrolled ? 0 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <Link to="/" className="btn btn-ghost text-xl font-extrabold whitespace-nowrap">Dinesh Rathod</Link>
      </motion.div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  </>
  )
}

export default Navbar
