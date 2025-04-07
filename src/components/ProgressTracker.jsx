import React, { useEffect, useState } from 'react';
import { getProgress, getCompletionPercentage, resetProgress } from '@/utils/progress';
import { alphabetData } from '@/data/alphabetData';
import { Link } from 'react-router-dom';

const ProgressTracker = () => {
  const [progress, setProgress] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
    setPercentage(getCompletionPercentage());
  }, []);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your progress?')) {
      resetProgress();
      setProgress([]);
      setPercentage(0);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-3">Your Alphabet Adventure</h2>
      
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div 
            className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="text-sm text-gray-600">
          {progress.length} of 26 letters explored ({percentage}% complete)
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {alphabetData.map((item) => {
          const isExplored = progress.includes(item.letter);
          return (
            <Link 
              key={item.letter}
              to={`/letter/${item.letter}`}
              className={`
                w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold
                ${isExplored ? `${item.color} text-white` : 'bg-gray-200 text-gray-600'}
                transition-all hover:scale-110 cursor-pointer
              `}
            >
              {item.letter}
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
    </div>
  );
};

export default ProgressTracker;