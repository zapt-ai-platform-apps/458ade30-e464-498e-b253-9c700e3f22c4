import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LetterNavigation = ({ prevLetter, nextLetter }) => {
  return (
    <div className="flex justify-between bg-gray-100 p-4">
      <Link to={`/letter/${prevLetter}`}>
        <motion.button 
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2"
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">←</span> Previous Letter
        </motion.button>
      </Link>
      
      <Link to={`/letter/${nextLetter}`}>
        <motion.button 
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2"
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          Next Letter <span className="text-xl">→</span>
        </motion.button>
      </Link>
    </div>
  );
};

export default LetterNavigation;