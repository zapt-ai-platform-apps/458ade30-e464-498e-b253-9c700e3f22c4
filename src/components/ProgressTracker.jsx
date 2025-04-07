import React, { useEffect, useState } from 'react';
import { getProgress, getCompletionPercentage, resetProgress } from '@/utils/progress';
import { alphabetData } from '@/data/alphabetData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProgressTracker = () => {
  const [progress, setProgress] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const currentProgress = getProgress();
    setProgress(currentProgress);
    const currentPercentage = getCompletionPercentage();
    setPercentage(currentPercentage);
    
    // Show celebration if completed all letters
    if (currentPercentage === 100) {
      setShowConfetti(true);
    }
  }, []);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your progress?')) {
      resetProgress();
      setProgress([]);
      setPercentage(0);
      setShowConfetti(false);
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-3 flex items-center">
        <span className="mr-2">🚀</span>
        Your Alphabet Adventure
      </h2>
      
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-6 mb-2 overflow-hidden">
          <motion.div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-6 rounded-full flex items-center justify-end pr-2 text-xs font-bold text-white"
            style={{ width: '0%' }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {percentage > 10 && `${percentage}%`}
          </motion.div>
        </div>
        <div className="text-sm text-gray-600 flex items-center">
          <motion.div
            animate={percentage === 100 ? {
              scale: [1, 1.2, 1],
              transition: { repeat: 2 }
            } : {}}
          >
            {progress.length} of 26 letters explored ({percentage}% complete)
          </motion.div>
          
          {percentage === 100 && (
            <motion.div 
              className="ml-2 bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              COMPLETED! 🎉
            </motion.div>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {alphabetData.map((item) => {
          const isExplored = progress.includes(item.letter);
          return (
            <Link 
              key={item.letter}
              to={`/letter/${item.letter}`}
            >
              <motion.div
                className={`
                  w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold
                  ${isExplored ? `${item.color} text-white` : 'bg-gray-200 text-gray-600'}
                  transition-all hover:scale-110 cursor-pointer
                `}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={isExplored && percentage < 100 ? { 
                  boxShadow: ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 8px rgba(52,211,153,0.5)', '0px 0px 0px rgba(0,0,0,0)'],
                  transition: {
                    boxShadow: {
                      repeat: Infinity,
                      duration: 2
                    }
                  }
                } : {}}
              >
                {item.letter}
              </motion.div>
            </Link>
          );
        })}
      </div>
      
      {progress.length > 0 && (
        <button 
          onClick={handleReset}
          className="text-sm text-red-600 hover:text-red-800 transition-colors cursor-pointer"
        >
          Reset Progress
        </button>
      )}
      
      {showConfetti && (
        <div className="absolute top-0 left-0 right-0 z-50">
          <div id="confetti-container"></div>
        </div>
      )}
    </motion.div>
  );
};

export default ProgressTracker;