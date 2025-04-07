import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold flex items-center">
          <motion.span 
            className="mr-2 text-3xl md:text-4xl"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
            }}
          >
            📚
          </motion.span>
          <span className="font-extrabold tracking-wide">AlphaStory</span>
        </Link>
        <nav>
          <motion.ul 
            className="flex space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <li>
              <Link to="/" className="hover:text-blue-200 transition-colors flex items-center gap-1">
                <span>🏠</span> Home
              </Link>
            </li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;