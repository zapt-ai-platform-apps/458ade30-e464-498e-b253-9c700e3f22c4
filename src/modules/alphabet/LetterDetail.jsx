import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { alphabetData } from '@/data/alphabetData';
import { saveProgress } from '@/utils/progress';

const LetterDetail = () => {
  const { letter } = useParams();
  const [letterData, setLetterData] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [nextLetter, setNextLetter] = useState('');
  const [prevLetter, setPrevLetter] = useState('');

  useEffect(() => {
    // Find the letter data
    const found = alphabetData.find(item => item.letter.toLowerCase() === letter.toLowerCase());
    if (found) {
      setLetterData(found);
      setIsRevealed(false);
      
      // Save progress
      saveProgress(found.letter);
      
      // Determine next and previous letters
      const currentIndex = alphabetData.findIndex(item => item.letter.toLowerCase() === letter.toLowerCase());
      const nextIndex = (currentIndex + 1) % alphabetData.length;
      const prevIndex = (currentIndex - 1 + alphabetData.length) % alphabetData.length;
      
      setNextLetter(alphabetData[nextIndex].letter);
      setPrevLetter(alphabetData[prevIndex].letter);
      
      // Automatically start revealing after a short delay
      const timer = setTimeout(() => setIsRevealed(true), 500);
      return () => clearTimeout(timer);
    }
  }, [letter]);

  if (!letterData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Letter not found. Please try another one.</h2>
        <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
          Back to All Letters
        </Link>
      </div>
    );
  }

  const { character, setting, story, funFact, words, color } = letterData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className={`min-h-screen ${color} bg-opacity-10`}>
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors">
          ← Back to All Letters
        </Link>
        
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
        >
          <div className={`${color} text-white py-10 px-6 text-center`}>
            <motion.h1 
              className="text-8xl md:text-9xl font-bold mb-4"
              variants={itemVariants}
            >
              {letterData.letter}
            </motion.h1>
            <motion.div 
              className="text-2xl md:text-3xl font-semibold"
              variants={itemVariants}
            >
              for {character}
            </motion.div>
          </div>
          
          <div className="p-6 md:p-8">
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The Character</h2>
              <p className="text-lg text-gray-700">{character} is ready for adventure!</p>
            </motion.div>
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The Setting</h2>
              <p className="text-lg text-gray-700">Our story takes place in {setting}.</p>
            </motion.div>
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The Story</h2>
              <p className="text-lg text-gray-700">{story}</p>
            </motion.div>
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Fun Fact</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-lg text-gray-700">{funFact}</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Words That Start With {letterData.letter}</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {words.map((word, index) => (
                  <div key={index} className={`${color} bg-opacity-20 px-3 py-1 rounded-full text-lg`}>
                    {word}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-between bg-gray-100 p-4">
            <Link 
              to={`/letter/${prevLetter}`} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
            >
              ← Previous Letter
            </Link>
            <Link 
              to={`/letter/${nextLetter}`} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Next Letter →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LetterDetail;