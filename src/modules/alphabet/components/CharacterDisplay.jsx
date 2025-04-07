import React from 'react';
import { motion } from 'framer-motion';

const CharacterDisplay = ({ letter, character, animate, variants }) => {
  return (
    <motion.div 
      className="flex justify-center"
      variants={variants}
    >
      <div className="relative w-full max-w-sm">
        {/* Background decoration */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 transform rotate-3 z-0"></div>
        
        {/* Character image */}
        <motion.div 
          className="relative z-10 p-4 flex justify-center"
          animate={animate ? {
            y: [0, -10, 0],
            transition: {
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }
          } : {}}
        >
          <img src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHwlNjBjYXJ0b29uJTIwY2hhcmFjdGVyJTIwb2YlMjAlMjQlN0JjaGFyYWN0ZXJ8ZW58MHx8fHwxNzQ0MDIzOTkyfDA&ixlib=rb-4.0.3&q=80&w=1080" 
             
            alt={character} 
            data-image-request={`cartoon character of ${character}, friendly and colorful children's illustration style, alphabet letter ${letter} theme`}
            className="w-full h-64 object-contain rounded-lg"
          />
        </motion.div>
        
        {/* Character name */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-90 py-2 px-4 rounded-b-xl font-bold text-lg z-20"
          initial={{ y: 20, opacity: 0 }}
          animate={animate ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {character}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CharacterDisplay;