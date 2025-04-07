import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AlphabetCard = ({ item, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <Link 
      to={`/letter/${item.letter}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div 
        className={`${item.color} rounded-xl shadow-lg p-4 flex flex-col items-center text-white h-full transition-all cursor-pointer overflow-hidden`}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="relative flex items-center justify-center w-full overflow-hidden"
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            transition: { duration: 0.5 }
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 rounded-full" style={{ transform: 'scale(0.85)' }}></div>
          <span className="text-4xl md:text-5xl font-bold relative z-10">
            {item.letter}
          </span>
        </motion.div>
        
        <div className="mt-2 text-sm md:text-base font-medium text-center">
          {item.character.split(' ')[0]}
        </div>
        
        <motion.div 
          className="w-full h-16 mt-2 overflow-hidden rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? 64 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center items-center h-full bg-white bg-opacity-20 p-1">
            <span className="text-xs text-center">
              Click to meet<br/>{item.character}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default AlphabetCard;