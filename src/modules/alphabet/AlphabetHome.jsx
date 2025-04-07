import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { alphabetData } from '@/data/alphabetData';
import ProgressTracker from '@/components/ProgressTracker';
import AlphabetCard from './components/AlphabetCard';

const AlphabetHome = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">Welcome to AlphaStory!</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Join our adventure through the alphabet where each letter brings exciting characters and stories to life!
        </p>
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://images.unsplash.com/photo-1579273166629-ef19c29b11fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxjYXJ0b29uJTIwY2hpbGRyZW4lMjBvZiUyMGRpdmVyc2UlMjBiYWNrZ3JvdW5kcyUyMGhhcHBpbHklMjBsZWFybmluZyUyMGFscGhhYmV0JTJDJTIwY29sb3JmdWwlMkMlMjBjaGlsZC1mcmllbmRseSUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3NDQwMjM5OTF8MA&ixlib=rb-4.0.3&q=80&w=1080" 
             
            alt="Kids learning alphabet" 
            data-image-request="cartoon children of diverse backgrounds happily learning alphabet, colorful, child-friendly illustration" 
            className="h-48 md:h-64 mx-auto rounded-lg shadow-md"
          />
        </motion.div>
      </section>

      <ProgressTracker />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {alphabetData.map((item) => (
          <AlphabetCard 
            key={item.letter}
            item={item}
            isHovered={hoveredLetter === item.letter}
            onMouseEnter={() => setHoveredLetter(item.letter)}
            onMouseLeave={() => setHoveredLetter(null)}
          />
        ))}
      </div>

      <section className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-700">How to Use AlphaStory</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="https://images.unsplash.com/photo-1498629718354-908b63db7fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxjYXJ0b29uJTIwY2hpbGQlMjBleHBsb3JpbmclMjBjb2xvcmZ1bCUyMGFscGhhYmV0JTIwYmxvY2tzJTJDJTIwYnJpZ2h0JTIwYW5kJTIwcGxheWZ1bCUyQyUyMGVkdWNhdGlvbmFsJTIwc2NlbmV8ZW58MHx8fHwxNzQ0MDIzOTkxfDA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Kid exploring alphabet" 
                data-image-request="cartoon child exploring colorful alphabet blocks, bright and playful, educational scene" 
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlphabetHome;