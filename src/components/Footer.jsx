import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div 
            className="mb-4 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span 
              className="text-2xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              🔤
            </motion.span>
            <motion.span 
              className="text-2xl"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              📚
            </motion.span>
            <motion.span 
              className="text-2xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              🎨
            </motion.span>
          </motion.div>
          <p className="mb-2 font-bold">AlphaStory - Learn the Alphabet Through Stories</p>
          <p className="text-sm text-indigo-200">© {new Date().getFullYear()} All Rights Reserved</p>
          <p className="mt-2 text-xs text-indigo-300">Making learning fun for kids everywhere!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;