import React from 'react';
import { motion } from 'framer-motion';

const LetterWords = ({ words, letter, color }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Words that start with "{letter}":</h3>
      <div className="flex flex-wrap gap-3">
        {words.map((word, index) => (
          <motion.div
            key={index}
            className={`${color} bg-opacity-20 px-4 py-2 rounded-full text-lg font-medium text-gray-800 interactive-element`}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: color,
              color: 'white' 
            }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.1 * index }
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LetterWords;