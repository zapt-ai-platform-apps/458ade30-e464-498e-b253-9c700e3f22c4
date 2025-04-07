import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { alphabetData } from '@/data/alphabetData';
import ProgressTracker from '@/components/ProgressTracker';

const AlphabetHome = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">Welcome to AlphaStory!</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Join our adventure through the alphabet where each letter brings exciting characters and stories to life!
        </p>
      </section>

      <ProgressTracker />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {alphabetData.map((item) => (
          <Link 
            key={item.letter} 
            to={`/letter/${item.letter}`}
            onMouseEnter={() => setHoveredLetter(item.letter)}
            onMouseLeave={() => setHoveredLetter(null)}
          >
            <motion.div 
              className={`${item.color} rounded-xl shadow-lg p-6 flex flex-col items-center text-white h-full transition-all cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold mb-2"
                animate={{
                  scale: hoveredLetter === item.letter ? [1, 1.2, 1] : 1,
                  transition: { duration: 0.5 }
                }}
              >
                {item.letter}
              </motion.div>
              <div className="text-sm md:text-base font-medium text-center">
                {item.character.split(' ')[0]}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <section className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-700">How to Use AlphaStory</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            Simply click on any letter to discover a character and their story. Each letter has:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>A unique character with a fun alliterative name</li>
            <li>An exciting setting that starts with the same letter</li>
            <li>A short story filled with words beginning with that letter</li>
            <li>A fun fact to learn something new</li>
            <li>Words to practice and learn</li>
          </ul>
          <p>
            Explore all 26 letters to complete your alphabet adventure!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AlphabetHome;