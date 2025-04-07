import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { alphabetData } from '@/data/alphabetData';
import { saveProgress } from '@/utils/progress';
import LetterHeader from './components/LetterHeader';
import CharacterDisplay from './components/CharacterDisplay';
import LetterNavigation from './components/LetterNavigation';

const LetterDetail = () => {
  const { letter } = useParams();
  const [letterData, setLetterData] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [nextLetter, setNextLetter] = useState('');
  const [prevLetter, setPrevLetter] = useState('');
  const [animate, setAnimate] = useState(false);

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
      const timer = setTimeout(() => {
        setIsRevealed(true);
        setTimeout(() => setAnimate(true), 500);
      }, 500);
      
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
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800 transition-colors">
          <span className="text-xl">←</span> Back to All Letters
        </Link>
        
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
        >
          <LetterHeader 
            letter={letterData.letter}
            character={character}
            color={color}
          />
          
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <CharacterDisplay 
                letter={letterData.letter}
                character={character}
                animate={animate}
                variants={itemVariants}
              />
              
              <motion.div variants={itemVariants}>
                <motion.div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">The Character</h2>
                  <p className="text-lg text-gray-700">{character} is ready for adventure!</p>
                </motion.div>
                
                <motion.div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">The Setting</h2>
                  <p className="text-lg text-gray-700">Our story takes place in {setting}.</p>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The Story</h2>
              <div className="bg-blue-50 border-l-4 border-blue-300 p-5 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed">{story}</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Fun Fact</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <p className="text-lg text-gray-700">{funFact}</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Words That Start With {letterData.letter}</h2>
              <div className="flex flex-wrap gap-3 mt-3">
                {words.map((word, index) => (
                  <motion.div 
                    key={index} 
                    className={`${color} bg-opacity-20 px-4 py-2 rounded-full text-lg font-medium`}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: color,
                      color: 'white' 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <LetterNavigation 
            prevLetter={prevLetter}
            nextLetter={nextLetter}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LetterDetail;