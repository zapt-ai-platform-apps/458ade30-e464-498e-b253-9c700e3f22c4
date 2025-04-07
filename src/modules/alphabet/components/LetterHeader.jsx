import React from 'react';
import { motion } from 'framer-motion';

const LetterHeader = ({ letter, character, color }) => {
  const letterVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10
      } 
    }
  };

  const characterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
  };

  return (
    <div className={`${color} text-white py-10 px-6 text-center`}>
      <motion.div 
        className="relative flex justify-center items-center"
        variants={letterVariants}
      >
        {/* Circles decoration */}
        <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-white bg-opacity-10" 
             style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
        <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-white bg-opacity-5"
             style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
        
        <h1 className="text-8xl md:text-9xl font-bold mb-4 relative z-10 text-shadow">
          {letter}
        </h1>
      </motion.div>
      
      <motion.div 
        className="text-2xl md:text-3xl font-semibold"
        variants={characterVariants}
      >
        for {character}
      </motion.div>
    </div>
  );
};

export default LetterHeader;